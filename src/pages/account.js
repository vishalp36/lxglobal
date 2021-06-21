export default [{
        path: "/account-details/",
        exact: true,
        component: () =>
            import ("../components/account-details"),
    },
    {
        path: "/account-details-with-newsletter/",
        exact: true,
        component: () =>
            import ("../components/account-details/account-details-with-newsletter"),
    },
    {
        path: "/account-addresses/",
        exact: true,
        component: () =>
            import ("../components/account-details/account-addresses"),
    },
];