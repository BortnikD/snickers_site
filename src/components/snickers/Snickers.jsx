import React, { Component } from 'react'
import './snickers.css'
import SnickersCard from './SnickersCard'
import SnickersActions from './SnickersActions'
import Controlers from './Controlers'

export class Snickers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: 0,
            endIndex: 6,
            filteredSnickersList: this.props.snickersList,
        };
        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onSearchList = this.onSearchList.bind(this);
        this.onSort = this.onSort.bind(this);

    }

    onNext() {
        if (this.state.endIndex < this.props.snickersList.length)
            this.setState(prevState => ({
                startIndex: prevState.startIndex + 6,
                endIndex: prevState.endIndex + 6
            }));
    }

    onPrev() {
        if (this.state.startIndex > 0)
            this.setState(prevState => ({
                startIndex: prevState.startIndex - 6,
                endIndex: prevState.endIndex - 6
            }));
    }

    AllCards() {
        return this.state.filteredSnickersList
            .slice(this.state.startIndex, this.state.endIndex)
            .map(snickers => (
                <SnickersCard key={snickers.id} snickers={snickers} />
            ));
    }

    onSearchList(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredList = this.props.snickersList.filter(snickers =>
            snickers.name.toLowerCase().includes(searchTerm)
        );
    
        this.setState({
            filteredSnickersList: filteredList,
            startIndex: 0,
            endIndex: 6,
        });
    }

    onSort(event){
        const sortTerm = event.target.value;
        let sortedList;
        switch(sortTerm){
            case 'price':
                sortedList = [...this.props.snickersList].sort((el_1, el_2) => {
                    return el_1.price - el_2.price;
                });
                break;
            default:
                sortedList = this.props.snickersList;
                break;
        }

        this.setState({
            filteredSnickersList: sortedList,
            startIndex: 0,
            endIndex: 6,
        });
    }

    render() {
        return (
            <main>
                <div className="snickers-main">
                    <SnickersActions onSearchList={this.onSearchList} onSort={this.onSort} />

                    <div className="snickers-cards">
                        {
                            this.AllCards()
                        }
                    </div>

                    <Controlers onNext={this.onNext} onPrev={this.onPrev} />
                </div>
            </main>
        )
    }
}

export default Snickers;