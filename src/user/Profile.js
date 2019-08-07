import React from 'react';
import Navbar from '../global/Navbar.js'
import ReservationContainer from "./ReservationContainer.js"


class Profile extends React.Component {

    state = {
        reservations: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/reservations`)
        .then(resp => resp.json())
        .then(reservations => {
            this.setState({
                reservations: reservations
            }, () => console.log(reservations))
        })
    }



    render () {
        return(
            <div className="profile">
                <Navbar />
                {this.props.currentUser ? 
                <div className="profile-container">
                    <div className="profile-details">
                        <h1>Welcome, {this.props.currentUser.username}</h1>
                    <img src={this.props.currentUser.profile_pic} alt="user-pic" />

                    <div className="reservation-list"> 
                    <ReservationContainer currentUser= {this.state.currentUser} reservations={this.state.reservations}/>
               
                    </div> 
                        <footer>
                            <h3>© 2019 Pokémon</h3>
                        </footer>
                    </div>

                </div>  
                    
                : <span>hello</span>}  
            </div>
        );
    }
}



export default Profile;