import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { CircleButton } from "@/components/ui/circlebutton";
import { useGalleryStore } from "@/store/useGallery";
import { useCursor } from "../ui/cursor";
import { Music } from "./music";

export const Details = () => {
  const { painting, handlePrev } = useGalleryStore((state) => state);
  const { textEnter, leave } = useCursor();

  return (
    <div className="relative h-screen md:w-2/6">
      <motion.img
        key={painting.image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={painting.image}
        alt="interior of a cathedral paint"
        className="h-full min-h-screen w-full object-cover"
      />

      <div className="absolute top-0 left-0 flex h-full w-full flex-col content-center justify-between bg-gradient-to-b from-amber-950/70 to-amber-800/20 bg-cover pt-24 pb-4 pl-6">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={leave}
          className="font-bodoni text-6xl font-bold md:text-7xl lg:text-8xl"
        >
          {painting.title}
        </h1>

        <div className="flex gap-6 md:gap-16">
          <p className="text-xs italic md:w-1/5 md:text-sm lg:text-base xl:text-lg">
            {painting.date}
          </p>

          <div className="flex flex-1 flex-col gap-4 px-10">
            <p className="text-xs text-amber-400 lg:text-sm xl:text-base">
              {painting.description}
            </p>

            <Link
              to="/"
              className="w-fit text-sm font-bold uppercase md:text-base lg:text-lg xl:text-xl"
            >
              more
            </Link>
          </div>
        </div>

        <div className="hidden flex-col gap-8 md:flex">
          <div className="flex w-full gap-16">
            <motion.img
              key={painting.artist.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={painting.artist.image}
              alt="Samuel Prout (1823) by John Jackson – Artchive"
              className="h-auto w-1/5 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h2 className="font-bodoni text-base font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {painting.artist.name}
              </h2>
              <p className="text-xs font-bold text-amber-400 uppercase sm:text-sm md:text-base lg:text-lg xl:text-xl">
                painter
              </p>
            </div>
          </div>

          <div className="flex gap-40">
            <CircleButton onClick={handlePrev}>
              <ArrowLeft />
            </CircleButton>
            <Music />
          </div>
        </div>
      </div>
    </div>
  );
};
