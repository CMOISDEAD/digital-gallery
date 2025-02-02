import { create } from "zustand";
import { paintings } from "@/data/paintings";

interface GalleryState {
  index: number;
  painting: PaintingType;
  handleNext: () => void;
  handlePrev: () => void;
}

export const useGalleryStore = create<GalleryState>()((set) => ({
  index: 0,
  painting: paintings[0],
  handleNext: () =>
    set((state) => ({
      index: (state.index + 1) % paintings.length,
      painting: paintings[(state.index + 1) % paintings.length],
    })),
  handlePrev: () =>
    set((state) => ({
      index: (state.index - 1 + paintings.length) % paintings.length,
      painting:
        paintings[(state.index - 1 + paintings.length) % paintings.length],
    })),
}));
