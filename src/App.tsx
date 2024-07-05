import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ToastProvider from './components/ToastProvider';

function App() {
    return (
        <ToastProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </ToastProvider>
    );
}

export default App;
