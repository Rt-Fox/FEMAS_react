import React from 'react';
import {useHistory} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const About = () => {
    const history = useHistory();
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>О нас</h1>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Breadcrumbs crumbs={history.location.pathname.split('/')}/>
                </div>
            </div>
        </div>
    );
};

export default About;