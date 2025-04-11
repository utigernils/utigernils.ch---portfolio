import { create } from "zustand";

type MouseState = {
  curX: number;
  curY: number;
  tgX: number;
  tgY: number;
  setTarget: (x: number, y: number) => void;
  updateCurrent: () => void;
};

export const useMouseStore = create<MouseState>((set, get) => ({
  curX: 0,
  curY: 0,
  tgX: 0,
  tgY: 0,
  setTarget: (x, y) => set({ tgX: x, tgY: y }),
  updateCurrent: () => {
    const { curX, curY, tgX, tgY } = get();
    set({
      curX: curX + (tgX - curX) / 20,
      curY: curY + (tgY - curY) / 20,
    });
  },
}));
