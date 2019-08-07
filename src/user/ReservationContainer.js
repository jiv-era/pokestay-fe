import React from 'react'
import ReservationCard from './ReservationCard';



class ReservationContainer extends React.Component {




    renderReservationCards(){
        return this.props.reservations.map(reservation => 
            <ReservationCard
            key={reservation.id}
            reservation={reservation}
            {...reservation}
            />
        )
    }





    render(){

        let activeUser = this.props.reservations.find(reservation => reservation.user_id === this.state.currentUser.id)

        if(activeUser){
          return (
            <div className="reservation-container">
            
              <br />
              <h1 className="reserve-line">Current Reservations</h1>
              
              <div className="city-list">
                {this.renderReservationCards()}
              </div>
            </div>
          )
        }
    }

}


export default ReservationContainer