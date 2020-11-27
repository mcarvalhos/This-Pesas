import React, { Component } from "react";
import "../styles/components/CreateExpenseForm.css";

class CreateExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.value = "";
    this.date = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeValue(event) {
    event.stopPropagation();
    this.value = event.target.value;
  }

  _handleChangeDate(event) {
    event.stopPropagation();
    this.date = event.target.value;
  }

  _handleGetDate(event) {
    event.stopPropagation();
    this.date = event.target.value;
    const d = new Date(this.date);
    const month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    const n = month[d.getMonth()];

    console.log(n);
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.value, this.date);
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
        />
        <input
          type="date"
          // value="2000-01-01"
          className="form-create_input"
          placeholder="dd-mm-yyyy"
          required
          className="form-create_input form-create_date"
          onChange={this._handleChangeDate.bind(this)}
          onChange={this._handleGetDate.bind(this)}
        />
        <button className="form-create_input form-create_submit">Salvar</button>
      </form>
    );
  }
}

export default CreateExpenseForm;
