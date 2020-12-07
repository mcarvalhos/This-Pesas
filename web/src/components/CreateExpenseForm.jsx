import React, { Component } from "react";
// import DatePicker from "../components/DatePicker";

import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";

import logoImg from "../images/logo.svg";

import "../styles/components/CreateExpenseForm.css";

class CreateExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.cost = "";
    this.date = "";
    this.category = "Sem categoria";
  }
  _handleChangeCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeCost(event) {
    event.stopPropagation();
    this.cost = event.target.value;
  }

  _handleChangeDate(event) {
    event.stopPropagation();
    this.date = event.target.value;
  }

  _formatDate(date) {
    var dateControl = document.querySelector('input[type="date"]');
    window.setInterval(() => {
      dateControl.value = "2017-06-01";
    });
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.cost, this.date, this.category);
  }

  render() {
    const costAllExpenses = this.props.expenses.map((expense, index) =>
      parseFloat(expense.cost)
    );
    const resultAllExpenses = costAllExpenses.reduce((a, b) => a + b, 0);

    return (
      <div id="page-aplication">
        <aside>
          <header>
            <img src={logoImg} className="logo-img_form" alt="" />

            {/* <img
              style={{
                alignSelf: "center",
                marginBottom: "16px",
                marginTop: "24px",
              }}
              width="250"
              height="150px"
              src="https://www.flaticon.com/svg/static/icons/svg/2037/2037184.svg"
              alt=""
            /> */}
          </header>

          <main>
            <form
              className="create-expense-form"
              onSubmit={this._createCard.bind(this)}
            >
              <select
                onChange={this._handleChangeCategory.bind(this)}
                className="form-create_input form-create_select"
              >
                <option defaultChecked={true}>Sem categoria</option>
                {this.props.categories.map((category) => {
                  return <option key={category}>{category}</option>;
                })}
              </select>

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
                onChange={this._handleChangeCost.bind(this)}
              />
              <input
                type="date"
                // value="2000-01-01"o
                placeholdert="Vencimento"
                required
                className="form-create_input form-create_date"
                onChange={this._handleChangeDate.bind(this)}
              />

              {/*
              <DatePicker />

              */}

              <button className="form-create_input form-create_submit">
                Salvar
              </button>
            </form>
          </main>
          <footer>
            <FiArrowUpCircle size={34} color="#76e749" />
            <div className="footer-wallet">
              <h3 className="footer-title">Saldo</h3>
              <p>R$2000</p>
            </div>
            <FiArrowDownCircle size={34} color="#ff4500" />
            <div className="footer-expense">
              <h3 className="footer-title">Despesas</h3>
              <p>R${resultAllExpenses}</p>
            </div>
          </footer>
        </aside>
      </div>
    );
  }
}

export default CreateExpenseForm;
