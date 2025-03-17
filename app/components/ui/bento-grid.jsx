import { cn } from "../lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[21rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento justify-center hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-transparent border border-grass flex flex-col space-y-4",
        className
      )}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className="font-sans font-bold text-neutral-200 text-xl mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-sans font-normal text-sm text-neutral-300">
          {description}
        </div>
      </div>
    </div>)
  );
};
