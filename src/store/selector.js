import { selector } from "recoil";
import { visibleDrawer } from ".";

export const visibleDrawerState = selector({
  key: "visibleDrawerState",
  get: ({ get }) => {
    const visibleState = get(visibleDrawer);

    return visibleState;
  },
});
