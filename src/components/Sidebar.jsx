import { useContext } from "react";
import ProfileContext from "../contexts/ProfileContext";

function Sidebar() {
  const profileContext = useContext(ProfileContext);
  return (
    <div style={{ height: "100vh", backgroundColor: "lightBlue", padding: 20 }}>
      <h1>{profileContext.username}</h1>
    </div>
  );
}
export default Sidebar;
