import { useContext, useState } from "react";
import ProfileContext from "../contexts/ProfileContext";

function Header() {
  const profileContextValue = useContext(ProfileContext);
  console.log("value  ", profileContextValue);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "lightcoral",
        padding: 10
      }}
    >
      <h1>Header</h1>
      <p>{profileContextValue.username}</p>
    </div>
  );
}
export default Header;
