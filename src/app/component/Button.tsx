interface ButtonProps {
  children: React.ReactNode;
  variant: 'hero' | 'outline' | 'cta';
  size: 'lg' | 'md' | 'sm';
  className?: string;
  OnClick?: () => void;
}





export const Button = ({ children, variant, size, className }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors duration-300";
  const variantStyles = {
    hero: "bg-accent text-primary-foreground hover:bg-accent/90",
    outline: "border border-primary-foreground text-primary-foreground hover:bg-background/20",
    cta: "bg-primary text-primary-foreground hover:bg-primary/90"
  };
  const sizeStyles = {
    lg: "px-6 py-3 text-lg",
    md: "px-4 py-2 text-md",
    sm: "px-3 py-1 text-sm"
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </button>
  );
}