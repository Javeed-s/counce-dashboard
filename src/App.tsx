import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home-page/home';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => (
	<Provider store={store}>


	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="users/:id" element={<Users />} /> */}
		</Routes>
	</BrowserRouter>
	</Provider >
);
export default App;