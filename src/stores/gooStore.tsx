import { create } from "zustand";

type Goo = {
  id: string;
  angle: number;
  radius: number;
  speed: number;
  centerX: number;
  centerY: number;
};

type GooStore = {
  goos: Goo[];
  updateGoos: () => void;
};

export const useGooStore = create<GooStore>((set, get) => ({
  goos: [
    { id: "g1", angle: 0, radius: 200, speed: 0.01, centerX: 0, centerY: 0 },
    { id: "g2", angle: Math.PI / 2, radius: 300, speed: -0.008, centerX: -400, centerY: 0 },
    { id: "g3", angle: Math.PI, radius: 350, speed: 0.005, centerX: 400, centerY: 200 },
    { id: "g4", angle: Math.PI / 4, radius: 250, speed: 0.007, centerX: -200, centerY: 0 },
    { id: "g5", angle: 0, radius: 500, speed: 0.01, centerX: -800, centerY: 200 },
  ],
  updateGoos: () => {
    set((state) => ({
      goos: state.goos.map((goo) => ({
        ...goo,
        angle: goo.angle + goo.speed,
      })),
    }));
  },
}));
