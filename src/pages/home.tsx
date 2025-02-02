import { Details } from "@/components/home/details";
import { Overflow } from "@/components/home/overflow";
import { Paintings } from "@/components/home/paintings";

export const Home = () => {
  return (
    <div className="h-screen">
      <div className="relative flex h-full flex-col justify-between md:flex-row">
        <Details />
        <Overflow />
        <Paintings />
      </div>
    </div>
  );
};
