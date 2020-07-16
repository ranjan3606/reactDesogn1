import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="section section-contact scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card-panel purple white-text center">
                                <i className="material-icons">email</i>
                                <h5>AirPnP Address</h5>
                                <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                            </div>
                            <ul className="collection with-header">
                                <li className="collection-header">
                                    <h4>Main Office</h4>
                                </li>
                                <li className="collection-item">AirPnP</li>
                                <li className="collection-item"><i className="fas fa-map-marker-alt"></i>123 checkout delhi</li>
                                <li className="collection-item"><i className="fas fa-phone"></i>1234567898</li>
                                <li className="collection-item"><i className="fas fa-envelope-square"></i>info@info.com</li>
                            </ul>
                        </div>
                        <div className="col s12 m6">
                            <div className="card-panel grey lighten-3">
                                <h5>Please fill out this from </h5>
                                <form>
                                    <div className="input-field">
                                        <input type="text" id="name" className="validate" />
                                        <label for="name" className="purple-text">Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="email" id="email" className="validate" />
                                        <label for="email" className="purple-text">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="phone" className="validate" />
                                        <label for="phone" className="purple-text">Phone</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="message" className="materialize-textarea" data-length="120" />
                                        <label for="message" className="purple-text">Message</label>
                                    </div>
                                    <input type="submit" value="submit" className="btn purple" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
