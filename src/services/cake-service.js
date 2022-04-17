import HttpSender from "./http-sender";

export default class CakeService extends HttpSender {

    constructor() {
        super();
        this.apiRoute = './test-data.json';
    }

    async get(id) {
        return this._getCakeModel(await this._get(`${this.apiRoute}${id}`));
    }

    async getAll(filterObj) {
        var result = await this._get(this.apiRoute);
        return this._filterData(result, filterObj).map(this._getCakeModel);
    }

    _getCakeModel = (model) => {
        return model;
    }

    _filterData(data, filterObj) {
        if (!data) return [];
        if (!filterObj) return data;

        const filterKeys = Object.keys(filterObj);
        if (filterKeys.length === 0) return data;

        return data.filter((item) => {
            var res = true;
            filterKeys.forEach((key) => {
                if (typeof item[key] === typeof [] && item[key].length) {
                    if (!(item[key].some((elem) => filterObj[key].includes(elem)))) {
                        res = false;
                        return;
                    }
                }
                else {
                    if (!filterObj[key].includes(item[key])) {
                        res = false;
                        return;
                    }
                }

            })
            return res;
        });
    }
}

