import axios from 'axios';
import callAPI from './config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getFeaturedGame() {
    const URL = 'players/landingpage';

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;

    return axiosResponse.data;
}

export async function getDetailVoucher(id: string) {
    const URL = `players/${id}/detail`;

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response;

    return axiosResponse.data.detail;
}

export async function getGameCategory() {
    const URL = 'players/category';

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;

    return axiosResponse.data;
}

export async function setCheckout(data: any) {
    const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

    return callAPI({
        url,
        method: 'POST',
        data,
        token: true,
    });
}

export async function getMemberOverview() {
    const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;

    return callAPI({
        url,
        method: 'GET',
        token: true,
    });
}

export async function getMemberTransactions(valueParams: string) {
    let params = '';
    if (valueParams === 'all') {
        params = '';
    } else {
        params = `?status=${valueParams}`;
    }
    const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;

    return callAPI({
        url,
        method: 'GET',
        token: true,
    });
}

export async function getTransactionsDetail(id: string, token: string) {
    const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;

    return callAPI({
        url,
        method: 'GET',
        serverToken: token,
    });
}

export async function updateProfile(data) {
    const url = `${ROOT_API}/${API_VERSION}/players/profile`;

    return callAPI({
        url,
        method: 'PUT',
        data,
        token: true,
    });
}
