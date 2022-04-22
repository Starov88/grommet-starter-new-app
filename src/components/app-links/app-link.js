import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Text } from "grommet";

import "./app-links.css"

const AppLink = ({ children, to, icon, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const color = match ? 'brand2' : 'brand';
  return (
    <Text className={"app-link"} color={color}>
      <Link
        to={to}
        {...props}
      >
        {icon}
        {children}
      </Link>
    </Text>
  );
}

export default AppLink;