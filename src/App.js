import Header from "./components/Header";
import Profile from "./components/Profile";
import { createContext, useState } from "react";
import "./styles.css";
import ProfileContext from "./contexts/ProfileContext";

export default function App() {
  const [username, setUsername] = useState("Meraj");

  return (
    <ProfileContext.Provider
      value={{
        username: username,
        setUsername: setUsername
      }}
    >
      <section>
        <Header />
        <Profile />
      </section>
    </ProfileContext.Provider>
  );
}
