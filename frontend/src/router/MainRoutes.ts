const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: () => import('@/views/dashboard/index.vue')
        },
        {
            name: 'Users',
            path: '/users',
            component: () => import('@/views/users/index.vue')
        },
    ]
};

export default MainRoutes;
