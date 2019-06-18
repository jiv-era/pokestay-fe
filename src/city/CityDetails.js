import React from 'react';
import HomeCard from '../home/HomeCard.js';


class CityDetails extends React.Component {

    state = {
        showHomes: false
    }

    renderHomeCards = () => {
        return this.props.homes.map(home =>{
            return <HomeCard key={home.id} {...home} currentUser={this.props.currentUser} />
        })
    }
    handleClick = () => {
        this.setState(prevState => ({
            showHomes: !prevState.showHomes
        }))
    }


    render(){
        return(
            <div className="city-details">
                <h1>Welcome to {this.props.name}!</h1>
                <h2>{this.props.region}</h2>
                <p>{this.props.description}</p>
                <p>Population: {this.props.population}</p>
                <button onClick={() => this.props.back()}>Back</button>
                <button id="home-button" onClick={() => this.handleClick()}>Available Homes</button>
                { this.state.showHomes? 
                <div className="home-list">
                    {this.renderHomeCards()}
                </div> : null
                }
            </div>
        )
    }
} 



export default CityDetails;