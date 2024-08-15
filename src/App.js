import React from "react"
import Header from "./components/header/Header"
import Snickers from "./components/snickers/Snickers"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Contacts from "./components/contacts/Contacts"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const items = require('./snickers.json')

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items
        };
    }

    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>  
                    <Header />     

                    <Routes>
                        <Route path='/' element={
                            <>
                                <Snickers snickersList={this.state.items}/>
                            </>
                        }/>
                        <Route path='/about' element={ <About /> } />
                        <Route path='/contacts' element={ <Contacts /> } />
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
