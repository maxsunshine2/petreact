import Navbar from "./components/Navbar";
import Topgrid from "./components/Topgrid";
import Bodytext from "./components/Bodytext";
import Experiences from "./components/Experiences";
import Data from "./Data";
import "./App.css";
function App() {
  const cards = Data.map((item) => {
    return (
      <Experiences
        key={item.id}
      //  item={item}
       {...item}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Topgrid />
      <Bodytext />
      <section className="card--list">{cards}</section>
    </div>
  );
}

export default App;
