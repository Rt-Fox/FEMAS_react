import axios from "axios";

const $host = axios.create({
    baseURL: 'https://e-kondr01.ru/femas/'
})
export {
    $host
}
