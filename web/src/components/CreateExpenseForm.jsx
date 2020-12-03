import React, { Component } from "react";
import DatePicker from "../components/DatePicker";

import "../styles/components/CreateExpenseForm.css";

class CreateExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.value = "";
    this.date = "";
    this.category = "Sem categoria";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeValue(event) {
    event.stopPropagation();
    this.value = event.target.value;
  }

  _handleConvertValue(event) {
    this.value = event.target.value;
    let currentValue = this.value;
    
    let f = currentValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  _handleChangeDate(event) {
    event.stopPropagation();
    this.date = event.target.value;
  }

  _formatDate(date) {
    var dateControl = document.querySelector('input[type="date"]');
    window.setInterval(() => {
      dateControl.value = "2017-06-01";
    })
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.value, this.date, this.category);
  }

  render() {
    return (
      <form
        className="create-expense-form"
        onSubmit={this._createCard.bind(this)}
      >
        <h1
          className="form-create_title"
          style={{
            color: "#fff",
            marginTop: "24px",
            justifyContent: "center",
            display: "flex",
            fontSize: "55px",
            fontWeight: "bold",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          }}
        >
          THISPESAS
        </h1>
        <img
          style={{
            alignSelf: "center",
            marginBottom: "16px",
            marginTop: "24px",
          }}
          width="250"
          height="150px"
          src="https://www.flaticon.com/svg/static/icons/svg/2037/2037184.svg"
        />

        <input
          type="text"
          placeholder="Descrição da Despesa"
          className="form-create_input"
          required
          onChange={this._handleChangeTitle.bind(this)}
        />
        <input
          type="number"
          placeholder="Valor R$"
          className="form-create_input"
          required
          onChange={this._handleChangeValue.bind(this)}
          onChange={this._handleConvertValue.bind(this)}
        />
        <input
          type="date"
          // value="2000-01-01"
          placeholdert="Vencimento"
          required
          className="form-create_input form-create_date"
          onChange={this._handleChangeDate.bind(this)}
        />

        {/* <DatePicker />

        <select className="select-test">
          <option defaultChecked={true}>Sem categoria</option>
          {this.props.categories.map((category) => {
            return <option key={category}>{category}</option>;
          })}
        </select> */}

        <button className="form-create_input form-create_submit">Salvar</button>
      </form>
    );
  }
}

export default CreateExpenseForm;
