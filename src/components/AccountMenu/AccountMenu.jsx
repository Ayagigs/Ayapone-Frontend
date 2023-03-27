import React from 'react'
import './AccountMenu.css'

const AccountMenu = () => {
    return (
        <>
            <div className="account-menu">
                    <button className='sign-up-btn'>Sign Up</button>
                    <button className='log-in-btn'>Log In</button>
                    <hr />
            <ul>
                <li>My Account</li>
                <li>My Orders</li>
                <li>Wish List</li>
            </ul>
            </div>
        </>
    )
}

export default AccountMenu