import React, { Component } from "react";

import "../styles/components/ListCategories.css";
class ListCategories extends Component {




  // _handleEventInput(event) {
  //   if (event.key === "Enter") {
  //     let valueCategory = event.target.value;
  //     this.props.addCategory(valueCategory);
  //     event.target.value = "";
  //   }
  // }
  // _teste(event) {
  //   let searchExpense = event.state.value;
  //   this.props.updateSearch(searchExpense);
  // }

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
      return (
        expense.title, expense.date.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
      );
    });

    return (
      <section className="list-categories">
        {/* <ul className="list-categories_list">
          {this.props.categories.map((category, index) => {
            return (
              <li key={index} className="list-categories_item">
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          id="listCategoriesInput"
          className="list-categories_input "
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventInput.bind(this)}
          // onInput={this._teste}
        /> */}

{/* <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}

          className="list-categories_input"
          placeholder="Pesquisar..."
        /> */}
      </section>
    );
  }
}

export default ListCategories;
