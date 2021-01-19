import React from "react";

function TopNav(props) {
  return (
    <nav>
      <a href="#">LOGO</a>
      <div>{props.username}</div>
    </nav>
  );
}
export default TopNav;
