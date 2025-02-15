import owners from "@/data/owners.json";
import { normalize } from "@/lib/utils";
export const ownersSet = new Set<string>(owners.map(normalize));
