import React from 'react'


const CityDetails = (props) => {

    return(
        <div>

        <h1>hello there! {props.name}!</h1>
        <h2>{props.region}</h2>
        <button>Available Homes</button>
        <button onClick={() => props.goBack()}>Go Back</button>
        </div>
    )



}


export default CityDetails;