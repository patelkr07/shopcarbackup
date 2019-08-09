import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Hero backgroundImage="http://www.zengarage.com.au/wp-content/uploads/2016/03/selectnine2016-Tonys190Evolution-28.jpg">
                <h1>ShopCar</h1>
                <h2>Research || Fix || Shop || Play</h2>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome to ShopCar!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            lorem ipsum
                        </p>
                    </Col>
                </Row>
            </Container>
              

        </div>
    )
}

export default About;

// Acura NSX "https://www.wsupercars.com/wallpapers/Honda/1992-Honda-NSX-R-V4-1600.jpg"
// BMW M5 "https://img1.goodfon.com/original/1920x1080/9/80/bmw-e39-m5-mashina-bmv-avtomobil-les-osen.jpg"
// Mercedes w126 "https://assets.hemmings.com/blog/wp-content/uploads//2018/08/HMN0918-HSMIC-01.jpg"
// Mercedes w126 "https://cdn.motor1.com/images/mgl/Bw9WA/s1/mercedes-benz-s-class-w126.jpg"
// Mercedes 190E side profile "http://www.zengarage.com.au/wp-content/uploads/2016/03/selectnine2016-Tonys190Evolution-28.jpg"

