import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <NavLink className='navbar-brand' to="/">25 REACT</NavLink>
                {/* <a class="navbar-brand" href="#">25 REACT</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><NavLink className='nav-link' to="/accordian">Accordian</NavLink></li>
                        <li class="nav-item"><NavLink className='nav-link' to="/color">Color</NavLink></li>
                        <li class="nav-item"><NavLink className='nav-link' to="/rating">Rating</NavLink></li>
                        <li class="nav-item"><NavLink className='nav-link' to="/slider">Slider</NavLink></li>
                        <li class="nav-item"><NavLink className='nav-link' to="/load-more">Load More</NavLink></li>
                        <li class="nav-item"><NavLink className='nav-link' to="/tree-view">TreeView</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar