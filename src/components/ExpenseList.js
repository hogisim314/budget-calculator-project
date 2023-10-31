import React, { Component } from 'react'
import "./ExpenseList.css"
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className='list'>
            {/* Expense Item*/}
            {this.props.initialExpenses.map(expense => {
                return <ExpenseItem 
                expense = {expense} 
                key={expense.id}
                handleDelete={this.props.handleDelete}
                ></ExpenseItem>
            })}
        </ul>
        <button className='btn'>
            목록 지우기
            <MdDelete className='btn-icon'></MdDelete>
        </button>
      </React.Fragment>
    )
  }
}

export default ExpenseList