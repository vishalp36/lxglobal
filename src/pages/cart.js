export default [{
        path: '/cart/',
        exact: true,
        component: () =>
            import ('../components/cart'),
    },
    {
        path: '/empty-cart/',
        exact: true,
        component: () =>
            import ('../components/cart/empty-cart'),
    },
    {
        path: '/clear-cart/',
        exact: true,
        component: () =>
            import ('../components/cart/clear-cart-modal'),
    },
];