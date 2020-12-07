import React, { Component } from "react";
import CardExpense from "./CardExpense";
import "../styles/components/ListExpense.css";
class ListExpense extends Component {
  render() {
    return (
      <ul className="list-expense">
        {this.props.expenses.map((expense, index) => {
          return (
            <li className="list-expense_item" key={index}>
              <CardExpense
                index={index}
                deleteExpense={this.props.deleteExpense}
                title={expense.title}
                cost={expense.cost}
                date={expense.date}
                category={expense.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListExpense;