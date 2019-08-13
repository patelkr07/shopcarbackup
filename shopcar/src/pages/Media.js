import React, { Component } from "react";
import Hero from "../components/Hero";
import Input from "../components/Input";
import Container from "../components/Container";
import Button from "../components/Button";
import Row from "../components/Row";
import API from "../utils/API";
import { VideoList, VideoListItem } from "../components/VideoList";


var carPixArray = ["https://www.wsupercars.com/wallpapers/Honda/1992-Honda-NSX-R-V4-1600.jpg", "https://img1.goodfon.com/original/1920x1080/9/80/bmw-e39-m5-mashina-bmv-avtomobil-les-osen.jpg", "https://cdn.motor1.com/images/mgl/Bw9WA/s1/mercedes-benz-s-class-w126.jpg", "http://www.zengarage.com.au/wp-content/uploads/2016/03/selectnine2016-Tonys190Evolution-28.jpg", "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/07/4000x2000/landscape-1455663709-jaguar-f-type-svr-27-convertible-track.jpg", "https://img.wallpapersafari.com/desktop/1920/1080/29/12/7ISByZ.jpg"]; 

var randomizer = Math.floor(6*Math.random());

var nsxPic = carPixArray[randomizer];

class Media extends Component {
    state = {
        videos: [],
        videoSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getVideo(this.state.videoSearch)
            .then(res => this.setState({ videos: res.data.items }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Hero backgroundImage={nsxPic}></Hero>
                    <Container>

                        <Input
                        name="videoSearch"
                        value={this.state.videoSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for a Video"
                        />

                        <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                        >
                            Search
                        </Button>
                        <Row>
                            {!this.state.videos.length ? ( 
                                <h1 className="text-center">No Videos to Display</h1>
                            ) : (
                                <VideoList>
                                    {this.state.videos.map(video => {
                                        return (
                                            <VideoListItem
                                                key={video.id}
                                                title={video.title}
                                                thumbnail={video.thumbnail}
                                            />                                               
                                        )
                                    })}
                                </VideoList>
                            )}
                        </Row>
                    </Container>
            </div>
        )
        }
    }

export default Media;




































//                         name="videoSearch"
//                     </Container>
//             </div>
//         )
//     }
// }

// handleFormSubmit = event => {
//     event.preventDefault();
//     API.getVideo(this.state.videoSearch)
//         .then(res => this.setState({ videos: res.data }))
//         .catch(err => console.log(err));
    
// }

// render() {
//     return (
//     <div>
//         <Hero backgroundImage={nsxPic}></Hero>
//             <Container>
//                 <Input
//                 name="videoSearch"
//                 value={this.state.videoSearch}
//                 onChange={this.handleInputChange}
//                 placeholder="Search for a Car Video..."
//                 />

//                 <Button
//                 onClick={this.handleFormSubmit}
//                 type="success"
//                 className="input-lg"
//                 >
//                     Search
//                 </Button>
//                 <Row>
//                     {!this.state.videos.length ? (
//                         <h1 className="text-center">No Videos to Display</h1>
//                     ) : (
//                         <VideoList>
//                             {this.state.videos.map(video => {
//                                 return (
//                                     <VideoListItem
//                                       key={video.id}
//                                       title={video.title}
//                                       thumbnail={video.thumbnail}
//                                       url={video.url}
//                                     />
//                                 )
//                             })}
//                         </VideoList>
//                     )
//                     )}
//                 </Row>
//             </Container>
//     </div>
// }

// export default Media;