import React, { Component } from "react";
import CreateExpenseForm from "./CreateExpenseForm";
import CardExpense from "./CardExpense";
import DatePicker from "./DatePicker";




class ListCategories extends Component {
  _handleCategorySelected(event) {
    this.props.categories = event.target.value;

    console.log(this.props.categories);
  }
  
  render() {
    return (
      <section className="category-list">
        {/* <select
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
        </select> */}
      </section>
    );
  }
}

export default ListCategories;
