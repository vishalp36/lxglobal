export default [{
        path: "/home/",
        exact: true,
        component: () =>
            import ("../components/home/index"),
    },
    {
        path: "/home-with-video/",
        exact: true,
        component: () =>
            import ("../components/home/home-banner-with-animation"),
    },
];