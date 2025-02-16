const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    children: [

        {
            name: 'Login',
            path: '/auth/login',
            component: () => import('@/views/authentication/BoxedLogin.vue')
        },
        {
            name: 'Register',
            path: '/auth/register',
            component: () => import('@/views/authentication/BoxedRegister.vue')
        },
        {
            name: 'Logout',
            path: '/auth/logout',
            component: () => import('@/views/authentication/Logout.vue')
        }
    ]
};

export default AuthRoutes;
