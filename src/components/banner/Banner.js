import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import Imgone from '../../images/one.jpg'
import Imgtwo from '../../images/two.jpg'
import Imgthree from '../../images/three.jpg'
import {Link} from 'react-router-dom'

export default class Banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
                <ul className="slides">
                    <li>
                        <img src={Imgone} alt="Vacation" />
                        <div className="caption center-align">
                            <h2>Pick Your Destation</h2>
                            <h5 className="light gray-text text-lighten-3 hide-on-small-only">Hello worldd delhi</h5>
                            <Link to="#" className="btn btn-large purple">More</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgtwo} alt="Vacation" />
                        <div className="caption left-align">
                            <h2>Pick Your Destation</h2>
                            <h5 className="light gray-text text-lighten-3 hide-on-small-only">Hello worldd delhi</h5>
                            <Link to="#" className="btn btn-large purple">More</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgthree} alt="Vacation" />
                        <div className="caption right-align">
                            <h2>Pick Your Destation</h2>
                            <h5 className="light gray-text text-lighten-3 hide-on-small-only">Hello worldd delhi</h5>
                            <Link to="#" className="btn btn-large purple">More</Link>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}
