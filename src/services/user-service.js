import HttpSender from "./http-sender";

export default class UserService extends HttpSender {

    constructor() {
        super();
        this.apiRoute = '../test-user-data.json';
    }

    async get(id) {
        const all = await this.getAll();
        console.log(all);
        const result = all.find((x) => { return x.id === +id });
        console.log(result);
        return result;
    }

    async getAll() {
        var result = await this._get(this.apiRoute);
        console.log(result);
        return result.map(this._getUserModel);
    }

    _getUserModel = (model) => {
        return { ...model, fullName: `${model.firstName} ${model.lastName}` }
    }
}

