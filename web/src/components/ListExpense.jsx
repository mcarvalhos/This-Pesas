import React, { Component } from "react";
import CardExpense from "./CardExpense";
import "../styles/components/ListExpense.css";
class ListExpense extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  render() {
    const filteredExpenses = this.props.expenses.filter((expense, index) => {
      return (expense.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

    return (
      <section className="list-wrapper">
        <div className="list-search">
          {/* <ul>
          {filteredExpenses.map((expense, index) => {
            return <li expenses={expense} key={index}></li>;
          })}
        </ul> */}

          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            className="list-categories_input"
            placeholder="Pesquisar..."
          />
        </div>

        <ul className="list-expense">
          {filteredExpenses.map((expense, index) => {
            return (
              <li className="list-expense_item" key={index}>
                <CardExpense
                  index={index}
                  deleteExpense={this.props.deleteExpense}
                  title={expense.title}
                  cost={expense.cost}
                  date={expense.date}
                  // category={expense.category}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListExpense;