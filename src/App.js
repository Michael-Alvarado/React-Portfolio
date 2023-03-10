import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

import './input.css';

const App = () => {
	const [selectPage, setSelectedPage] = useState('home');

	return (
		<Router>
			<div className='bg-charcoal'>
				<Navbar selectedPage={selectPage} setSelectedPage={setSelectedPage} />
				<div className='w-4/5 mx-auto md:h-full'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
