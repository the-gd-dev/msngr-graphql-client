import React from "react";
import config from "../config";

const Logo = ({height, classes}) => {
  return (
    <img
      className={classes}
      src={config.assetURI + "/logo.png"}
      alt="messenger-clone"
      style={{ height: height }}
    />
  );
};

export default Logo;
