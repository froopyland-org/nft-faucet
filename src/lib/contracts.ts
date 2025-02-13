import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Mock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20MockAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'decimals', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Faucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const faucetAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'initialERC20Token', internalType: 'address', type: 'address' },
      { name: 'initialNftAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ERC20_AMOUNT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'FEE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NFT_MINT_COUNT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimERC20',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'claimNFT',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'claimedErc20',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'claimedNFT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'erc20Token',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'faucetNft',
    outputs: [
      { name: '', internalType: 'contract IMintableERC721', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newToken', internalType: 'address', type: 'address' }],
    name: 'setERC20Token',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 *
 */
export const faucetAddress = {
  31337: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
} as const

/**
 *
 */
export const faucetConfig = { address: faucetAddress, abi: faucetAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FaucetERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const faucetErc721Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [{ name: 'entity', internalType: 'address', type: 'address' }],
    name: 'addApprovedEntity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'approvedEntities',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenIdCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMintableERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMintableErc721Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
  { type: 'error', inputs: [], name: 'StringsInvalidAddressFormat' },
  { type: 'error', inputs: [], name: 'StringsInvalidChar' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /*#__PURE__*/ createUseReadContract({
  abi: erc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MockAbi}__
 */
export const useReadErc20Mock = /*#__PURE__*/ createUseReadContract({
  abi: erc20MockAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20MockAllowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20MockAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20MockBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20MockAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20MockDecimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20MockAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"name"`
 */
export const useReadErc20MockName = /*#__PURE__*/ createUseReadContract({
  abi: erc20MockAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20MockSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20MockAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20MockTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20MockAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MockAbi}__
 */
export const useWriteErc20Mock = /*#__PURE__*/ createUseWriteContract({
  abi: erc20MockAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20MockApprove = /*#__PURE__*/ createUseWriteContract({
  abi: erc20MockAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteErc20MockMint = /*#__PURE__*/ createUseWriteContract({
  abi: erc20MockAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20MockTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20MockAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20MockTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20MockAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MockAbi}__
 */
export const useSimulateErc20Mock = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20MockAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20MockApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20MockAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateErc20MockMint = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20MockAbi, functionName: 'mint' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20MockTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20MockAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20MockTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20MockAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20MockAbi}__
 */
export const useWatchErc20MockEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: erc20MockAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20MockAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20MockApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20MockAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20MockAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20MockTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20MockAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__
 *
 *
 */
export const useReadFaucet = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"ERC20_AMOUNT"`
 *
 *
 */
export const useReadFaucetErc20Amount = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'ERC20_AMOUNT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"FEE"`
 *
 *
 */
export const useReadFaucetFee = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'FEE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"NFT_MINT_COUNT"`
 *
 *
 */
export const useReadFaucetNftMintCount = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'NFT_MINT_COUNT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimedErc20"`
 *
 *
 */
export const useReadFaucetClaimedErc20 = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimedErc20',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimedNFT"`
 *
 *
 */
export const useReadFaucetClaimedNft = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimedNFT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"erc20Token"`
 *
 *
 */
export const useReadFaucetErc20Token = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'erc20Token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"faucetNft"`
 *
 *
 */
export const useReadFaucetFaucetNft = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'faucetNft',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"owner"`
 *
 *
 */
export const useReadFaucetOwner = /*#__PURE__*/ createUseReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__
 *
 *
 */
export const useWriteFaucet = /*#__PURE__*/ createUseWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimERC20"`
 *
 *
 */
export const useWriteFaucetClaimErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimERC20',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimNFT"`
 *
 *
 */
export const useWriteFaucetClaimNft = /*#__PURE__*/ createUseWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimNFT',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const useWriteFaucetRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"setERC20Token"`
 *
 *
 */
export const useWriteFaucetSetErc20Token = /*#__PURE__*/ createUseWriteContract(
  { abi: faucetAbi, address: faucetAddress, functionName: 'setERC20Token' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const useWriteFaucetTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"withdraw"`
 *
 *
 */
export const useWriteFaucetWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__
 *
 *
 */
export const useSimulateFaucet = /*#__PURE__*/ createUseSimulateContract({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimERC20"`
 *
 *
 */
export const useSimulateFaucetClaimErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'claimERC20',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimNFT"`
 *
 *
 */
export const useSimulateFaucetClaimNft =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'claimNFT',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const useSimulateFaucetRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"setERC20Token"`
 *
 *
 */
export const useSimulateFaucetSetErc20Token =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'setERC20Token',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const useSimulateFaucetTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"withdraw"`
 *
 *
 */
export const useSimulateFaucetWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetAbi}__
 *
 *
 */
export const useWatchFaucetEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 *
 */
export const useWatchFaucetOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: faucetAbi,
    address: faucetAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__
 */
export const useReadFaucetErc721 = /*#__PURE__*/ createUseReadContract({
  abi: faucetErc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"approvedEntities"`
 */
export const useReadFaucetErc721ApprovedEntities =
  /*#__PURE__*/ createUseReadContract({
    abi: faucetErc721Abi,
    functionName: 'approvedEntities',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadFaucetErc721BalanceOf = /*#__PURE__*/ createUseReadContract(
  { abi: faucetErc721Abi, functionName: 'balanceOf' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadFaucetErc721GetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: faucetErc721Abi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadFaucetErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: faucetErc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadFaucetErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: faucetErc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"owner"`
 */
export const useReadFaucetErc721Owner = /*#__PURE__*/ createUseReadContract({
  abi: faucetErc721Abi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadFaucetErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: faucetErc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadFaucetErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: faucetErc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadFaucetErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: faucetErc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"tokenIdCounter"`
 */
export const useReadFaucetErc721TokenIdCounter =
  /*#__PURE__*/ createUseReadContract({
    abi: faucetErc721Abi,
    functionName: 'tokenIdCounter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadFaucetErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: faucetErc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetErc721Abi}__
 */
export const useWriteFaucetErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: faucetErc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"addApprovedEntity"`
 */
export const useWriteFaucetErc721AddApprovedEntity =
  /*#__PURE__*/ createUseWriteContract({
    abi: faucetErc721Abi,
    functionName: 'addApprovedEntity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteFaucetErc721Approve = /*#__PURE__*/ createUseWriteContract(
  { abi: faucetErc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"mint"`
 */
export const useWriteFaucetErc721Mint = /*#__PURE__*/ createUseWriteContract({
  abi: faucetErc721Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteFaucetErc721RenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: faucetErc721Abi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteFaucetErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: faucetErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteFaucetErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: faucetErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteFaucetErc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: faucetErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteFaucetErc721TransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: faucetErc721Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetErc721Abi}__
 */
export const useSimulateFaucetErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: faucetErc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"addApprovedEntity"`
 */
export const useSimulateFaucetErc721AddApprovedEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'addApprovedEntity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateFaucetErc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"mint"`
 */
export const useSimulateFaucetErc721Mint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateFaucetErc721RenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateFaucetErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateFaucetErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateFaucetErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateFaucetErc721TransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__
 */
export const useWatchFaucetErc721Event =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: faucetErc721Abi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchFaucetErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: faucetErc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchFaucetErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: faucetErc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchFaucetErc721OwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: faucetErc721Abi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchFaucetErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: faucetErc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const useReadIerc165 = /*#__PURE__*/ createUseReadContract({
  abi: ierc165Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc165SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc165Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: ierc20Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWatchIerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useReadIerc721 = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWriteIerc721 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721TransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc721Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useSimulateIerc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWatchIerc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useReadIerc721Metadata = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721MetadataBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721MetadataGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc721MetadataName = /*#__PURE__*/ createUseReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721MetadataOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc721MetadataSymbol = /*#__PURE__*/ createUseReadContract(
  { abi: ierc721MetadataAbi, functionName: 'symbol' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc721MetadataTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWriteIerc721Metadata = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721MetadataApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useSimulateIerc721Metadata =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721MetadataApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const useWatchIerc721MetadataEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useWriteIerc721Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useSimulateIerc721Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMintableErc721Abi}__
 */
export const useReadIMintableErc721 = /*#__PURE__*/ createUseReadContract({
  abi: iMintableErc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIMintableErc721BalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: iMintableErc721Abi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIMintableErc721GetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: iMintableErc721Abi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIMintableErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: iMintableErc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIMintableErc721OwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: iMintableErc721Abi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIMintableErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: iMintableErc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintableErc721Abi}__
 */
export const useWriteIMintableErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: iMintableErc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIMintableErc721Approve =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMintableErc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"mint"`
 */
export const useWriteIMintableErc721Mint = /*#__PURE__*/ createUseWriteContract(
  { abi: iMintableErc721Abi, functionName: 'mint' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIMintableErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMintableErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIMintableErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMintableErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIMintableErc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMintableErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__
 */
export const useSimulateIMintableErc721 =
  /*#__PURE__*/ createUseSimulateContract({ abi: iMintableErc721Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIMintableErc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMintableErc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIMintableErc721Mint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMintableErc721Abi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIMintableErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMintableErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIMintableErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMintableErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIMintableErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMintableErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iMintableErc721Abi}__
 */
export const useWatchIMintableErc721Event =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iMintableErc721Abi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iMintableErc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIMintableErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iMintableErc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iMintableErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIMintableErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iMintableErc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iMintableErc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIMintableErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iMintableErc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useReadOwnable = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadOwnableOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWriteOwnable = /*#__PURE__*/ createUseWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteOwnableRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteOwnableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const useSimulateOwnable = /*#__PURE__*/ createUseSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateOwnableRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateOwnableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const useWatchOwnableEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const readErc165 = /*#__PURE__*/ createReadContract({ abi: erc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20MockAbi}__
 */
export const readErc20Mock = /*#__PURE__*/ createReadContract({
  abi: erc20MockAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"allowance"`
 */
export const readErc20MockAllowance = /*#__PURE__*/ createReadContract({
  abi: erc20MockAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20MockBalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20MockAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"decimals"`
 */
export const readErc20MockDecimals = /*#__PURE__*/ createReadContract({
  abi: erc20MockAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"name"`
 */
export const readErc20MockName = /*#__PURE__*/ createReadContract({
  abi: erc20MockAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"symbol"`
 */
export const readErc20MockSymbol = /*#__PURE__*/ createReadContract({
  abi: erc20MockAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20MockTotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20MockAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20MockAbi}__
 */
export const writeErc20Mock = /*#__PURE__*/ createWriteContract({
  abi: erc20MockAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"approve"`
 */
export const writeErc20MockApprove = /*#__PURE__*/ createWriteContract({
  abi: erc20MockAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"mint"`
 */
export const writeErc20MockMint = /*#__PURE__*/ createWriteContract({
  abi: erc20MockAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20MockTransfer = /*#__PURE__*/ createWriteContract({
  abi: erc20MockAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20MockTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20MockAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20MockAbi}__
 */
export const simulateErc20Mock = /*#__PURE__*/ createSimulateContract({
  abi: erc20MockAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20MockApprove = /*#__PURE__*/ createSimulateContract({
  abi: erc20MockAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"mint"`
 */
export const simulateErc20MockMint = /*#__PURE__*/ createSimulateContract({
  abi: erc20MockAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20MockTransfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20MockAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20MockAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20MockTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc20MockAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20MockAbi}__
 */
export const watchErc20MockEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20MockAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20MockAbi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20MockApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20MockAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20MockAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20MockTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc20MockAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const readErc721 = /*#__PURE__*/ createReadContract({ abi: erc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readErc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readErc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const readErc721Name = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readErc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc721Symbol = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const readErc721TokenUri = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const writeErc721 = /*#__PURE__*/ createWriteContract({ abi: erc721Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc721Approve = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeErc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeErc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const simulateErc721 = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc721Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateErc721SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateErc721SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc721TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const watchErc721Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc721TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetAbi}__
 *
 *
 */
export const readFaucet = /*#__PURE__*/ createReadContract({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"ERC20_AMOUNT"`
 *
 *
 */
export const readFaucetErc20Amount = /*#__PURE__*/ createReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'ERC20_AMOUNT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"FEE"`
 *
 *
 */
export const readFaucetFee = /*#__PURE__*/ createReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'FEE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"NFT_MINT_COUNT"`
 *
 *
 */
export const readFaucetNftMintCount = /*#__PURE__*/ createReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'NFT_MINT_COUNT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimedErc20"`
 *
 *
 */
export const readFaucetClaimedErc20 = /*#__PURE__*/ createReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimedErc20',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimedNFT"`
 *
 *
 */
export const readFaucetClaimedNft = /*#__PURE__*/ createReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimedNFT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"erc20Token"`
 *
 *
 */
export const readFaucetErc20Token = /*#__PURE__*/ createReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'erc20Token',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"faucetNft"`
 *
 *
 */
export const readFaucetFaucetNft = /*#__PURE__*/ createReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'faucetNft',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"owner"`
 *
 *
 */
export const readFaucetOwner = /*#__PURE__*/ createReadContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetAbi}__
 *
 *
 */
export const writeFaucet = /*#__PURE__*/ createWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimERC20"`
 *
 *
 */
export const writeFaucetClaimErc20 = /*#__PURE__*/ createWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimERC20',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimNFT"`
 *
 *
 */
export const writeFaucetClaimNft = /*#__PURE__*/ createWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimNFT',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const writeFaucetRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"setERC20Token"`
 *
 *
 */
export const writeFaucetSetErc20Token = /*#__PURE__*/ createWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'setERC20Token',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const writeFaucetTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"withdraw"`
 *
 *
 */
export const writeFaucetWithdraw = /*#__PURE__*/ createWriteContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetAbi}__
 *
 *
 */
export const simulateFaucet = /*#__PURE__*/ createSimulateContract({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimERC20"`
 *
 *
 */
export const simulateFaucetClaimErc20 = /*#__PURE__*/ createSimulateContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimERC20',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"claimNFT"`
 *
 *
 */
export const simulateFaucetClaimNft = /*#__PURE__*/ createSimulateContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'claimNFT',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const simulateFaucetRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"setERC20Token"`
 *
 *
 */
export const simulateFaucetSetErc20Token = /*#__PURE__*/ createSimulateContract(
  { abi: faucetAbi, address: faucetAddress, functionName: 'setERC20Token' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const simulateFaucetTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: faucetAbi,
    address: faucetAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetAbi}__ and `functionName` set to `"withdraw"`
 *
 *
 */
export const simulateFaucetWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: faucetAbi,
  address: faucetAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link faucetAbi}__
 *
 *
 */
export const watchFaucetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: faucetAbi,
  address: faucetAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link faucetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 *
 */
export const watchFaucetOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: faucetAbi,
    address: faucetAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__
 */
export const readFaucetErc721 = /*#__PURE__*/ createReadContract({
  abi: faucetErc721Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"approvedEntities"`
 */
export const readFaucetErc721ApprovedEntities =
  /*#__PURE__*/ createReadContract({
    abi: faucetErc721Abi,
    functionName: 'approvedEntities',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readFaucetErc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: faucetErc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readFaucetErc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: faucetErc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readFaucetErc721IsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: faucetErc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"name"`
 */
export const readFaucetErc721Name = /*#__PURE__*/ createReadContract({
  abi: faucetErc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"owner"`
 */
export const readFaucetErc721Owner = /*#__PURE__*/ createReadContract({
  abi: faucetErc721Abi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readFaucetErc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: faucetErc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readFaucetErc721SupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: faucetErc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"symbol"`
 */
export const readFaucetErc721Symbol = /*#__PURE__*/ createReadContract({
  abi: faucetErc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"tokenIdCounter"`
 */
export const readFaucetErc721TokenIdCounter = /*#__PURE__*/ createReadContract({
  abi: faucetErc721Abi,
  functionName: 'tokenIdCounter',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const readFaucetErc721TokenUri = /*#__PURE__*/ createReadContract({
  abi: faucetErc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetErc721Abi}__
 */
export const writeFaucetErc721 = /*#__PURE__*/ createWriteContract({
  abi: faucetErc721Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"addApprovedEntity"`
 */
export const writeFaucetErc721AddApprovedEntity =
  /*#__PURE__*/ createWriteContract({
    abi: faucetErc721Abi,
    functionName: 'addApprovedEntity',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeFaucetErc721Approve = /*#__PURE__*/ createWriteContract({
  abi: faucetErc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"mint"`
 */
export const writeFaucetErc721Mint = /*#__PURE__*/ createWriteContract({
  abi: faucetErc721Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeFaucetErc721RenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: faucetErc721Abi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeFaucetErc721SafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: faucetErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeFaucetErc721SetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: faucetErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeFaucetErc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: faucetErc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeFaucetErc721TransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: faucetErc721Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetErc721Abi}__
 */
export const simulateFaucetErc721 = /*#__PURE__*/ createSimulateContract({
  abi: faucetErc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"addApprovedEntity"`
 */
export const simulateFaucetErc721AddApprovedEntity =
  /*#__PURE__*/ createSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'addApprovedEntity',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateFaucetErc721Approve = /*#__PURE__*/ createSimulateContract(
  { abi: faucetErc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"mint"`
 */
export const simulateFaucetErc721Mint = /*#__PURE__*/ createSimulateContract({
  abi: faucetErc721Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateFaucetErc721RenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateFaucetErc721SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateFaucetErc721SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateFaucetErc721TransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link faucetErc721Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateFaucetErc721TransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: faucetErc721Abi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__
 */
export const watchFaucetErc721Event = /*#__PURE__*/ createWatchContractEvent({
  abi: faucetErc721Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchFaucetErc721ApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: faucetErc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchFaucetErc721ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: faucetErc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchFaucetErc721OwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: faucetErc721Abi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link faucetErc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchFaucetErc721TransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: faucetErc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const readIerc165 = /*#__PURE__*/ createReadContract({ abi: ierc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const readIerc20 = /*#__PURE__*/ createReadContract({ abi: ierc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20Allowance = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const writeIerc20 = /*#__PURE__*/ createWriteContract({ abi: ierc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const simulateIerc20 = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const watchIerc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const readIerc20Metadata = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20MetadataAllowance = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const readIerc20MetadataDecimals = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc20MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc20MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20MetadataTotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const writeIerc20Metadata = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20MetadataTransfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20MetadataTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const simulateIerc20Metadata = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20MetadataApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20MetadataTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20MetadataTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const watchIerc20MetadataEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20MetadataApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20MetadataTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const readIerc721 = /*#__PURE__*/ createReadContract({ abi: ierc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const writeIerc721 = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const simulateIerc721 = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721TransferFrom = /*#__PURE__*/ createSimulateContract(
  { abi: ierc721Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const watchIerc721Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721Abi, eventName: 'Approval' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721TransferEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721Abi, eventName: 'Transfer' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const readIerc721Metadata = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721MetadataGetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721MetadataIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc721MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721MetadataOwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721MetadataSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: ierc721MetadataAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc721MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readIerc721MetadataTokenUri = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const writeIerc721Metadata = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721MetadataTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const simulateIerc721Metadata = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721MetadataApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721MetadataSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721MetadataSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721MetadataTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721MetadataAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const watchIerc721MetadataEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: ierc721MetadataAbi },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721MetadataApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721MetadataApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721MetadataTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ierc721MetadataAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const writeIerc721Receiver = /*#__PURE__*/ createWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const simulateIerc721Receiver = /*#__PURE__*/ createSimulateContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMintableErc721Abi}__
 */
export const readIMintableErc721 = /*#__PURE__*/ createReadContract({
  abi: iMintableErc721Abi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIMintableErc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: iMintableErc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readIMintableErc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: iMintableErc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIMintableErc721IsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: iMintableErc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readIMintableErc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: iMintableErc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIMintableErc721SupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: iMintableErc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMintableErc721Abi}__
 */
export const writeIMintableErc721 = /*#__PURE__*/ createWriteContract({
  abi: iMintableErc721Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeIMintableErc721Approve = /*#__PURE__*/ createWriteContract({
  abi: iMintableErc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"mint"`
 */
export const writeIMintableErc721Mint = /*#__PURE__*/ createWriteContract({
  abi: iMintableErc721Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIMintableErc721SafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: iMintableErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIMintableErc721SetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: iMintableErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIMintableErc721TransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: iMintableErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__
 */
export const simulateIMintableErc721 = /*#__PURE__*/ createSimulateContract({
  abi: iMintableErc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIMintableErc721Approve =
  /*#__PURE__*/ createSimulateContract({
    abi: iMintableErc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"mint"`
 */
export const simulateIMintableErc721Mint = /*#__PURE__*/ createSimulateContract(
  { abi: iMintableErc721Abi, functionName: 'mint' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIMintableErc721SafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: iMintableErc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIMintableErc721SetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: iMintableErc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMintableErc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIMintableErc721TransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: iMintableErc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMintableErc721Abi}__
 */
export const watchIMintableErc721Event = /*#__PURE__*/ createWatchContractEvent(
  { abi: iMintableErc721Abi },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMintableErc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIMintableErc721ApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iMintableErc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMintableErc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIMintableErc721ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iMintableErc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMintableErc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIMintableErc721TransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: iMintableErc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const readOwnable = /*#__PURE__*/ createReadContract({ abi: ownableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableOwner = /*#__PURE__*/ createReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const writeOwnable = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const simulateOwnable = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const watchOwnableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })
