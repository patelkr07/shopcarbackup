import React, { Component } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Input from "../components/Input"
import SearchForm from "../components/SearchForm"
import Container from "../components/Container"
import Button from "../components/Button"
import { CarList, CarListItem } from "../components/CarList";
import Row from "../components/Row";
import API from "../utils/API"


var carPixArray = ["https://www.wsupercars.com/wallpapers/Honda/1992-Honda-NSX-R-V4-1600.jpg", "https://img1.goodfon.com/original/1920x1080/9/80/bmw-e39-m5-mashina-bmv-avtomobil-les-osen.jpg", "https://cdn.motor1.com/images/mgl/Bw9WA/s1/mercedes-benz-s-class-w126.jpg", "http://www.zengarage.com.au/wp-content/uploads/2016/03/selectnine2016-Tonys190Evolution-28.jpg", "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/07/4000x2000/landscape-1455663709-jaguar-f-type-svr-27-convertible-track.jpg", "https://img.wallpapersafari.com/desktop/1920/1080/29/12/7ISByZ.jpg"]; 

var randomizer = Math.floor(6*Math.random());

var nsxPic = carPixArray[randomizer];

class Buy extends Component {
    state = {
        cars: [],
        carSearch: ""
    };

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getCar(this.state.carSearch)
            .then(res => this.setState({ cars: res.data.listings }))
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div>
                <Hero backgroundImage={nsxPic}></Hero>
                    <Container>                
                        
                            <Input
                            name="carSearch"
                            value={this.state.carSearch}
                            onChange={this.handleInputChange}
                            placeholder="Search for a Car"
                            />

                            <Button
                            onClick={this.handleFormSubmit}
                            type="success"
                            className="input-lg"
                            >
                                Search
                            </Button>
                            <Row>
                                {!this.state.cars.length ? (
                                    <h1 className="text-center">No Cars to Display</h1>
                                ) : (
                                    <CarList>
                                        {this.state.cars.map(car => {
                                            return (
                                                <CarListItem
                                                  key={car.id}
                                                  year={car.year}
                                                  make={car.make}
                                                  model={car.model}
                                                  heading={car.heading}
                                                  price={car.price}
                                                  miles={car.miles}
                                                  zip={car.zip}
                                                  thumbnail={car.media.photo_links[0]}
                                                  href={car.vdp_url}
                                                />
                                            )
                                        })}
                                    </CarList>
                                )}
                                                                
                            </Row>
                    </Container>

            </div>
        )
    }
}

export default Buy;














// function Buy() {
//     return (
//         <div>
//             <Hero backgroundImage={nsxPic}></Hero>
//         </div>
//     )
// }

// render() {
//     return (
//         <div>
//             <SearchForm />
//         </div>
//     )
// }

// export default Buy;