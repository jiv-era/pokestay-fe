import React from 'react';
import Navbar from '../global/Navbar.js'
import CityContainer from '../city/CityContainer.js';
// import HomesContainer from '../city/HomesContainer.js'

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
            <div>
            <button onClick={this.props.logOut}>Log Out</button>
            <CityContainer cities={this.state.cities}/>


            </div>
        )
    }






}


export default Home;