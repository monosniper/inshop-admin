import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_ORIGIN_URL + '/api';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
});

$api.interceptors.response.use((config) => {
    return config;
}, async (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && err.config && !err.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await $server.post('/oauth/token', {
                'grant_type': 'refresh_token',
                'refresh_token': localStorage.getItem('refresh_token'),
                'client_id': process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID,
                'client_secret': process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET,
                'scope': '',
            });
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);

            await $api.request(originalRequest);
        } catch (e) {
            console.log('Not auth');
        }
    }

    throw err;
});

const $server = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_API_ORIGIN_URL
})

$server.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
});

$server.interceptors.response.use((config) => {
    return config;
}, async (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && err.config && !err.config._isRetry) {
        originalRequest._isRetry = true;
        // try {
        //     const response = await $server.post('/oauth/token', {
        //         'grant_type': 'refresh_token',
        //         'refresh_token': localStorage.getItem('refresh_token'),
        //         'client_id': process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID,
        //         'client_secret': process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET,
        //         'scope': '',
        //     });
        //     localStorage.setItem('access_token', response.data.access_token);
        //     localStorage.setItem('refresh_token', response.data.refresh_token);
        //
        //     await $api.request(originalRequest);
        // } catch (e) {
        //     console.log('Not auth');
        // }
    }

    throw err;
});

export const $apiRoutes = {
    files: {
        delete: '/files/delete',
    },
}

export {$api, $server};
