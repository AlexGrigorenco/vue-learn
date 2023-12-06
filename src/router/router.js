import Main from '@/pages/Main';
import Pagination from '@/pages/Pagination';
import About from '@/pages/About';
import Post from '@/pages/Post';
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
    },
    {
        path: '/post/:id',
        component: Post,
    },    
]

export const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL),
    }
)