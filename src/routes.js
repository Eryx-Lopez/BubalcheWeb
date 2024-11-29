import { HomePage, AboutUsPage } from './containers';

export const routes = [
    { 
        path: '/',
        element: <HomePage/>
    },
    {
        path: 'about-us',
        element: <AboutUsPage/>
    }
]