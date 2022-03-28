"use strict";
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 4305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c1": () => (/* binding */ getFeaturedGame),
/* harmony export */   "cT": () => (/* binding */ getDetailVoucher),
/* harmony export */   "uY": () => (/* binding */ getGameCategory),
/* harmony export */   "k1": () => (/* binding */ setCheckout),
/* harmony export */   "cO": () => (/* binding */ getMemberOverview),
/* harmony export */   "tr": () => (/* binding */ getMemberTransactions),
/* harmony export */   "oh": () => (/* binding */ getTransactionsDetail),
/* harmony export */   "ck": () => (/* binding */ updateProfile)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1609);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_api__WEBPACK_IMPORTED_MODULE_1__]);
_config_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ROOT_API = "https://hambahedon.herokuapp.com";
const API_VERSION = 'api/v1';
async function getFeaturedGame() {
    const URL = 'players/landingpage';
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    return axiosResponse.data;
}
async function getDetailVoucher(id) {
    const URL = `players/${id}/detail`;
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response;
    return axiosResponse.data.detail;
}
async function getGameCategory() {
    const URL = 'players/category';
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    return axiosResponse.data;
}
async function setCheckout(data) {
    const url = `${ROOT_API}/${API_VERSION}/players/checkout`;
    return (0,_config_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        url,
        method: 'POST',
        data,
        token: true
    });
}
async function getMemberOverview() {
    const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;
    return (0,_config_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        url,
        method: 'GET',
        token: true
    });
}
async function getMemberTransactions(valueParams) {
    let params = '';
    if (valueParams === 'all') {
        params = '';
    } else {
        params = `?status=${valueParams}`;
    }
    const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;
    return (0,_config_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        url,
        method: 'GET',
        token: true
    });
}
async function getTransactionsDetail(id, token) {
    const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;
    return (0,_config_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        url,
        method: 'GET',
        serverToken: token
    });
}
async function updateProfile(data) {
    const url = `${ROOT_API}/${API_VERSION}/players/profile`;
    return (0,_config_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        url,
        method: 'PUT',
        data,
        token: true
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;