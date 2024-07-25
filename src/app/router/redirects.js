function createRouterRedirect() {
    return [
        {
            source: '/components/dashboard',
            destination: '/404',
            permanent: false,
        },
    ];
}
module.exports = createRouterRedirect;