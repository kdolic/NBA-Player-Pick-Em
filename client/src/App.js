import './css/App.css';
import { Route, Switch} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import TeamForm from './components/TeamForm'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path='/signin' component={TeamForm} />
          <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
