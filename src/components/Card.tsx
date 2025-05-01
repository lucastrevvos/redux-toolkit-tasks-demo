interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`border p-4 rounded shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
}
