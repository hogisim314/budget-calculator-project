import React, { Component } from 'react'
import "./ExpenseItem.css"
import {MdDelete, MdEdit} from 'react-icons/md'
export class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
            <span className='expense'>학원등록</span>
            <span className='amount'>1000원</span>
        </div>
        <div>
            <button className='edit-btn'><MdEdit></MdEdit></button>
            <button className='clear-btn'><MdDelete></MdDelete></button>
        </div>
      </li>
    )
  }
}

export default ExpenseItem