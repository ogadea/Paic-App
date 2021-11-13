import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import TransactionTable from './components/TransactionTable';

class App extends Component
{
  render()
  {
    return(   
      <div>
        <h2 className="App">Paic App</h2>
        <TransactionTable></TransactionTable>
      </div>
    );
  }
}
export default App;
