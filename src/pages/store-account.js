export default [{
        path: '/store-profile/',
        exact: true,
        component: () =>
            import ('../components/store-account'),
    },
    {
        path: '/store-orders/',
        exact: true,
        component: () =>
            import ('../components/store-account/store-orders'),
    },
    {
        path: '/store-orders-details/',
        exact: true,
        component: () =>
            import ('../components/store-account/store-order-details'),
    },
    {
        path: '/store-orders-details-accepted/',
        exact: true,
        component: () =>
            import ('../components/store-account/store-order-details-accepted'),
    },
    {
        path: '/store-inventory/',
        exact: true,
        component: () =>
            import ('../components/store-account/store-inventory'),
    },
    {
        path: '/store-inventory-with-sub-cat/',
        exact: true,
        component: () =>
            import ('../components/store-account/store-inventory-with-sub-list'),
    },
    {
        path: '/store-inventory-item/',
        exact: true,
        component: () =>
            import ('../components/store-account/store-inventory-item'),
    },
];