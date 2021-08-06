import tokenService from './tokenService';

const BASE_URL = '/api/art/';

function saveArt(art) {
    // console.log(typeof(art), art.length);
    console.log(art);
    return fetch(BASE_URL + 'save', {
        method: 'POST',
        body: art,
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        console.log('res here ---->', res);
        return res.json()
    });
}

export default {
    saveArt
};