
import { BrowserRouter, Route } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';


import './App.css';
import Header from './components/Header';


const Dashboard = () => {
  return (<h2>Dashboard</h2>)
}

const Landing = () => {
  return (<h2>Landing</h2>)
}

class App extends Component {
  con

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact={true} component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default connect(null, actions)(App);
