type Props = {
  children: React.ReactNode | string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};
export const Button = ({
  children,
  className,
  onClick,
  type,
  disabled,
}: Props) => {
  return (
    <button
      className={
        "flex items-center justify-center rounded-lg h-11 " + className
      }
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
