import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import CreatedAt from '../pages/createdAt/CreatedAt';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/product:id' element={<About />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/create' element={<CreatedAt />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
