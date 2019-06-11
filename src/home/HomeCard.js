import React from 'react';




const HomeCard = (props) => {

    return(
        <div>
            <h1>{props.home.name}</h1>
            <h2>{props.home.city}</h2>
            <div className="img-wrapper">
                <img className="image" src={props.home.img_url} alt={props.home.name} />
            </div>  
            <h3>Price: {props.home.price}</h3> 
            <button>Make Reservation</button>
              
        </div>
    );
}


export default HomeCard;