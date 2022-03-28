import axios, { AxiosRequestConfig } from 'axios';
import cookies from 'js-cookie';

interface callAPIProps extends AxiosRequestConfig {
    token?: boolean;
    serverToken?: string;
}

export default async function callAPI({
    url,
    method,
    data,
    token,
    serverToken,
}: callAPIProps) {
    let headers = {};

    if (serverToken) {
        headers = {
            Authorization: `Bearer ${serverToken}`,
        };
    } else if (token) {
        const tokenCookies = cookies.get('token');
        if (tokenCookies) {
            const jwtToken = atob(tokenCookies);
            headers = {
                Authorization: `Bearer ${jwtToken}`,
            };
        }
    }

    const response = await axios({
        url,
        method,
        data,
        headers,
    }).catch((err) => err.response);

    if (response?.status > 300) {
        const res = {
            error: true,
            msessage: response.data.message,
            data: null,
        };
        return res;
    }
    const { length } = Object.keys(response.data);

    const res = {
        error: false,
        msessage: `success`,
        data: length > 1 ? response.data : response.data.data,
    };

    return res;
}
