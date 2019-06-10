import React from 'react';
import Navbar from '../global/Navbar.js'
import CityContainer from '../city/CityContainer.js';

class Home extends React.Component {

    state = {
        cities: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/cities`)
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
            
            <CityContainer cities={this.state.cities}/>


            </div>
        )
    }






}


export default Home;