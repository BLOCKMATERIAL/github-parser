import './scss/components/App.scss';
import Header from "./components/Header";
import Home from "./pages/home";
function App() {
  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
           <Home/>
        </div>
      </div>
  );
}

export default App;
