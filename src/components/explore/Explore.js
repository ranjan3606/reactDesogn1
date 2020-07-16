import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';


export default class Explore extends Component {
    render() {
        return (
            <section id="explore" className="section section-icons grey lighten-4 center">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="purple-text darken-1">Explore</span>AirPnp
                        </h4>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium purple-text">hotel</i>
                                <h4>Hotels</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium purple-text">restaurant</i>
                                <h4>Restaurent</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium purple-text">local_cafe</i>
                                <h4>Coffee</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium purple-text">shopping_basket</i>
                                <h4>Shopping</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
