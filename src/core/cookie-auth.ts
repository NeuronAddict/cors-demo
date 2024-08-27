import type {GenericUser, UserProvider} from "@/core/auth";
import {AuthType} from "@/core/auth";


export const cookieUserProvider: UserProvider = {
    getUser: () => Promise.resolve({username: localStorage.getItem("user")} as GenericUser),
    authType: AuthType.Cookie
}
