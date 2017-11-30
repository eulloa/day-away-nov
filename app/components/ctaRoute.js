import React from 'react';

const CTARoute = ({route, name}) => {
    return (
        <section className="route">
            <h1>{route} {name}</h1>
        </section>
    )
}

export default CTARoute;