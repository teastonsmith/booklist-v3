import React from 'react';

import './CSS/reset.css';
import './CSS/index.css';
import './CSS/App.css';

import Header from './Components/Function/Header';
import Wrapper from './Components/Class/Wrapper';
import Footer from './Components/Function/Header';

export default function App() {
	return (
		<div className='App'>
			<Header />
			<Wrapper />
			<Footer />
		</div>
	);
}
