import "./App.css";
import Timer from "./components/Countdown/Timer";
function App() {
  return (
    <>
      <div className="App ">
        <div className=" container">
          <Timer />
          {console.log("Hello World")}
        </div>
      </div>
    </>
  );
}

export default App;
