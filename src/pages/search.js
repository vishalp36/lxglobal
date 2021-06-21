export default [{
        path: '/search-result/',
        exact: true,
        component: () =>
            import ('../components/search'),
    },
    {
        path: '/search-dropdown/',
        exact: true,
        component: () =>
            import ('../components/search/search-dropdown'),
    },
    {
        path: '/search-header-dropdown/',
        exact: true,
        component: () =>
            import ('../components/search/search-header-dropdown'),
    },
    {
        path: '/search-result-typing/',
        exact: true,
        component: () =>
            import ('../components/search/search-result-typing'),
    },
    {
        path: '/store-search/',
        exact: true,
        component: () =>
            import ('../components/individual-stores/store-search'),
    },
    {
        path: '/store-search-overlay/',
        exact: true,
        component: () =>
            import ('../components/individual-stores/store-search-overlay'),
    },
];