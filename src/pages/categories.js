export default [{
        path: "/categories/",
        exact: true,
        component: () =>
            import ("../components/categories/index"),
    },
    {
        path: "/categories/categories-with-address",
        exact: true,
        component: () =>
            import ("../components/categories/categories-with-address"),
    },
    {
        path: "/categories/sub-categories/",
        exact: true,
        component: () =>
            import ("../components/categories/sub-categories"),
    },
    {
        path: "/categories/sub-categories-filter-applied/",
        exact: true,
        component: () =>
            import ("../components/categories/sub-categories-filter-applied"),
    },
    {
        path: "/categories/sub-categories-open-dropdown/",
        exact: true,
        component: () =>
            import ("../components/categories/sub-categories-open-dropdown"),
    },
    {
        path: "/categories/final-category/",
        exact: true,
        component: () =>
            import ("../components/categories/final-category"),
    },
    {
        path: "/categories/final-category-scroll/",
        exact: true,
        component: () =>
            import ("../components/categories/final-category-scroll"),
    },
    {
        path: "/categories/category-filter/",
        exact: true,
        component: () =>
            import ("../components/category-filter-modal"),
    },
    {
        path: "/categories/open-stores-accordian/",
        exact: true,
        component: () =>
            import ("../components/category-filter-modal/open-stores-accordian"),
    },
    {
        path: "/categories/open-price-accordian/",
        exact: true,
        component: () =>
            import ("../components/category-filter-modal/open-price-accordian"),
    },
    {
        path: "/categories/sub-categories-collapsed",
        exact: true,
        component: () =>
            import ("../components/categories/sub-categories-collapsed"),
    },
    {
        path: "/categories/sub-categories-collapsed-expanded",
        exact: true,
        component: () =>
            import ("../components/categories/sub-categories-collapsed-expanded")
    },
    {
        path: "/my-favourites/",
        exact: true,
        component: () =>
            import ("../components/categories/my-favourites")
    },
];