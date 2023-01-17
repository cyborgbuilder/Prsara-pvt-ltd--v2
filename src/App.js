import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Page from './components/Page';
import VideoPage from './components/VideoPage';

function App() {
  let component
   // eslint-disable-next-line default-case
   switch (window.location.pathname) {
     case "/":
       component = <Home />
       break;
     case "/about":
       component = <VideoPage />
       break;
     case "/page":
       component = <Page />
       break;
   }
  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
