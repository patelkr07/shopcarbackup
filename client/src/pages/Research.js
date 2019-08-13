import React from "react";
import Hero from "../components/Hero"

var carPixArray = ["https://www.wsupercars.com/wallpapers/Honda/1992-Honda-NSX-R-V4-1600.jpg", "https://img1.goodfon.com/original/1920x1080/9/80/bmw-e39-m5-mashina-bmv-avtomobil-les-osen.jpg", "https://cdn.motor1.com/images/mgl/Bw9WA/s1/mercedes-benz-s-class-w126.jpg", "http://www.zengarage.com.au/wp-content/uploads/2016/03/selectnine2016-Tonys190Evolution-28.jpg", "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/07/4000x2000/landscape-1455663709-jaguar-f-type-svr-27-convertible-track.jpg", "https://img.wallpapersafari.com/desktop/1920/1080/29/12/7ISByZ.jpg"];


//Created a method to select random wallpaper each time page is reloaded
var randomizer = Math.floor(6*Math.random());

var nsxPic = carPixArray[randomizer];


console.log(nsxPic);


console.log(randomizer);



function Research() {
    return(
        <div>
            <Hero backgroundImage={nsxPic}></Hero>
        </div>
    )
}

export default Research;