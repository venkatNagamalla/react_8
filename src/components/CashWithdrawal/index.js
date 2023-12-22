// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {totalAmount: 2000}

  updateAmount = amount => {
    this.setState(prevState => ({totalAmount: prevState.totalAmount - amount}))
  }

  render() {
    const {totalAmount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="dp-container">
            <p className="dp-icon">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="amount-container">
            <p className="amount-heading">Your Balance</p>
            <div className="rupees-container">
              <p className="amount-count">{totalAmount}</p>
              <p className="rupees-heading">In Rupees</p>
            </div>
          </div>
          <p className="side-heading">Withdraw</p>
          <p className="amount-side-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-item">
            {denominationsList.map(eachItem => (
              <DenominationItem
                itemList={eachItem}
                updateAmount={this.updateAmount}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
