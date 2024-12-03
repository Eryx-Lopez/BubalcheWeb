import { 
    HomePage,
    AboutUsPage,
    CartPage,
    DesignsPage
} from './containers';

export const routes = [
    { 
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/designs',
        element: <DesignsPage/>
    },
    {
        path: '/cart',
        element: <CartPage/>
    }
]