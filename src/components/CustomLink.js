import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = (props) => {
  let { children, to, activeclassname } = props;
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link {...props} to={to} className={match ? activeclassname : ""}>
      {children}
    </Link>
  );
};

export default CustomLink;
