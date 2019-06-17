import React from 'react';



class Navbar extends React.Component{


    render() {
        return(
           <div className="top-nav">
               {/* <img src={this.props.currentUser.profile_pic} alt={this.props.currentUser.name}/> */}
               <ul id="main-nav">
                   <li className="main-nav-li" id="home-item">
                       <a href="http://localhost:3001/home">

                            <span className="title-home">Home</span>
                       </a>
                   </li>
                   <li className="main-nav-li" id="profile-item">
                        <a href="http://localhost:3001/profile">

                            <span className="title-home">Profile</span>
                        </a>
                   </li>
                   <li className="main-nav-li" id="pokedex-item">
                        <a href="http://localhost:3001/home">

                            <span className="title-home">Pokédex</span>
                        </a>
                   </li>
               </ul>
           </div>
      )
    }

}


export default Navbar;