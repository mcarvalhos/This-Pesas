import React, { Component } from "react";
import "../styles/components/CardExpense.css";
import { ReactComponent as DeleteSVG } from "../images/delete.svg";
import { FiX } from "react-icons/fi";


// import { ReactComponent as PaidSVG } from "../images/like.svg";
class CardExpense extends Component {
  delete() {
    const index = this.props.index;
    this.props.deleteExpense(index);
  }

  render() {
    return (
      <section className="card-expense">
        <div className="card-expense_icons">
          {/* <PaidSVG
            className="card-expense_paid"
            onClick={() => console.log("Pago")}
          /> */}
        </div>
        <header className="card-expense_header">
          <h3 className="card-expense_title">{this.props.title}</h3>
          <p>{this.props.category}</p>
          <FiX className="card-expense_img" onClick={this.delete.bind(this)} />
        </header>
        <p className="card-expense_text"> Valor: R$ {this.props.cost}</p>
        <p className="card-expense_text"> Vencimento: {this.props.date}</p>
      </section>
    );
  }
}

export default CardExpense;
