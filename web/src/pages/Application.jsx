import React, { Component } from "react";

import ListExpense from "../components/ListExpense";
import CreateExpenseForm from "../components/CreateExpenseForm";
import ListCategories from "../components/ListCategories";

import "../styles/pages/application.css";

class Application extends Component {
  constructor() {
    super();

    this.state = {
      expenses: [],
      categories: ["Janeiro", "Fevereiro", "Março"],
      // search: "",
    };
  }
  // updateSearch(event) {
  //   this.setState({ search: event.target.value.substr(0, 20) });
  // }

  createCard(title, cost, date) {
    const newExpense = { title, cost, date };
    const newArrayExpense = [...this.state.expenses, newExpense];
    const newState = {
      expenses: newArrayExpense,
    };
    this.setState(newState);
  }

  // addCategory(nameCategory) {
  //   const newArrayCategories = [...this.state.categories, nameCategory];
  //   const newState = { ...this.state, categories: newArrayCategories };
  //   this.setState(newState);
  // }

  deleteExpense(index) {
    let arrayExpenses = this.state.expenses;
    arrayExpenses.splice(index, 1);
    this.setState({ expenses: arrayExpenses });
  }

  render() {
    return (
      <section className="content">
        <CreateExpenseForm
          search={this.state.search}
          expenses={this.state.expenses}
          // categories={this.state.categories}
          createCard={this.createCard.bind(this)}
          // updateSearch={this.updateSearch.bind(this)}
        />
        <main className="main-content">
          <ListCategories
            // search={this.state.search}
            expenses={this.state.expenses}
            // categories={this.state.categories}
            // addCategory={this.addCategory.bind(this)}
            // updateSearch={this.updateSearch.bind(this)}
          />
          <ListExpense
            // search={this.state.search}
            expenses={this.state.expenses}
            // updateSearch={this.updateSearch.bind(this)}
            deleteExpense={this.deleteExpense.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default Application;