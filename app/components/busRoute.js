import React from 'react';
import axios from 'axios';

class BusRoute extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			route: this.props.match.params.routeid
		}
	}

	fetchDirections = (route) => {
		axios.get(`http://www.ctabustracker.com/bustime/api/v2/getdirections?key=mfZVaeUXL5HctzzxpFGyd5FNX&rt=${route}&format=json`)
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	componentDidMount() {
		this.fetchDirections(this.state.route);
	}

	render() {
		return (
			<div>
				<h1>Which way are you going?</h1>
				<span>Route component: {this.state.route}</span>
			</div>
		);
	}
}

export default BusRoute;