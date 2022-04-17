import HttpSender from "./http-sender";

export default class FilterService extends HttpSender {

    constructor() {
        super();
        this.apiRoute = './test-filter-data.json';
    }

    async getAll() {
        return await this._get(this.apiRoute);
    }
}

