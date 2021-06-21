export default [
    {
    path: '/individual-store/',
    exact: true,
    component: () =>
        import ('../components/individual-stores'),
    }, 
    {
        path: '/store-details/',
        exact: true,
        component: () =>
            import ('../components/individual-stores/store-details'),
    },
];