import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onGenerate = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({num: randomNum})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.onGenerate} type="button" className="button">
            Generate
          </button>
          <p className="cont">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
