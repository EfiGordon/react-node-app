import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => {
  return (<h2>Header</h2>)
}

const Dashboard = () => {
  return (<h2>Dashboard</h2>)
}

const Landing = () => {
  return (<h2>Landing</h2>)
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" exact={true} component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
