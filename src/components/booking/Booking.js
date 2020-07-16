import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/js/materialize'
import './Booking.css'

export default class componentName extends Component {
    render() {
        return (
            <section  className="section section-book purple darken-2 white-text center">
                <div className="container">
                    <div className="row">
                        <div className="col s12 center">
                            <a href="!#" className="btn btn-large waves-effect white purple-text text-darken-3">
                                <i className="material-icons left">send</i>Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
