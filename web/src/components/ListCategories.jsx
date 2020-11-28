import React, { Component } from "react";

class ListCategories extends Component {
  _handleCategorySelected(event) {
    this.props.addCategory = event.target.value;

    console.log(event.target.value);
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
  render() {
    return (
      <section className="category-list">
        <select
          className="category-list_select"
          onChange={this._handleCategorySelected.bind(this)}
          onChange={this._handleGetDate.bind(this)}
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
