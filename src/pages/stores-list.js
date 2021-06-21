export default [{
        path: '/store-listing/',
        exact: true,
        component: () =>
            import ('../components/store-listing'),
    },
    {
        path: '/store-final-category/',
        exact: true,
        component: () =>
            import ('../components/store-listing/store-final-category'),
    },
];