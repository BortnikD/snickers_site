import React, { Component } from 'react'

export class Controlers extends Component {
  render() {
    return (
        <div className="controlers">
            <button className="prew-page-btn" onClick={this.props.onPrev}>Previous</button>
            <button className="next-page-btn" onClick={this.props.onNext}>Next</button>
        </div>
    )
  }
}

export default Controlers