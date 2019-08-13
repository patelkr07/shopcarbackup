import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Iframe from 'react-iframe';


export function VideoList ({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function VideoListItem({
    title,
    thumbnail,
    embedlink
    }) {
        return (
            <li className="list-group-item">
                <Container>
                    <Row>
                        
                        <Iframe url={"https://www.youtube.com/embed/"+ embedlink}
                            width="600px"
                            height="450px"
                            />                
                    </Row>
                </Container>
            </li>
        )
    }