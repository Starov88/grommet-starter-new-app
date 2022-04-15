import HttpSender from "./http-sender";

export class CakeService extends HttpSender {

    constructor() {
        super();
        this.apiRoute = '';
    }

    async get(id) {
        return this._getCakeModel(await this._get(`${this.apiRoute}${id}`));
    }

    async getAll(filterObj) {
        var result = await this._get(this.apiRoute);
        if (filterObj) {
            result = this._filterData(result, filterObj);
        }
        return result.map(this._getCakeModel);
    }

    _getCakeModel = (model) => {
        return model;
    }

    _filterData(data, filterObj) {
        if (!data) return [];
        return data.filter((item) => {
            if (item.name === filterObj.name) return true;
            return false;
        })
    }
}

