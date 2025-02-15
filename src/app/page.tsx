"use client";
import StarField from "@/components/StarField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@/components/ui/tooltip";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  useReadFaucetClaimedErc20,
  useReadFaucetClaimedNft,
  useReadFaucetFee,
  useWriteFaucetClaimErc20,
  useWriteFaucetClaimNft,
} from "@/lib/contracts";
import { generateClaimSignature } from "@/app/actions";
import { ConnectKitButton } from "connectkit";
import Link from "next/link";
import { toast } from "sonner";
import { formatEther } from "viem";
import { useAccount, useBalance } from "wagmi";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <StarField />
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <Content />
      </div>
    </div>
  );
}

const Content = () => {
  const { isConnected } = useAccount();
  return (
    <Card className=" w-[500px] relative">
      <CardHeader className="w-full space-y-4">
        <CardTitle className="flex items-center justify-between w-full">
          <div className="text-2xl font-bold">FROMO Faucet</div>
          <div className="z-10">
            {isConnected && (
              <ConnectKitButton showAvatar={false} showBalance={true} />
            )}
          </div>
        </CardTitle>
        <CardDescription>
          Berachain NFT holders can claim 3 Testnet NFTs and 10000 OMO to be
          used at{" "}
          <Button variant={"link"} size={"sm"} className="p-0" asChild>
            <Link href="https://app.fromo.xyz" target="_blank">
              app.fromo.xyz
            </Link>
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent className="py-12">
        {isConnected ? (
          <Faucet />
        ) : (
          <ConnectKitButton showAvatar={false} showBalance={false} />
        )}
      </CardContent>
      <CardFooter className="text-sm text-gray-500">
        * Eligible until all test NFTs are claimed
      </CardFooter>
    </Card>
  );
};

const Faucet = () => {
  // display a button to claim from faucet

  return (
    <div className="flex flex-col gap-4">
      <NFTClaim />
      <ERC20Claim />
    </div>
  );
};
const ClaimButton = ({
  type,
  buttonText,
  loadingText,
  successText,
  errorText,
}: {
  type: "nft" | "erc20";
  buttonText: string;
  loadingText: string;
  successText: string;
  errorText: string;
}) => {
  const { address } = useAccount();
  const fee = useReadFaucetFee();
  const userBalance = useBalance({
    address,
  });
  const claimedErc20 = useReadFaucetClaimedErc20({
    args: [address!],
    query: {
      enabled: !!address,
    },
  });

  const claimedNft = useReadFaucetClaimedNft({
    args: [address!],
    query: { enabled: !!address },
  });

  const claimErc20 = useWriteFaucetClaimErc20();
  const claimNft = useWriteFaucetClaimNft();

  const isLoading =
    fee.isLoading ||
    userBalance.isLoading ||
    claimedErc20.isLoading ||
    claimedNft.isLoading;

  const insufficientBalance =
    (userBalance.data?.value || 0n) < (fee.data || 0n);

  const isError =
    insufficientBalance ||
    (type === "erc20" && claimedErc20.data) ||
    (type === "nft" && claimedNft.data);

  const claimFunction = type === "nft" ? claimNft : claimErc20;

  return (
    <TooltipProvider>
      <Tooltip open={isError ? undefined : false}>
        <TooltipTrigger asChild>
          <Button
            size={"lg"}
            onClick={async () => {
              if (insufficientBalance) {
                toast.error(`Must send ${formatEther(fee.data || 0n)} ETH`);
                return;
              }

              const claim = async () => {
                const signature = await generateClaimSignature({
                  address,
                  type,
                });

                return claimFunction.writeContractAsync({
                  value: fee.data,
                  args: [signature],
                });
              };

              toast.promise(claim(), {
                loading: loadingText,
                success: successText,
                error: errorText,
              });
            }}
            className={`${isError ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={isLoading}
          >
            {buttonText}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {insufficientBalance && (
            <p>You must have at least {formatEther(fee.data || 0n)} ETH</p>
          )}
          {type === "erc20" && claimedErc20.data && (
            <p>You have already claimed</p>
          )}
          {type === "nft" && claimedNft.data && <p>You have already claimed</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const NFTClaim = () => {
  return (
    <ClaimButton
      type="nft"
      buttonText="Claim 3 NFTs"
      loadingText="Claiming NFT..."
      successText="NFTs claimed"
      errorText="Error claiming NFT"
    />
  );
};

const ERC20Claim = () => {
  return (
    <ClaimButton
      type="erc20"
      buttonText="Claim 10000 OMO"
      loadingText="Claiming ERC20..."
      successText="ERC20s claimed"
      errorText="Error claiming ERC20"
    />
  );
};
