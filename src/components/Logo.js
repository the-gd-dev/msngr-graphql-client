import React from "react";
import config from "../config";

const Logo = ({height, classes}) => {
  return (
    <img
      className={classes}
      src={config.assetURI + "/logo.svg"}
      alt="messenger-clone"
      style={{ height: height }}
    />
  );
};

export default Logo;
