import React from "react";

const ChannelMark = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="block w-full h-full" />
    </div>
  );
};

export default ChannelMark;
