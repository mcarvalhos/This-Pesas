import React, { Component } from 'react';
import ExpenseList from './components/ExpenseList';
import CreateExpenseForm from './components/CreateExpenseForm';
import "./styles/global.css";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <section className="app">
        <CreateExpenseForm />
        <ExpenseList />
      </section>
    );
  }
}

export default App;
