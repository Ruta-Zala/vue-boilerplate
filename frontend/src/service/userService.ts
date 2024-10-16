import HttpService from "./http/httpService";

class UserService extends HttpService {
    async getAllUsers() {
        return await this.get({ path: "/api/users" })
    }
}

export default UserService