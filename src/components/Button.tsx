import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
  forwardRef,
} from "react";

type Button = { children: ReactNode } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const MainButton = forwardRef<HTMLButtonElement, Button>(
  (props, ref) => {
    const { children } = props;
    return (
      <button
        {...props}
        className="flex bg-primary rounded items-center  gap-2 px-3 p-2 text-white"
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
export const SecondaryButton = forwardRef<HTMLButtonElement, Button>(
  (props, ref) => {
    const { children } = props;
    return (
      <button
        {...props}
        className="flex border border-gray-300 bg-white shadow hover:bg-secondary active:bg-secondary/80 rounded items-center  gap-2 px-3 p-2"
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
