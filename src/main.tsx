import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from './app/provider/ReduxProvider.tsx';
import { AuthProvider } from './app/provider/AuthProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ReduxProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ReduxProvider>
		</BrowserRouter>
	</StrictMode>,
);
