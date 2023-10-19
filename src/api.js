
import axios from "axios";

export async function getPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        return response.data;
    }
    catch (err){
        alert('Ошибка при получении постов! обновите страницу и попробуйте ещё раз...')
    }
}