import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Update from './components/update/update';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';



function App() {
  return (
    <>
     <Router>
      <div className="main">
         <div style={{ display: 'flex', }}>
          <h3>React Crud Operations</h3>
          <Link to='/create'>  <Button color="blue" style={{ marginLeft: '50px' }}>Create  </Button>     </Link>
         </div>

         <div>
           <Route exact path='/create' component={Create} />
         </div>

         <div style={{ marginTop: 20 }}>
           <Route exact path='/read' component={Read} />
        </div>

       <Route path='/update' component={Update} />

     </div>
     </Router>
     
    </>
  );
}

export default App;
