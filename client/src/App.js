import './css/style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import Competitive from './components/Competitive';
import {RecoilRoot} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <main className="App-main">
          <Router>
            <Route exact path='/' component={LoginForm}/>
            <Route path='/Main' component={Main}/>
            <Route path='/Competitive' component={Competitive}/>
          </Router>
        </main>
      </div>
    </RecoilRoot>
  );
}

export default App;
