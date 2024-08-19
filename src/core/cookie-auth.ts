import type {UserProvider} from "@/core/auth";


export const cookieUsername = {
    username: null
}

export const cookieUserProvider: UserProvider = {
    getUser: () => Promise.resolve(cookieUsername.username)
}


