import React, { Component } from 'react';
import ListExpense from './components/ListExpense';
import CreateExpenseForm from './components/CreateExpenseForm';
import ListCategories from './components/ListCategories';

import "./styles/App.css";
import "./styles/global.css";

class App extends Component {

  constructor() {
    super();
    this.expenses = [];
    this.state = {
      expenses: [],
      categories: [],
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

  addCategory(nameCategory) {
    const newArrayCategories = [...this.state.categories, nameCategory];
    const newState = { ...this.state, categories: newArrayCategories };
    this.setState(newState);
  }

  deleteExpense(index) {
    let arrayExpenses = this.state.expenses;
    arrayExpenses.splice(index, 1);
    this.setState({ expenses: arrayExpenses });
  }

  render() {
    return (
      <section className="content">
        <CreateExpenseForm
          categories={this.state.categories}
          createCard={this.createCard.bind(this)} />
        <main className="main-content">
          <ListCategories
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categories} />
          <ListExpense
            deleteExpense={this.deleteExpense.bind(this)}
            expenses={this.state.expenses} />
        </main>
      </section>
    );
  }
}

export default App;
