import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AllRoutes from './allRoutes'
import BusRoute from './busRoute';

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
                this.setState({
                    isLoading: false,
                    routes: res.data['bustime-response'].routes
                });
            })
            .catch((e) => {
                this.setState({
                    isLoading: false
                })
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
            <main>
                <Router>
                    <Switch>
                        <Route path={"/route/:routeid"} render={({match}) => <BusRoute match={match} /> } />
                        <div className="routes">
                            <h1>Choose a route</h1>
                            {
                                this.state.routes && this.state.routes.map((route, i) =>
                                    <AllRoutes route={route.rt} name={route.rtnm} key={route.rt} />)
                            }
                        </div>
                    </Switch>
                </Router>
            </main>
        );
    }
}

export default App;