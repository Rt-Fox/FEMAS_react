import {$host} from "./index"

export const getProducts = async (type) => {
    const {data} = await $host.get('/products/' + type)
    return data
}
export const getProductItem = async (uuid) => {
    const {data} = await $host.get('/products/' + uuid)
    return data
}
export const getCategory = async () => {
    const {data} = await $host.get('/categories')
    return data
}

export const postOrders = async (body) => {
    const {data} = await $host.post('/orders',body)
    return data
}
export const getPromo = async () => {
    const {data} = await $host.get('/promo/active')
    return data
}
