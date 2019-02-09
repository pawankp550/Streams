import React from 'react'
import {  NavLink  } from 'react-router-dom';

const Header = () => {

    return(

            <div >
                <div className="ui secondary pointing menu">
                    <NavLink to='/' className="item" exact>
                        <i class="home icon"></i>
                    </NavLink>

                <div className="right menu">
                    <NavLink to='/streams/new' className="ui item" exact>
                        New Stream
                    </NavLink>
                </div>
                </div>

        </div>
    )


}


export default Header;