export default [{
        path: '/styleguide/',
        exact: true,
        component: () =>
            import ('../components/styleguide'),
    },
    {
        path: '/ui-components/',
        exact: true,
        component: () =>
            import ('../components/styleguide/ui-components'),
    },
    {
        path: '/top-nav/',
        exact: true,
        component: () =>
            import ('../components/styleguide/top-nav'),
    },
    {
        path: '/top-nav-with-login/',
        exact: true,
        component: () =>
            import ('../components/styleguide/top-nav-with-login'),
    },
    {
        path: '/top-nav-with-search-tag/',
        exact: true,
        component: () =>
            import ('../components/styleguide/top-nav-with-search-tag'),
    },
    {
        path: '/top-nav-with-megamenu/',
        exact: true,
        component: () =>
            import ('../components/styleguide/header-with-megamenu'),
    },
    {
        path: '/top-nav-with-store-megamenu/',
        exact: true,
        component: () =>
            import ('../components/styleguide/header-with-store-megamenu'),
    },
    {
        path: '/bottom-nav/',
        exact: true,
        component: () =>
            import ('../components/bottom-nav/'),
    },
];