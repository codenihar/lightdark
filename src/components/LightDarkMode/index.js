import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state: {
    light: true,
  }

  buttonPress = () => {
    this.setState(prevState => ({light: !prevState.light}))
  }

  buttonText = () => {
    const {light} = this.state

    return light ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const lightMode = this.buttonText()

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Click to change mode</h1>
          <div>
            <button type="button" className="button" onClick={this.buttonPress}>
              {lightMode}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
