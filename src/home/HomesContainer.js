import React from 'react'
import HomeCard from './HomeCard'



class HomesContainer extends React.Component {

    state ={
        homes: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/homes`)
        .then(resp => resp.json())
        .then(homes => {
            this.setState({
                homes: homes
            })

        })
    }


    renderHomeCards = () =>{
        return homes.map(home =>{
            return <HomeCard key={home.id} home={home} />
        })
    }
    render(){
        return(
            <div>
                {renderHomeCards()}
            </div>
        )
    }   
}

export default HomesContainer;