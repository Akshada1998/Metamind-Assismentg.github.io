import "./App.css";
import Body from "./Components/Body/body.jsx";
import { Toaster } from "react-hot-toast";
import MovieDialogBox from "./Components/MainContainer/movieDialogue.jsx";
function App() {
  return (
    <>
      <Body />
      <Toaster />
      <MovieDialogBox />
    </>
  );
}

export default App;
