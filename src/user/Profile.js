import React from 'react';
import Navbar from '../global/Navbar.js'


class Profile extends React.Component {

    render () {
        return(
            <div className="profile-container">
                <Navbar />
                
                <div className="profile-details">
                    <h1>helllo</h1>
                
                {/* <div className="reservation-list">
                </div> */}
                </div>
            </div>
        );
    }
}



export default Profile;