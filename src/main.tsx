import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from './app/provider/ReduxProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ReduxProvider>
				<App />
			</ReduxProvider>
		</BrowserRouter>
	</StrictMode>,
);
