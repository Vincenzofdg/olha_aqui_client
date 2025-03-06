import React from 'react';
import Routes from './routes';
import GlobalProvider from './context/global';
import Loader from './components/Loader';

function App() {
    return (
        <GlobalProvider>
            <Routes />
            <Loader />
        </GlobalProvider>
    );
}

export default App;
