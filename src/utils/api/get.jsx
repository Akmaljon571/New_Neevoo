import { host } from "../../context/start"

export const GET = (api, token = false) => {
    if (token) {
        return fetch(host + api, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    } else {
        return fetch(host + api)
    }
}