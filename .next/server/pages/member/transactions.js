"use strict";
(() => {
var exports = {};
exports.id = 645;
exports.ids = [645];
exports.modules = {

/***/ 9432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ButtonTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


function ButtonTab(props) {
    const { label , active , onClick  } = props;
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'btn btn-status rounded-pill text-sm me-3': true,
        'btn-active': active
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        onClick: onClick,
        className: className,
        children: label
    }));
};


/***/ }),

/***/ 5403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _Overview_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4203);



function TableRow(props) {
    const { title , categorie , item , price , status , image , id  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        "data-category": "pending",
        className: "align-middle",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Overview_TableRow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: title,
                categorie: categorie,
                item: item,
                price: price,
                status: status,
                image: image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: `/member/transactions/${id}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "btn btn-status rounded-pill text-sm",
                        children: "Details"
                    })
                })
            })
        ]
    }));
};


/***/ }),

/***/ 9901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TransactionContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4305);
/* harmony import */ var _ButtonTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9432);
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_player__WEBPACK_IMPORTED_MODULE_4__]);
_services_player__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function TransactionContent() {
    const { 0: datas , 1: setData1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: tab , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all');
    const { 0: total , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const getMemberOverviewApi = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (status)=>{
        const response = await (0,_services_player__WEBPACK_IMPORTED_MODULE_4__/* .getMemberTransactions */ .tr)(status);
        if (response.error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(response.msessage);
        } else {
            setData1(response.data.data);
            setTotal(response.data.total);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getMemberOverviewApi('all');
    }, []);
    const IMG = "https://hambahedon.herokuapp.com/uploads";
    const onTabClick = (value)=>{
        setTab(value);
        getMemberOverviewApi(value);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "main-wrapper",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "ps-lg-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-4xl fw-bold color-palette-1 mb-30",
                    children: "My Transactions"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-30",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg color-palette-2 mb-12",
                            children: "You’ve spent"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-5xl fw-medium color-palette-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_number_format__WEBPACK_IMPORTED_MODULE_2___default()), {
                                value: total,
                                prefix: "Rp. ",
                                displayType: "text",
                                thousandSeparator: ".",
                                decimalSeparator: ","
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mt-30 mb-20",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12 col-12 main-content",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "list_status_title",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonTab__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    onClick: ()=>onTabClick('all')
                                    ,
                                    label: "All Trx",
                                    active: tab === 'all'
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonTab__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    onClick: ()=>onTabClick('success')
                                    ,
                                    label: "Success",
                                    active: tab === 'success'
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonTab__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    onClick: ()=>onTabClick('pending')
                                    ,
                                    label: "Pending",
                                    active: tab === 'pending'
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonTab__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    onClick: ()=>onTabClick('failed')
                                    ,
                                    label: "Failed",
                                    active: tab === 'failed'
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "latest-transaction",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg fw-medium color-palette-1 mb-14",
                            children: "Latest Transactions"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "main-content main-content-table overflow-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                className: "table table-borderless",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("thead", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "",
                                                scope: "col",
                                                children: "Game"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                children: "Item"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                children: "Price"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                children: "Action"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        id: "list_status_item",
                                        children: datas.map((data)=>{
                                            const image = `${IMG}/${data.historyVoucherTopup.thumbnail}`;
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TableRow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                title: data.historyVoucherTopup.gameName,
                                                categorie: data.historyVoucherTopup.category,
                                                item: `${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName} `,
                                                price: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_number_format__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    value: data.value,
                                                    prefix: "Rp. ",
                                                    displayType: "text",
                                                    thousandSeparator: ".",
                                                    decimalSeparator: ","
                                                }),
                                                status: data.status,
                                                image: image,
                                                id: data._id
                                            }, data._id));
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
function setData(data) {
    throw new Error('Function not implemented.');
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4279:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Transactions),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_organs_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4201);
/* harmony import */ var _components_organs_TransactionContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9901);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_organs_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _components_organs_TransactionContent__WEBPACK_IMPORTED_MODULE_2__]);
([_components_organs_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _components_organs_TransactionContent__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function Transactions() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_organs_Sidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                ActiveSidebar: "transactions"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "transactions overflow-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_organs_TransactionContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
async function getServerSideProps({ req  }) {
    const { token  } = req.cookies;
    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,609,305,201,203], () => (__webpack_exec__(4279)));
module.exports = __webpack_exports__;

})();