export default [{
        path: '/deliver-anything/',
        exact: true,
        component: () =>
            import ('../components/deliver-anything'),
    },
    {
        path: '/deliver-anything-cart/',
        exact: true,
        component: () =>
            import ('../components/deliver-anything/deliver-anything-cart'),
    },

];