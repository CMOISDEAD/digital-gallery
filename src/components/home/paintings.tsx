import { motion } from "motion/react";
import { ArrowRight, Share } from "lucide-react";
import { CircleButton } from "../ui/circlebutton";
import { useGalleryStore } from "@/store/useGallery";
import { paintings } from "@/data/paintings";
import { useCursor } from "../ui/cursor";
import useMeasure from "react-use-measure";
import { useDrag } from "@use-gesture/react";

export const Paintings = () => {
  const { index, handleNext, handlePrev } = useGalleryStore((state) => state);
  const { scrollEnter, leave } = useCursor();

  const [ref, { width: imageWidth }] = useMeasure();

  const gap = 64;
  const offset = -index * (imageWidth + gap);

  const bind = useDrag(
    ({ active, direction: [dx], velocity: [vx], cancel }) => {
      if (active && vx > 0.5) {
        if (dx > 0) {
          handlePrev();
        } else {
          handleNext();
        }
        cancel();
      }
    },
    { axis: "x" },
  );

  return (
    <div className="flex h-screen flex-col gap-6 px-6 pt-24 pb-4 md:w-3/6">
      {/* @ts-expect-error bad type*/}
      <motion.div
        {...bind()}
        animate={{ x: offset }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={scrollEnter}
        onMouseLeave={leave}
        className="flex w-full flex-1 touch-none flex-nowrap gap-16"
      >
        {paintings.map((item, i) => (
          <motion.div
            key={i}
            ref={i === 0 ? ref : null}
            className="h-full min-w-[50%] overflow-hidden rounded-4xl"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={item.image}
              alt={item.title}
              draggable={false}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex gap-4">
        <button className="w-full flex-1 cursor-pointer rounded-full border border-amber-400 px-6 py-3 uppercase outline-0 transition-all hover:border-amber-600 active:scale-105 active:border-amber-700">
          add to collection
        </button>
        <CircleButton>
          <Share />
        </CircleButton>
        <CircleButton onClick={handleNext}>
          <ArrowRight />
        </CircleButton>
      </div>
    </div>
  );
};
