import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXbox } from '@fortawesome/free-brands-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";


import './HeaderNav.css'

const icon = <FontAwesomeIcon className='fs-5 m-auto' icon={faXbox}/>



function HeaderNav(props){
    return(
            <Stack direction="horizontal" className='headerNav px-3' gap={3}>
                <div className="my-auto mx-3">
                    <Link  className='m-0 d-inline' to="/">{icon}</Link>
                </div>
                <div className="my-auto">
                    
                    <div className='m-0 p-0 d-inline'>
                        <Link  className='ms-4 d-inline' to="/back">
                            <FontAwesomeIcon className='fs-5 m-auto ' icon={faChevronLeft}/>
                        </Link>
                        <Link  className='ms-4 d-inline' to="/all">
                            GAME PASS
                        </Link>
                        <Link  className='ms-4 d-inline' to="/social">
                            SOCIAL
                        </Link>
                        <Link  className='ms-4 d-inline' to="/store">
                            STORE
                        </Link>
                    </div>
                </div>
                <div className="ms-auto">

                </div>
                <div className="vr" />
                <div >Third item</div>
            </Stack>
    )
}

export default HeaderNav