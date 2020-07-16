import React, { Component } from 'react'
import 'jquery/dist/jquery'
import 'materialize-css/dist/js/materialize'
import {Link} from 'react-router-dom'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <section className="section section-footer  blue darken-3 white-text center scrollspy">
                <div className="row">
                    <div className="col s12">
                        <h4>Follow Us</h4>
                        <p>Check out social media for special offers</p>
                        <Link to="https://facebook.com" target="blank" className="white-text">
                            <i className="fab fa-facebook fa-3x"></i>
                        </Link>
                        <Link to="https://facebook.com" target="blank" className="white-text">
                            <i className="fab fa-twitter fa-3x"></i>
                        </Link>
                        <Link to="https://facebook.com" target="blank" className="white-text">
                            <i className="fab fa-instagram fa-3x"></i>
                        </Link>
                        <Link to="https://facebook.com" target="blank" className="white-text">
                            <i className="fab fa-pinterest fa-3x"></i>
                        </Link>
                        <Link to="https://facebook.com" target="blank" className="white-text">
                            <i className="fab fa-google-plus fa-3x"></i>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}
