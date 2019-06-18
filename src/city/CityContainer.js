import React from 'react';
import CityCard from './CityCard.js'
import CityDetails from './CityDetails.js'


class CityContainer extends React.Component{ 
  state = {
    currentCity: null
  }

  selectCity = (cityID) => {
    this.setState({
      currentCity: cityID
    })
  }

  renderCityCards() {
    return this.props.cities.map(city => 
    <CityCard 
      key={city.id} 
      city={city} 
      selectCity={this.selectCity} 
      {...city}/>)
  }

  backButton = () => {
    this.setState({
      currentCity: null
    })
  }

  render(){
      
        let activeCity = this.props.cities.find(city => city.id === this.state.currentCity)

        if(activeCity){
          return <CityDetails currentUser={this.props.currentUser} back={this.backButton} {...activeCity} />
        } else {
          return (
            <div className="city-container">
            
              <br />
              <h1 className="welcome-line"> Which city would you like to stay in?</h1>
              
              <div className="city-list">
                {this.renderCityCards()}
              </div>
              <footer>
                    <h3>© 2019 Inspired by Pokémon</h3>
                </footer>
            </div> 
      )
    }
  }  
}



export default CityContainer;










