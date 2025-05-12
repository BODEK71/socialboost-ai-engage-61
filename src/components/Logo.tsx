
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-md bg-gradient-to-br from-brand-purple to-brand-purple-light flex items-center justify-center">
        <span className="text-white font-bold text-lg">SB</span>
      </div>
      <span className="font-heading font-bold text-xl">
        Social<span className="text-brand-purple">Boost</span>
      </span>
    </div>
  );
};

export default Logo;
