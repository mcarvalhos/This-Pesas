import React, { Component } from "react";
import "../styles/components/ExpenseCard.css";
 class ExpenseCard extends Component {
  render() {
    return (
      <section className="card-expense">
        <header>
          <h3>Título</h3>
          <p>Escreva sua nota</p>
        </header>
      </section>
    );
  }
}

export default ExpenseCard