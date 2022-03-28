"use strict";
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 1609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ callAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function callAPI({ url , method , data , token , serverToken  }) {
    let headers = {};
    if (serverToken) {
        headers = {
            Authorization: `Bearer ${serverToken}`
        };
    } else if (token) {
        const tokenCookies = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('token');
        if (tokenCookies) {
            const jwtToken = atob(tokenCookies);
            headers = {
                Authorization: `Bearer ${jwtToken}`
            };
        }
    }
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        url,
        method,
        data,
        headers
    }).catch((err)=>err.response
    );
    if ((response === null || response === void 0 ? void 0 : response.status) > 300) {
        const res = {
            error: true,
            msessage: response.data.message,
            data: null
        };
        return res;
    }
    const { length  } = Object.keys(response.data);
    const res = {
        error: false,
        msessage: `success`,
        data: length > 1 ? response.data : response.data.data
    };
    return res;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;