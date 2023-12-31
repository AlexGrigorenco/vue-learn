
import axios from "axios";

export async function getPosts(amount, page) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${amount}&_page=${page}`);
        return response.data;
    }
    catch (err){
        alert('Ошибка при получении постов! обновите страницу и попробуйте ещё раз...')
    }
}

export async function getPost(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    }
    catch (err){
        alert('Ошибка при получении постоа! обновите страницу и попробуйте ещё раз...')
    }
}