import Navbar from '../Module 20/React-Portfolio/src/components/Navbar';
import Home from '../Module 20/React-Portfolio/src/components/Home';
import Projects from '../Module 20/React-Portfolio/src/components/Projects';
import Resume from '../Module 20/React-Portfolio/src/components/Resume';
import Contact from '../Module 20/React-Portfolio/src/components/Contact';
import Footer from '../Module 20/React-Portfolio/src/components/Footer';
import { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

import './App.css';

const App = () => {
	const [selectedPage, setSelectedPage] = useState('home');

	return (
		<Router>
			<div className=''>
				<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
				<div className=''>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
					<Footer />
				</div>
			</div>
		</Router>
	);
};

export default App;
