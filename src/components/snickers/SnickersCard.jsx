import React, { Component } from 'react';

class SnickersCard extends Component {
    render() {
        return (
            <div className="snickers-card">
                <button className="btn-to-snickers" >
                    <img 
                        src={ this.props.snickers.image }
                        alt={ this.props.snickers.name } 
                        width="250px" height="250px"
                        >
                    </img> 
                </button>
                <label className="snickers-title"> 
                    { this.props.snickers.name } 
                    <br></br>
                    <div className='price'>{ this.props.snickers.price }</div>
                </label>

            </div>
        )
    }
}

export default SnickersCard;