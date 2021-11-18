import React from "react";
import {Row, Col, Form} from "react-bootstrap"
import CustomCardGroup from "../CustomCardGroup";

import './GameLibrary.css'

function GameLibrary(props){
    console.log("Library Initialized",props.gameDetail)
    return(
        <div className='p-3 m-0'>
            <h2 className='lead fs-2 mb-4'>{props.title}</h2>
            <Row >
                {/* Game Filter */}
                <Col xs={6} md={5} lg={4} xl={3}>
                    <p className='lead fs-3 border-bottom pb-3'>Filters</p>
                    <Form>
                    <section className='mb-4'>
                        <Form.Label className='lead fs-6'>Capabilities</Form.Label>
                        <Form.Select className='selectForm' aria-label="Floating label select example">
                            <option>Any</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </section>
                    <section className='mb-4'>
                        <Form.Label className='lead fs-6'>Genre</Form.Label>
                        <Form.Select className='selectForm' aria-label="Floating label select example">
                            <option>Any</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </section>
                    <section className='mb-4'>
                        <Form.Label className='lead fs-6'>Number of Players</Form.Label>
                        <Form.Select className='selectForm' aria-label="Floating label select example">
                            <option>Any</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </section>

                    </Form>

                </Col>
                <Col xs={6} md={7} lg={8} xl={9} className='p-5 game-scroll'>
                    <CustomCardGroup gameDetails={props.gameDetail}></CustomCardGroup>
                </Col>
            </Row>
        </div>

    )
}

export default GameLibrary