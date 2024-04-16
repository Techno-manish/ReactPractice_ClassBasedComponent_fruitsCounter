// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onIncreaseMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onIncreaseBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <h1 className="mainHeading">
            Bob ate <span className="count">{mangoCount}</span> mangoes{' '}
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="fruitItemContainer">
            <div className="fruitItem">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.onIncreaseMango}
              >
                Eat Mangoes
              </button>
            </div>
            <div className="fruitItem">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.onIncreaseBanana}
              >
                Eat Bananas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
