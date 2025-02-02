import { Menu } from "lucide-react";
import { Link } from "react-router";
import { useCursor } from "./cursor";

export const Navbar = () => {
  const { buttonEnter, leave } = useCursor();

  return (
    <nav className="fixed top-0 z-100 flex w-full max-w-screen items-center justify-between p-6">
      <div className="flex flex-1 content-center items-center gap-20">
        <button
          onMouseEnter={buttonEnter}
          onMouseLeave={leave}
          className="cursor-pointer"
        >
          <Menu className="h-8 w-8 md:h-10 md:w-10" />
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 uppercase">
            <CustomLink to="/">art</CustomLink>
            <CustomLink to="/">exhibitions</CustomLink>
          </ul>
        </nav>
      </div>

      <h1 className="text font-bodoni text-xl font-bold capitalize sm:text-2xl md:text-3xl">
        digital/gallery
      </h1>

      <div className="flex flex-1 items-center justify-end gap-2 md:gap-8">
        <CustomLink to="/" className="hidden uppercase md:block">
          collection
        </CustomLink>
        <button
          onMouseEnter={buttonEnter}
          onMouseLeave={leave}
          className="h-7 w-7 cursor-pointer rounded-full bg-white text-black md:h-9 md:w-9"
        >
          3
        </button>
        <CustomLink to="https://github.com/CMOISDEAD" target="_blank">
          <img
            src="https://github.com/CMOISDEAD.png"
            alt="user image"
            className="h-8 w-8 rounded-full md:h-9 md:w-9"
          />
        </CustomLink>
      </div>
    </nav>
  );
};

export const CustomLink = ({
  children,
  to,
  className = "",
  target = "_self",
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
  target?: string;
}) => {
  const { linkEnter, leave } = useCursor();

  return (
    <Link
      target={target}
      onMouseEnter={linkEnter}
      onMouseLeave={leave}
      to={to}
      className={className}
    >
      {children}
    </Link>
  );
};
