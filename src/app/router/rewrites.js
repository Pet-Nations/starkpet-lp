function createRouterRewrite() {
    return [
        {
            source: '/dashboard',
            destination: '/components/dashboard',
        },
        {
            source: '/node-sale',
            destination: '/components/node-sale',
        },
    ];
}
module.exports = createRouterRewrite;
