import { Lenis } from "lenis/react";
import { AnimatePresence } from "motion/react";
import { ThemeProvider } from "next-themes";
import { CursorProvider } from "../ui/cursor";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Lenis root>
      <CursorProvider>
        <AnimatePresence mode="wait">
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </AnimatePresence>
      </CursorProvider>
    </Lenis>
  );
};
