import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ImagePage from './ImagePage';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VoicePage from './VoicePage';
import FAQ from './FAQ';



const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([

    {
        path: "/",
        element: <App/>
    },
    {
        path: "/image",
        element: <ImagePage/>
    },
    {
        path: "/voice",
        element: <VoicePage/>
    },
    {
        path: "/about",
        element: <FAQ/>
    },
]);

root.render(
    <RouterProvider router={routes}/>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
