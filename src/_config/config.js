const uris = {
    api: process.env.API_URL? process.env.API_URL : 'http://localhost:3000/api/v0.1.0/'
};

export function ApiUri(path='') {
    if (path !== '') {
        return uris.api+path
    } else {
        return uris.api
    }
}