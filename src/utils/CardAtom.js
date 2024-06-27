import { atomWithStorage } from "jotai/utils";

// const CardAtom = atomWithStorage("enabled", false);
const CardAtom = atomWithStorage([], false);
export default CardAtom;
