
import React from "react";

const Logo = ({ size = "normal" }: { size?: "normal" | "large" | "small" }) => {
  const sizeClasses = {
    small: "h-6 sm:h-7",
    normal: "h-9 sm:h-10",
    large: "h-12 sm:h-14"
  };

  const textClasses = {
    small: "text-lg",
    normal: "text-xl",
    large: "text-2xl"
  };

  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/cb66ba48-5837-46bd-9996-b63711a3c052.png" 
        alt="xBoost Marketing Logo" 
        className={sizeClasses[size]} 
      />
      <span className={`font-heading font-bold ${textClasses[size]} hidden sm:inline-block`}>
        <span className="text-brand-blue">x</span>Boost <span className="text-black">Marketing</span>
      </span>
    </div>
  );
};

export default Logo;
