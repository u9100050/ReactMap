/**
 * Created by NekrasovAA on 05.05.2016.
 */
'use strict';
import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class List extends React.Component {
    render() {
        return (
            <ListGroup className="max_height scrollable-y listBlock">
                {this.props.regs.map((reg, regIndex)=> {
                    return (
                        <ListGroupItem
                            className="listElem"
                            key={regIndex}
                        >
                            {reg.RegName}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )
    }
}