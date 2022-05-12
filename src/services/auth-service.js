import HttpSender from "./http-sender";

export default class AuthService extends HttpSender {

    constructor() {
        super();
        this.apiRoute = "https://localhost:5001/v1/auth";
    }

    async login(login, password) {
        return await this._post(`${this.apiRoute}/login`, { login, password, clientType: "web", deviceId: `web-${login}` });
    }

    async registration(model) {
        return await this._post(`${this.apiRoute}/registration`,
            {
                ...model,
                clientType: "web", deviceId: `web-${model.email}`
            });
    }

    async sendConfirmationCode(email) {
        console.log(email);
        return await this._post(`${this.apiRoute}/send-code`, { entity: email, entityType: "email" });
    }

    async checkConfirmationCode(email, confirmationCode) {
        return await this._post(`${this.apiRoute}/check-code`, { entity: email, entityType: "email", code: confirmationCode });
    }

    // async login(login, password) {
    //     const all = await userService.getAll();
    //     console.log(all);
    //     const result = all.find((x) => { return x.email === login && x.password === password });
    //     console.log(result);
    //     return this._getResponse(result);
    // }
}

