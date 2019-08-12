import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function VideoList ({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function VideoListItem({
    title,
    thumbnail,
    views
    }) {
        return (
            <li className="list-group-item">
                <Container>
                    <Row>
                        <Col size="xs-4 sm-2">
                            <Thumbnail src={thumbnail} />
                        </Col>
                        <Col size="xs-8 sm-9">
                            <h3>{title}</h3>
                            <h3>{thumbnail}</h3>
                            <h3>{views}</h3>
                        </Col>
                    </Row>
                </Container>
            </li>
        )
    }