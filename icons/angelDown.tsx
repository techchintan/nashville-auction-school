import React from "react";

const AngelDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 8.33321L9.41074 12.744C9.73618 13.0694 10.2638 13.0694 10.5893 12.744L15 8.33322"
        stroke="#272D37"
        strokeWidth="1.67"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AngelDown;
