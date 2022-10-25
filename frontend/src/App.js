import logo from './logo.svg';
import './App.css';
import Overview from './components/Overview'
import OurNavbar from './components/OurNavbar'
import EditCycle from './components/EditCycle'
import ReviewCycle from './components/ReviewCycle'
import CreateCycle from './components/CreateCycle';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
     <OurNavbar/>
       <Routes>
       <Route index element ={<Overview/>}/>
       
       <Route path="edit/"  element ={<EditCycle/>}/>
       <Route path="edit/:id_cycle"  element ={<EditCycle/>}/>
       <Route path="create"  element ={<CreateCycle/>}/>
     
    
        
       </Routes>
       
 
    </Router>
  );
}

export default App;
