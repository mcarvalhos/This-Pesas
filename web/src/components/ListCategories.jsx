import React, { Component } from "react";
<<<<<<< HEAD
import CreateExpenseForm from "./CreateExpenseForm";
import DatePicker from "./DatePicker";
=======
import CardExpense from "./CardExpense";
>>>>>>> c4d36469923b208274fe04d23a8a2a3e6daac8a8

class ListCategories extends Component {
  _handleCategorySelected(event) {
    this.props.categories = event.target.value;

    console.log(this.props.categories);
  }
  
  render() {
    return (
      <section className="category-list">
        <select
          className="category-list_select"
          onChange={this._handleCategorySelected.bind(this)}
        >
          {this.props.categories.map((n, index) => {
            return (
              <option key={index} className="list-categories_item">
                {n}
              </option>
            );
          })}
        </select>
      </section>
    );
  }
}

export default ListCategories;
