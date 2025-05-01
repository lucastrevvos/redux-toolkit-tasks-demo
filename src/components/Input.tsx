interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`border p-2 rounded w-full ${className}`}
      {...props}
    ></input>
  );
}
