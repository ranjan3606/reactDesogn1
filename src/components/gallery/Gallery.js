import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './Gallery.css'

const Photos = ({img, alt}) => {
    return(
        <div className="col s12 m3 marg">
            <img className="materialboxed responsive-img" src={img} alt={alt} />
        </div>
    )
}

class PhotoGallery extends Component{
    state = {
        photo: [
            {
            id: 1,
            img: "https://source.unsplash.com/1600*900/?hotel",
            alt: "hotel"
            },
            {
            id: 2,
            img: "https://source.unsplash.com/1600*900/?restaurant",
            alt: "restaurant"
            },
            {
            id: 3,
            img: "https://source.unsplash.com/1600*900/?nature",
            alt: "nature"
            },
            {
            id: 4,
            img: "https://source.unsplash.com/1600*900/?beach",
            alt: "beach"
            },
            {
            id: 5,
            img: "https://source.unsplash.com/1600*900/?travel",
            alt: "travel"
            },
            {
            id: 6,
            img: "https://source.unsplash.com/1600*900/?travel",
            alt: "travel"
            },
            {
            id: 7,
            img: "https://source.unsplash.com/1600*900/?travel",
            alt: "travel"
            },
            {
            id: 8,
            img: "https://source.unsplash.com/1600*900/?travel",
            alt: "travel"
            },
            {
            id: 9,
            img: "https://source.unsplash.com/1600*900/?travel",
            alt: "travel"
            },
            {
            id: 10,
            img: "https://source.unsplash.com/1600*900/?sea",
            alt: "sea"
            },
            {
            id: 11,
            img: "https://source.unsplash.com/1600*900/?building",
            alt: "building"
            },
            {
            id: 12,
            img: "https://source.unsplash.com/1600*900/?climbing",
            alt: "climbing"
            },
            
        ]
    }

    render(){
        return(
            <div className="row">
                {this.state.photo.map(gal => (
                    <Photos key={gal.id}
                    img={gal.img} alt={gal.alt} 
                    />
                ))}
            </div>
        )
    }
}

export default class Gallery extends Component {
    render() {
        return (
            <section id="gallery" className="section section-gallery scrollspy">
                <div className="container">
                    <h4 className="center">
                        <span className="purple-text text-darken-1">Photo</span>Gallery
                    </h4>
                    <PhotoGallery />
                </div>
            </section>
        )
    }
}
