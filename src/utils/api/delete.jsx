import { host } from "../../context/start"

export const DELETE = (api, token = false) => {
    if (token) {
        return fetch(host + api, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    } else {
        return fetch(host + api, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
}