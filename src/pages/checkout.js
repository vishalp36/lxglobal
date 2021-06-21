export default [{
        path: '/checkout/',
        exact: true,
        component: () =>
            import ('../components/checkout'),
    },
    {
        path: '/checkout-with-fields-expanded/',
        exact: true,
        component: () =>
            import ('../components/checkout/checkout-with-fields-expanded'),
    },
    {
        path: '/checkout-with-store-pickup/',
        exact: true,
        component: () =>
            import ('../components/checkout/checkout-with-store-pickup'),
    },
    {
        path: '/checkout-with-info-added/',
        exact: true,
        component: () =>
            import ('../components/checkout/checkout-info-added'),
    },
    {
        path: '/checkout-non-signed-in/',
        exact: true,
        component: () =>
            import ('../components/checkout/checkout-non-signed-in'),
    },
    {
        path: '/checkout-non-signed-in-info-added/',
        exact: true,
        component: () =>
            import ('../components/checkout/checkout-non-signed-in-info-added'),
    },
    {
        path: '/checkout-with-scroll-header/',
        exact: true,
        component: () =>
            import ('../components/checkout/checkout-with-fields-expanded-mobile-header'),
    },


];