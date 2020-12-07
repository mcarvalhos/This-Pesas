import React, { Component } from "react";

import "../styles/components/ListCategories.css";
class ListCategories extends Component {
  _handleEventInput(event) {
    if (event.key === "Enter") {
      let valueCategory = event.target.value;
      this.props.addCategory(valueCategory);
      event.target.value = "";
    }
  }
  _teste(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <section className="list-categories">
        <ul className="list-categories_list">
          {this.props.categories.map((category, index) => {
            return (
              <li
                key={index}
                className="list-categories_item"
                onClick={this._teste}
              >
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
          onInput={this._teste}

        />
         <input
          type="text"
          id="listCategoriesInput"
          className="list-categories_input "
          placeholder="Pesquisar..."

        />
      </section>
    );
  }
}

export default ListCategories;