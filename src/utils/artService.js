import tokenService from './tokenService';

const BASE_URL = '/api/art/';

export function saveArt(art) {
    return fetch(BASE_URL + 'save', {
        method: 'POST',
        body: art,
        headers: {
            // ---- Need to look at content-type if I want to compress the files ----
            // Look at content-type plain/text  or text/xml

            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        return res.json();
    });
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}