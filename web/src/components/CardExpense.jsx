import React, { Component } from "react";
import "../styles/components/CardExpense.css";
 class CardExpense extends Component {
   
  render() {
    return (
      <section className="card-expense">
        <header className="card-expense_header">
          <h3 className="card-expense_title">{this.props.title}</h3>
        </header>
          <p className="card-expense_text"> Valor: R${this.props.value}</p>
          <p className="card-expense_text"> Vencimento: {this.props.date}</p>
      </section>
    );
  }
}

export default CardExpense;