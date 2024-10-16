const LandingRoutes = {
    path: '/',
    component: () => import('@/layouts/blank/LandingBlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    children: [
        {
            name: 'Home',
            path: '/',
            component: () => import('@/views/landing/index.vue')
        },
    ]
};

export default LandingRoutes;
