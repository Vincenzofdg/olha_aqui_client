import React from "react";
import Routes from "./routes";
import GlobalProvider from "./context/global";
import Loader from "./components/Loader";

import RNBlobUtil from 'react-native-blob-util';


RNBlobUtil.config({
    trusty: true, // Habilita SSL confiável
});


function App() {
    return (
        <GlobalProvider>
            <Routes />
            <Loader />
        </GlobalProvider>
    );
}

export default App;
