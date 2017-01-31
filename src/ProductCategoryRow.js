import React, { Component } from 'react';
import './ProductCategoryRow.js';

export default class ProductCategoryRow extends Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}
