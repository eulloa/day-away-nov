import React from 'react';
import { Link } from 'react-router-dom';

const AllRoutes = ({route, name}) => {
    return (
        <Link to={`route/${route}`}>
            <section className="route">
                <h1>{route} {name}</h1>
            </section>
        </Link>
    )
}

export default AllRoutes;