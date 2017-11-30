import React from 'react';

import CTARoute from './ctaRoute'

import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            routes: []
        }
    }

    fetchData = () => {
        axios.get('http://www.ctabustracker.com/bustime/api/v2/getroutes?key=mfZVaeUXL5HctzzxpFGyd5FNX&format=json')
            .then((res) => {
				console.log(res.data['bustime-response'].routes);
                this.setState({
                    isLoading: false,
                    routes: res.data['bustime-response'].routes
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        this.fetchData();
    }

    render() {
        return (
            <div className="routes">
                {
                    this.state.routes && this.state.routes.map((route, i) =>
                        <CTARoute route={route.rt} name={route.rtnm} key={route.rt} />)
                }
            </div>
        );
    }
}

export default App;