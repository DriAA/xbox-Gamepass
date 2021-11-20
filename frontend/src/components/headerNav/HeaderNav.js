import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXbox } from '@fortawesome/free-brands-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {Stack } from "react-bootstrap";


import './HeaderNav.css'

const icon = <FontAwesomeIcon className='fs-5 m-auto' icon={faXbox}/>



function HeaderNav(props){
    return(
            <Stack direction="horizontal" className='headerNav px-3' gap={3}>
                <div className="my-auto mx-3">
                    <p className='m-auto text-light'>{icon}</p>
                </div>
                <div className="my-auto">
                    <ul className='m-0 p-0 d-inline'>
                        <li  className='m-0 d-inline'>
                        <FontAwesomeIcon className='fs-5 m-auto ' icon={faChevronLeft}/>
                        </li >
                        <li  className='ms-4 m-0 d-inline'>GAME PASS</li>
                        <li  className='ms-4 m-0 d-inline'>SOCIAL</li>
                        <li  className='ms-4 m-0 d-inline'>STORE</li>

                    </ul>
                </div>
                <div className="ms-auto">

                </div>
                <div className="vr" />
                <div >Third item</div>
            </Stack>
    )
}

export default HeaderNav