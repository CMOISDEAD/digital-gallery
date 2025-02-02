import { motion } from "motion/react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  Brush,
  Hand,
  TextCursorInput,
  Link,
  MousePointerClick,
} from "lucide-react"; // Íconos de Lucide

type CursorContextType = {
  textEnter: () => void;
  linkEnter: () => void;
  scrollEnter: () => void;
  buttonEnter: () => void;
  leave: () => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [variant, setVariant] = useState<
    "default" | "scroll" | "text" | "link" | "button"
  >("default");

  const textEnter = () => setVariant("text");
  const linkEnter = () => setVariant("link");
  const scrollEnter = () => setVariant("scroll");
  const buttonEnter = () => setVariant("button");
  const leave = () => setVariant("default");

  return (
    <CursorContext.Provider
      value={{ textEnter, linkEnter, scrollEnter, buttonEnter, leave }}
    >
      {children}
      <Cursor variant={variant} />
    </CursorContext.Provider>
  );
};

const Cursor: React.FC<{
  variant: "default" | "scroll" | "text" | "link" | "button";
}> = ({ variant }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) =>
      setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: coords.x - 16,
      y: coords.y - 16,
      width: 32,
      height: 32,
      backgroundColor: "rgba(245, 158, 11, 0.5)", // Amber con 50% de transparencia
      backdropFilter: "blur(4px)", // Efecto de vidrio
      border: "1px solid rgba(245, 158, 11, 0.8)", // Borde amber
    },
    text: {
      x: coords.x - 24,
      y: coords.y - 24,
      width: 48,
      height: 48,
      backgroundColor: "rgba(245, 158, 11, 0.5)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(245, 158, 11, 0.8)",
    },
    link: {
      x: coords.x - 24,
      y: coords.y - 24,
      width: 48,
      height: 48,
      backgroundColor: "rgba(245, 158, 11, 0.5)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(245, 158, 11, 0.8)",
    },
    scroll: {
      x: coords.x - 24,
      y: coords.y - 24,
      width: 48,
      height: 48,
      backgroundColor: "rgba(245, 158, 11, 0.5)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(245, 158, 11, 0.8)",
    },
    button: {
      x: coords.x - 24,
      y: coords.y - 24,
      width: 48,
      height: 48,
      backgroundColor: "rgba(245, 158, 11, 0.5)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(245, 158, 11, 0.8)",
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={variant}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden items-center justify-center rounded-full sm:flex"
    >
      {variant === "default" && (
        <Brush className="h-6 w-6 text-white" /> // Pincel artístico
      )}
      {variant === "text" && <TextCursorInput className="h-6 w-6 text-white" />}
      {variant === "link" && <Link className="h-6 w-6 text-white" />}
      {variant === "scroll" && (
        <Hand className="h-6 w-6 text-white" /> // Mano de arrastre
      )}
      {variant === "button" && (
        <MousePointerClick className="h-6 w-6 text-white" /> // Ícono para botón
      )}
    </motion.div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
