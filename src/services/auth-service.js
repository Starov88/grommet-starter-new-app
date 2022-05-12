import HttpSender from "./http-sender";
import { userService } from ".";

export default class AuthService extends HttpSender {

    async login(login, password) {
        const all = await userService.getAll();
        console.log(all);
        const result = all.find((x) => { return x.email === login && x.password === password });
        console.log(result);
        return this._getResponse(result);
    }
}

