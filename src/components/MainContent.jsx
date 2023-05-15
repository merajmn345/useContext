import { useContext, useEffect, useState } from "react";
import ProfileContext from "../contexts/ProfileContext";

function MainContent() {
  const [updateUsername, setUpdateUsername] = useState("");
  const profileContextValue = useContext(ProfileContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 20,
        padding: 10
      }}
    >
      <input
        type="text"
        placeholder="Update your name"
        value={updateUsername}
        onChange={(e) => {
          setUpdateUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          profileContextValue.setUsername(updateUsername);
        }}
      >
        Update
      </button>
    </div>
  );
}
export default MainContent;
