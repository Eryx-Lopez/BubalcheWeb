import { 
    HomePage,
    AboutUsPage,
    CartPage,
    DesignsPage,
    OrgPage
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
    },
    {
        path: '/org',
        element: <OrgPage/>
    },
    {
        path: '/about',
        element: <AboutUsPage/>
    }
]