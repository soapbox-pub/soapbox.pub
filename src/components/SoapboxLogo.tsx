interface SoapboxLogoProps {
  size?: number;
  className?: string;
}

export function SoapboxLogo({ size = 32, className }: SoapboxLogoProps) {
  return (
    <img 
      src="/logo.svg" 
      alt="Soapbox Logo" 
      width={size}
      height={size}
      className={className}
    />
  );
}

export function SoapboxLogotype({ className }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <SoapboxLogo size={32} />
      <span className="font-display font-bold text-xl text-gray-900">Soapbox</span>
    </div>
  );
}