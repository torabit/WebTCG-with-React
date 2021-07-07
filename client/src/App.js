import './css/style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/pages/LoginForm';
import Main from './components/pages/Main';
import Competitive from './components/pages/Competitive';
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
