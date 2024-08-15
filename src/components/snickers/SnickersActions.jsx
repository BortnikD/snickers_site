import React, { Component } from 'react'

export class SnickersActions extends Component {
    render() {
        return (
            <div className="snickers-actions">
                <label className="snickers-title-actions">Кроссовки Nike</label>
                <div className="search">
                    <label>Введите название модели</label>
                    <input type="text" placeholder="Nike Air Max" 
                    onChange={ this.props.onSearchList }></input>
                </div>
                <div className="sort">
                    <label>Отсортировать по</label>
                    <select onChange={ this.props.onSort }>
                        <option value="default">По умолчанию</option>
                        <option value="price">Цене</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default SnickersActions;