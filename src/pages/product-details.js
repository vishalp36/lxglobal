export default [{
        path: "/product-details/",
        exact: true,
        component: () =>
            import ("../components/product-details"),
    },
    {
        path: "/product-out-of-stock/",
        exact: true,
        component: () =>
            import ("../components/product-details/out-of-stock"),
    },
    {
        path: "/product-with-qty/",
        exact: true,
        component: () =>
            import ("../components/product-details/product-with-qty"),
    },
    {
        path: "/product-select-option/",
        exact: true,
        component: () =>
            import ("../components/product-details/product-select-option"),
    },
    {
        path: "/product-select-option-with-scroll/",
        exact: true,
        component: () =>
            import ("../components/product-details/product-select-option-with-scroll"),
    },
    {
        path: "/product-select-option-with-footer-shadow/",
        exact: true,
        component: () =>
            import ("../components/product-details/product-select-option-with-footer-shadow"),
    },
    {
        path: "/product-select-option-with-header-shadow/",
        exact: true,
        component: () =>
            import ("../components/product-details/product-select-option-with-header-shadow"),
    },
    {
        path: "/image-preview-modal/",
        exact: true,
        component: () =>
            import ("../components/product-details/image-preview-modal"),
    },
    {
        path: "/product-detail-popup/",
        exact: true,
        component: () =>
            import ("../components/product-details/product-detail-popup"),
    },
];