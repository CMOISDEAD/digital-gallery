import { Outlet } from "react-router";
import { Navbar } from "@/components/ui/navbar";

export const Layout = () => {
  return (
    <div className="font-montserrat bg-gradient-to-b from-yellow-950/40 to-amber-950/20">
      <Navbar />
      <main className="h-screen">
        <Outlet />
      </main>
    </div>
  );
};
