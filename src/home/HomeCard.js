import React from 'react';

class HomeCard extends React.Component {


    state = {
        name: this.props.name,
        address: this.props.address, 
        price: this.props.price,
        user_id: this.props.currentUser.id,
        home_id: this.props.id,
        showButton: true
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
        alert('Your reservation has been made!')
        this.setState(prevState => ({
            showButton: !prevState.showButton
        }))
    }

    render(){
        console.log(this.props)
        return(
            <div className="home-card">
                <h1>{this.props.name}</h1>
                <h2>{this.props.city_id}</h2>
                <div className="img-wrapper">
                    <img className="image" src={this.props.img_url} alt={this.props.name} />
                </div>  
                <h3>${this.props.price}/night</h3> 
                {this.state.showButton? <button onClick={() => this.handleClick()}>Make Reservation</button> : null}
            </div>
        );
    }
}


export default HomeCard;