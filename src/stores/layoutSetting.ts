import { writable } from "svelte/store";

type LayoutSetting = {
  menuIsOpen: boolean;
  menuUserIsOpen: boolean;
};
export const layoutSetting = writable<LayoutSetting>({
  menuIsOpen: false,
  menuUserIsOpen: false,
});
