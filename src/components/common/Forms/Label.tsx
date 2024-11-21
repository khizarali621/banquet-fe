import clsx from "clsx";

interface Iprops {
  children: React.ReactNode;
  className?: string;
}

export function Label({ children, className }: Iprops) {
  return (
    <label
      className={clsx(
        className,
        "ml-1 inline-block lg:text-2xl md:text-lg text-base font-normal"
      )}
    >
      {children}
    </label>
  );
}
