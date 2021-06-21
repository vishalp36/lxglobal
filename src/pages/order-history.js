export default [{
        path: "/order-history/",
        exact: true,
        component: () =>
            import ("../components/order-history"),
    },
    {
        path: "/order-history-details/",
        exact: true,
        component: () =>
            import ("../components/order-history/order-history-details"),
    },
];