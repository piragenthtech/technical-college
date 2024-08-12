// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";
import Forms from "./components/Forms";
import Image_Carousel from "./components/Image_Carousel";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Counter />
      <Forms />
      <Image_Carousel />
    </div>
  );
}

export default App;
