import Main from '@/pages/Main';
import Pagination from '@/pages/Pagination';
import About from '@/pages/About';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/pagination',
        component: Pagination,
    },
    {
        path: '/about',
        component: About,
    }
]

export const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL),
    }
)