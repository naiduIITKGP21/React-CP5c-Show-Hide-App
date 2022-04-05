// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    hideFirstname: true,
    hideLastname: true,
  }

  showHideFirstname = () => {
    this.setState(prevStat => ({hideFirstname: !prevStat.hideFirstname}))
  }

  showHideLastname = () => {
    this.setState(prevStat => ({hideLastname: !prevStat.hideLastname}))
  }

  render() {
    const {hideFirstname, hideLastname} = this.state
    return (
      <div className="sh-bg">
        <h1 className="sh-heading">Show/Hide</h1>
        <div className="sh-main-container">
          <div className="sh-container">
            <button
              onClick={this.showHideFirstname}
              type="button"
              className="sh-button"
            >
              Show/Hide Firstname
            </button>

            {!hideFirstname && (
              <div className="name-container">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div className="sh-container">
            <button
              onClick={this.showHideLastname}
              className="sh-button"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {!hideLastname && (
              <div className="name-container">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
