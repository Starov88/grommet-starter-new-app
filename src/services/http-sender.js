export default class HttpSender {

    apiRoute = ''

    _regExForId = /\/([0-9]*)\/$/;

    _baseApiUrl = '';

    _options = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'cors'
    }

    async _get(query) {
        const url = this._getUrl(query);
        var response = await fetch(url, this._options)
            .catch((err) => {
                this._errorHandler(url, err);
            });
        if (!response.ok) {
            return this._errorStatusHandler(url, response);
        }
        return response.json();
    }

    async _post(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }

    extractId(url) {
        return url.match(this._regExForId)[1];
    }

    _errorHandler(url, err) {
        throw new Error(`Could not fetch ${url}, Error: ${err}`);
    }

    _errorStatusHandler(url, response) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    _getUrl(query) {
        return `${this._baseApiUrl}${query}`
    }
}