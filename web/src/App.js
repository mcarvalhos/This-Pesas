import React, { Component } from 'react';
import ListExpense from './components/ListExpense';
import CreateExpenseForm from './components/CreateExpenseForm';

import "./styles/App.css";
import "./styles/global.css";

class App extends Component {

  constructor() {
    super();
    this.expenses = [];
    this.state = {
      expenses: []
    };
  }

  createCard(title, value, date) {
    const newExpense = { title, value, date };
    const newArrayExpense = [...this.state.expenses, newExpense]
    const newState = {
      expenses: newArrayExpense
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <CreateExpenseForm createCard={this.createCard.bind(this)} />
        <ListExpense expenses={this.state.expenses} />
      </section>
    );
  }
}

export default App;
