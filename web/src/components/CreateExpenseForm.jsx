import React, { Component } from "react";
import "../styles/components/CreateExpenseForm.css";

class CreateExpenseForm extends Component {
  render() {
    return (
      <form action="" className="create-expense-form">
        <div>
          <label htmlFor="">Descrição</label>
          <br/>
          <input type="text" name="description" className="form-create_input" />
        </div>
        <div>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              name="value"
              id=""
              className="form-create_input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="due-date">
            Vencimento
            <input
              type="date"
              name="due-date"
              id=""
              className="form-create_input"
            />
          </label>
        </div>
        <button className="form-create_input form-create_submit">Salvar</button>
      </form>
    );
  }
}

export default CreateExpenseForm;
