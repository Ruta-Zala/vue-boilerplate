import type { UserType } from "../types/index";
import HttpService from "./http/httpService";

class AuthService extends HttpService {
    async loginUser(payload: UserType) {
        return await this.post({ path: "/api/auth/login", payload })
    }

    async registerUser(payload: UserType) {
        return await this.post({ path: "/api/auth/register", payload })
    }

    async validateToken(token) {
        return await this.post({ path: "/api/auth/refresh-token", payload: { refreshToken: token } })
    }


}

export default AuthService