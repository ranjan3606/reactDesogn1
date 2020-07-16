import React, { Component } from 'react'
import Resort1 from '../../images/shopping.jpg'
import Resort2 from '../../images/mall.jpg'
import Resort3 from '../../images/coffee.jpg'
import {HashLink as Link} from 'react-router-hash-link'


export default class Adventure extends Component {
    render() {
        return (
            <section id="adventure" className="section section-adventure grey lighten-4 center">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="purple-text darken-1">AirPnP</span>Adventure
                        </h4>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img className="responsive-img" src={Resort1} alt="Cuba" />
                                    <span className="card-title">Cuba</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light purple">
                                        <i className="material-icons">add</i>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons">close</i></span>
                                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img className="responsive-img" src={Resort2} alt="Hawali" />
                                    <span className="card-title">Hawali</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light purple">
                                        <i className="material-icons">add</i>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons">close</i></span>
                                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img className="responsive-img" src={Resort3} alt="Costa Rica" />
                                    <span className="card-title">Costa Rica</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light purple">
                                        <i className="material-icons">add</i>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons">close</i></span>
                                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
