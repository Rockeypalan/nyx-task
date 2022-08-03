import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navebar";
import RecordList from "./components/RecordList";
import EditRecord from "./components/EditRecord";
import CreateRecord from "./components/CreateRecord";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path= '/' element= {<Home />} />
          <Route path= '/create' element= {<CreateRecord />} />
          <Route path= '/list' element= {<RecordList />} />
          <Route path= '/:id' element= {<EditRecord />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
