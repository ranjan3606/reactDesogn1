import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SmoothScroll = () => {
    return(
        <section>
            <div className="navbar-fixed">
                <nav className="amber darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <AnchorLink href="!#" className="brand-logo">Hello</AnchorLink>
                            <AnchorLink href="!#" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </AnchorLink>
                            <ul className="right hide-on-med-and-down">
                                <li><AnchorLink href="/home">Home</AnchorLink></li>
                                <li><AnchorLink href="/search">Search</AnchorLink></li>
                                <li><AnchorLink href="/explore">Explore</AnchorLink></li>
                                <li><AnchorLink href="/adventure">Anventure</AnchorLink></li>
                                <li><AnchorLink href="/gallery">Gallery</AnchorLink></li>
                                <li><AnchorLink href="/contact">Contact</AnchorLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul className="hide-on-med-and-down sidenav">
                <li><AnchorLink href="/home">Home</AnchorLink></li>
                <li><AnchorLink href="/search">Search</AnchorLink></li>
                <li><AnchorLink href="/explore">Explore</AnchorLink></li>
                <li><AnchorLink href="/adventure">Anventure</AnchorLink></li>
                <li><AnchorLink href="/gallery">Gallery</AnchorLink></li>
                <li><AnchorLink href="/contact">Contact</AnchorLink></li>
            </ul>
        </section>
    )
}


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <SmoothScroll />
            </div>
        )
    }
}
