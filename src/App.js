import About from "./About";
import Body from "./Body";
import Header from "./Header";


function App() {
// function autoReload() {
//   window.location.reload(true)
// }

  return (
    <div className="App">
      <Header />
      <Body />
      <About /> 
    </div>
  );
  // autoReload()
}

export default App;
