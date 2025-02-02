import { useCursor } from "./cursor";

export const CircleButton = ({
  children,
  onClick = () => { },
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const { buttonEnter, leave } = useCursor();

  return (
    <button
      onClick={onClick}
      onMouseEnter={buttonEnter}
      onMouseLeave={leave}
      className="flex h-20 w-20 cursor-pointer content-center items-center justify-center rounded-full border border-amber-400 outline-0 transition-all hover:border-amber-600 active:scale-105 active:border-amber-700"
    >
      {children}
    </button>
  );
};
