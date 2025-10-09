import React from 'react';
import logo from '../../assets/logo.png'
import { Navigate, NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Header = () => {

    const gitNavigation = () => {
        window.open( 'https://github.com/TCahnaf');
    }



    return (
        <div>
            <nav className='flex justify-between items-center font-bold py-4 px-16 border-b-2 border-gray-100 '>

                <div className = "flex gap-2 items center justify-center">
                    <img className='w-[40px] h-[40px]' src= {logo} alt="" />
                    <p className=' gradient-font mt-2'>HERO.IO</p>

                </div>

                <div>
                          <ul className = "flex gap-3">
    <li className='hover:text-[#632EE3]'  ><NavLink to={'/'}>Home</NavLink></li>
    <li  className='hover:text-[#632EE3]' ><NavLink to = {'/apps'}>Apps</NavLink></li>
    <li  className='hover:text-[#632EE3]' ><NavLink to = {'/install'}>Installation</NavLink></li>
    </ul>


                </div>


                

                <div>
                    <button onClick={gitNavigation} className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex gap-2 items-center text-white p-2 rounded-md'
                    ><FontAwesomeIcon icon={faGithub} />Contribute</button>

                </div>


            </nav>



            
        </div>
    );
};

export default Header;



// bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent