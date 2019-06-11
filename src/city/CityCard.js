import React from 'react';

class CityCard extends React.Component{

    handleClick = () =>{
        this.props.selectCity(this.props.id)
    }

render(){
    return(
        <div onClick={this.handleClick} className="city-card">
            <h1>{this.props.city.name}</h1>
            <div className="img-wrapper">
                <img className="image" src={this.props.city.img_url} alt={this.props.city.name} />
            </div>            
        </div>
        );
    }
}


export default CityCard;