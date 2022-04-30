import HttpSender from "./http-sender";

export default class CakeService extends HttpSender {

    constructor() {
        super();
        this.apiRoute = '../test-data.json';
    }

    async get(id) {
        const all = await this.getAll();
        console.log(all);
        const result = this._getCakeModel(all.find((x) => { return x.id === +id }));
        console.log(result);
        return result;
    }

    async getAll(filterObj) {
        var result = await this._get(this.apiRoute);
        console.log("cake - getAll");
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
        console.log("cake - _filterData");
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

