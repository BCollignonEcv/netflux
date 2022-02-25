import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.view.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/shows',
            name: 'shows',
            component: () =>
                import ('../views/Shows.view.vue'),
        },
        {
            path: '/show/:id',
            name: 'show',
            props: true,
            component: () =>
                import ('../views/Show.view.vue'),
        },
        {
            path: '/episode/:id',
            name: 'episode',
            props: true,
            component: () =>
                import ('../views/Episode.view.vue'),
        },
        {
            path: '/my-list',
            name: 'myList',
            component: () =>
                import ('../views/MyList.view.vue')
        },
    ]
})

router.beforeEach(() => {
    window.scrollTo(0, 0)
})

export default router