import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import CreatedAt from '../pages/createdAt/CreatedAt';
import ProtectedRoute from './provider/ProtectedRoute';
import Basket from '@/pages/basket/Basket';
import Favorite from '@/pages/favorite/Favorite';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='product/:id' element={<About />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route
						path='basket'
						element={
							<ProtectedRoute>
								<Basket />
							</ProtectedRoute>
						}
					/>
					<Route path='favorites' element={<Favorite />} />
					<Route
						path='dashboard'
						element={<ProtectedRoute children={<Dashboard />} />}
					/>
					<Route path='create' element={<CreatedAt />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
