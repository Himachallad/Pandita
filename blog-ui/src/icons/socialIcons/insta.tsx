import { useTheme } from "@material-ui/core";
import React from "react";

const InstaIcon = (props: any) => {
  const theme = useTheme();
  const iconColor = theme.palette.type === "dark" ? "white" : "black";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 124 124"
      viewBox="0 0 124 124"
      width="20"
      height="20"
    >
      <path
        fill={iconColor}
        d="M87.2,33.6c-3.1,0-5.6,2.5-5.6,5.6c0,3.1,2.5,5.6,5.6,5.6c3.1,0,5.6-2.5,5.6-5.6
		C92.8,36.1,90.3,33.6,87.2,33.6z M62.2,40.8c-13,0-23.6,10.6-23.6,23.6s10.6,23.6,23.6,23.6s23.6-10.6,23.6-23.6
		S75.2,40.8,62.2,40.8z M62.2,79.6c-8.4,0-15.1-6.8-15.1-15.1c0-8.4,6.8-15.1,15.1-15.1c8.4,0,15.1,6.8,15.1,15.1
		C77.3,72.8,70.5,79.6,62.2,79.6z M109.9,44.8c0-15.9-12.9-28.8-28.8-28.8H43c-15.9,0-28.8,12.9-28.8,28.8v38.1
		c0,15.9,12.9,28.8,28.8,28.8H81c15.9,0,28.8-12.9,28.8-28.8V44.8z M100.8,82.8c0,10.9-8.9,19.8-19.8,19.8H43
		c-10.9,0-19.8-8.9-19.8-19.8V44.8C23.2,33.8,32,25,43,25H81c10.9,0,19.8,8.9,19.8,19.8V82.8z"
      />
    </svg>
  );
};

export default InstaIcon;
