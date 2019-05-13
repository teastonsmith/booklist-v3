import React, { Component } from 'react';
import axios from 'axios';

import Content from './Content';

export default class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
		};
	}

	handleCreate = book => {
		axios
			.post(`/api/books`, book)
			.then(res => {
				this.setState({
					books: res.data,
				});
			})
			.catch(err =>
				console.log('An error has occurred while fetching the book', err),
			);
	};

	componentDidMount() {
		axios
			.get(`api/books`)
			.then(res => {
				this.setState({
					books: res.data,
				});
			})
			.catch(err =>
				console.log('An error has ocurred while fetching the book', err),
			);
	}

	handleUpdate = book => {
		axios
			.put(`/api/concerts/${book.id}`, book)
			.then(res => {
				this.setState({
					books: res.data,
				});
			})
			.catch(err =>
				console.log('An error ocurred while updating the book', err),
			);
	};

	handleDelete = book => {
		axios
			.delete(`/api/books/${book.id}`)
			.then(res => {
				this.setState({
					books: res.data,
				});
			})
			.catch(err =>
				console.log('An error ocurred while deleing the books', err),
			);
	};

	render() {
		return (
			<div>
				<p>Wrapper</p>
				<Content />
			</div>
		);
	}
}
