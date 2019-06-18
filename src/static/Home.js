import React from 'react';
import Navbar from '../global/Navbar.js'

import CityContainer from '../city/CityContainer.js';
import Sidebar from '../global/Sidebar.js';


class Home extends React.Component {

    state = {
        cities: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/cities`)
        .then(resp => resp.json())
        .then(cities => {
            this.setState({
                cities: cities
            })
        })
    } 

    render(){
        return(
            <div className="main-container">
                <div className="header">
                    <Navbar currentUser={this.props.currentUser} logOut={this.props.logOut}/>
                </div>
                <div className="content">
                    <CityContainer currentUser={this.props.currentUser} cities={this.state.cities}/>
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
        )
    }
}


export default Home;