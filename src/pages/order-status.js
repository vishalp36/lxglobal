export default [{
        path: '/payment-error/',
        exact: true,
        component: () =>
            import ('../components/order-status/payment-error-modal'),
    },
    {
        path: '/order-status/',
        exact: true,
        component: () =>
            import ('../components/order-status'),
    },
];