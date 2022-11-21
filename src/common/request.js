import axios from "axios"
import { baseURL } from "../baseURL";

const Instance = axios.create({
    // baseURL: 'http://localhost:3004',
    baseURL: "http://localhost:3000",
    timeout: 3000,
});

export const SendRequest = (config) => {
    return Instance.request(config);
}

export const GetRequest = (path) => {
    return SendRequest({
        url: path,
        method: 'GET'
    })
}

export const postRequest = (path, data) => {
    return SendRequest({
        url: path,
        method: "POST",
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
}

export const deleteRequest = (path, id) => {
    return SendRequest({
        url: path + id,
        method: "DELETE"
    })
}


export const updateProduct = (path, ItemId, data) => {
    const { id } = ItemId
    return SendRequest({
        url: path + id,
        method: 'PUT',
        data: JSON.stringify(ItemId),
        headers: { 'Content-Type': 'application/json' }
    })
}
