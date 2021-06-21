export default [{
        path: '/select-new-address/',
        exact: true,
        component: () =>
            import ('../components/delivery-address'),
    },
    {
        path: '/select-new-address-typing/',
        exact: true,
        component: () =>
            import ('../components/delivery-address/address-typing'),
    },
    {
        path: '/confirm-address/',
        exact: true,
        component: () =>
            import ('../components/delivery-address/confirm-address'),
    },
    {
        path: '/not-available-address/',
        exact: true,
        component: () =>
            import ('../components/delivery-address/not-available-address'),
    },
    {
        path: '/address-non-signed-in/',
        exact: true,
        component: () =>
            import ('../components/delivery-address/address-non-signed-in'),
    },

];