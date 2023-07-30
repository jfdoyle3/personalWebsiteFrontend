import './App.css';
import {BrowserRouter} from "react-router-dom"
import AppRouter from './components/Routers/AppRouter';;
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";


function App() {

  return (
    <BrowserRouter>
          <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
