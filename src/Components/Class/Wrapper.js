import React, { Component } from 'react';

import Content from './Content';

export default class Wrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<p>Wrapper</p>
				<Content />
			</div>
		);
	}
}
