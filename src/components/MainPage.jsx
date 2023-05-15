import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function MainPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default MainPage;
