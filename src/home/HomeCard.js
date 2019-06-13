import React from 'react';

class HomeCard extends React.Component {


    state = {
        user_id: this.props.currentUser.id,
        home_id: this.props.id
    }


    newReservation = () => {
        fetch(`http://localhost:3000/api/v1/reservations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }


    handleClick = () => {
        this.newReservation()
    }

    render(){
        return(
            <div className="home-card">
                <h1>{this.props.name}</h1>
                <h2>{this.props.city_id}</h2>
                <div className="img-wrapper">
                    <img className="image" src={this.props.img_url} alt={this.props.name} />
                </div>  
                <h3>Price: {this.props.price} per night</h3> 
                <button onClick={() => this.handleClick()}>Make Reservation</button>
            </div>
        );
    }
}


export default HomeCard;