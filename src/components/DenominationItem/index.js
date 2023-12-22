// Write your code here

import './index.css'

const DenominationItem = props => {
  const {itemList, updateAmount} = props
  const {value} = itemList

  const onUpdateAmount = () => {
    updateAmount(value)
  }

  return (
    <li className="list-container">
      <button type="button" onClick={onUpdateAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
