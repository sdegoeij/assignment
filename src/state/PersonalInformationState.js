import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { DateTime } from "luxon";

// Store personal information in local storage.
const { persistAtom } = recoilPersist({
  key: "devsecops-personal-state",
  storage: localStorage,
});

export const personalInformationState = atom({
  key: "personalInformationState",
  default: {
    username: "User",
    firstName: "Standard",
    lastName: "User",
    birthDate: DateTime.now().toFormat('yyyy-MM-dd'),
  },
  effects_UNSTABLE: [persistAtom],
});
