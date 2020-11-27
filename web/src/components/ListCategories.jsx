import React, { Component } from "react";

class ListCategories extends Component {
  _handleCategorySelected(event) {
    let categoryValue = event.target.value;
    this.props.addCategory(categoryValue);
    console.log(categoryValue);
  }

  render() {
    return (
      <section className="category-list">
        <select
          className="category-list_select"
          onChange={this._handleCategorySelected.bind(this)}
        >
          {this.props.categories.map((category, index) => {
            return (
              <option key={index} className="list-categories_item">
                {category}
              </option>
            );
          })}
        </select>
      </section>
    );
  }
}

export default ListCategories;
