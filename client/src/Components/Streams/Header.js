import React from 'react'
import {  NavLink  } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth'

const Header = () => {

    return(

            <div >
                <div className="ui secondary pointing menu">
                    <NavLink to='/' className="item" exact>
                        <i className="large home icon HeaderIcon"></i>
                    </NavLink>

                    <div className="right menu">
                        <GoogleAuth />

                    </div>
               </div>
        </div>
    )
}

export default Header;