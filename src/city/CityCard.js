import React from 'react';

const CityCard = (props) =>{

    return(
        <div >
            <h1>{props.city.name}</h1>
            <image src={props.city.img_url} />              
        </div>
    );


}


export default CityCard;