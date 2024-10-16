
import LocalStorageService from './localstorage';
import { LS_USERS, LS_USER } from './const';

class AuthServiceByLS {
    usersLs;
    activeUserLs;
    users

    constructor() {
        this.usersLs = new LocalStorageService(LS_USERS);
        this.activeUserLs = new LocalStorageService(LS_USER);
        this.users = this.usersLs.getItem();
    }

    loginUser(data: any) {
        const user = this.isUserExist(data)
        console.log('data', data);
        console.log('user', user);
        if (!user) {
            throw Error("User not exists!")
        }
        this.activeUserLs.setItem(user);
    }

    isUserExist(data: any) {
        return this.users?.list?.find((item: any) => item.email === data.email);
    }

    registerUser(data: any) {
        if (this.isUserExist(data)) {
            throw Error("User already exists!")
        }
        const users = this.usersLs.getItem();
        if (!users.list) {
            users.list = [];
        }
        users.list.push(data);
        this.activeUserLs.setItem(data);
        this.usersLs.setItem(users);

    }
}

export default AuthServiceByLS