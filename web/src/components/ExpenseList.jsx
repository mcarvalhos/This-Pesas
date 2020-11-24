import React, { Component } from "react";
import ExpenseCard from "./ExpenseCard";
import "../styles/components/ExpenseList.css";

class ExpenseList extends Component {
  render() {
    return (
      <section className="expense-list">
        <ul>
          {Array.of(
            "Fatura do Cartão",
            "Conta de Água",
            "Conta de Celular",1,1,1,1,1,1,1,1,1,11,
          ).map((expense, index) => {
            return (
              <li key={index}>
                <div>{expense}</div>
                <ExpenseCard />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ExpenseList;
