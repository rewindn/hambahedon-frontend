"use strict";
(() => {
var exports = {};
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 4717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TransactionDetailContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-number-format"
var external_react_number_format_ = __webpack_require__(3554);
var external_react_number_format_default = /*#__PURE__*/__webpack_require__.n(external_react_number_format_);
;// CONCATENATED MODULE: ./components/organs/TransactionDetailContent/Row.tsx


function Row(props) {
    const { label , value , classname  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        className: "text-lg color-palette-1 mb-20",
        children: [
            label,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `purchase-details ${classname}`,
                children: typeof value === 'string' ? value : /*#__PURE__*/ jsx_runtime_.jsx((external_react_number_format_default()), {
                    value: value,
                    prefix: "Rp. ",
                    displayType: "text",
                    thousandSeparator: ".",
                    decimalSeparator: ","
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/organs/TransactionDetailContent/index.tsx


function TransactionDetailContent(props) {
    const IMG = "https://hambahedon.herokuapp.com/uploads";
    const { data  } = props;
    const image = `${IMG}/${data.historyVoucherTopup.thumbnail}`;
    return(/*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "main-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "ps-lg-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    className: "text-4xl fw-bold color-palette-1 mb-30",
                    children: [
                        "Details ",
                        data._id
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "details",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-content main-content-card overflow-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: "checkout mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "d-flex flex-row align-items-center justify-content-between mb-30",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "game-checkout d-flex flex-row align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "pe-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "cropped",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: image,
                                                            width: "200",
                                                            height: "130",
                                                            className: "img-fluid",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "fw-bold text-xl color-palette-1 mb-10",
                                                            children: data.historyVoucherTopup.gameName
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "color-palette-2 m-0",
                                                            children: [
                                                                "Category:",
                                                                data.historyVoucherTopup.category
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "fw-medium text-center label pending m-0 rounded-pill",
                                                children: data.status
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "purchase pt-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "fw-bold text-xl color-palette-1 mb-20",
                                            children: "Purchase Details"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Your Game ID",
                                            value: data.historyUser.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Order ID",
                                            value: '#GG001'
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Item",
                                            value: `${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Price",
                                            value: data.historyVoucherTopup.harga
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Tax(10%)",
                                            value: data.tax
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Total",
                                            classname: "color-palette-4",
                                            value: data.value
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "payment pt-10 pb-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "fw-bold text-xl color-palette-1 mb-20",
                                            children: "Payment Informations"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Your Account Name",
                                            value: data.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Type",
                                            value: data.historyPayment.type
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Bank Name",
                                            value: data.historyPayment.bankName
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Bank Account Name",
                                            value: data.historyPayment.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Row, {
                                            label: "Bank Number",
                                            value: data.historyPayment.noRekening
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-md-block d-flex flex-column w-100",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg",
                                        href: "#",
                                        role: "button",
                                        children: "WhatsApp ke Admin"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 1128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TransactionDetail),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_organs_TransactionDetailContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4717);
/* harmony import */ var _services_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_player__WEBPACK_IMPORTED_MODULE_3__]);
_services_player__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function TransactionDetail(props) {
    const { transactionDetail  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "transactions-detail overflow-auto",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_organs_TransactionDetailContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            data: transactionDetail
        })
    }));
};
async function getServerSideProps({ req , params  }) {
    const { token  } = req.cookies;
    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                permanent: false
            }
        };
    }
    const jwtToken = Buffer.from(token, 'base64').toString('ascii');
    const payload = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(jwtToken);
    const userFromToken = payload.player;
    const IMG = "https://hambahedon.herokuapp.com/uploads";
    userFromToken.avatar = `${IMG}/${payload.avatar}`;
    const response = await (0,_services_player__WEBPACK_IMPORTED_MODULE_3__/* .getTransactionsDetail */ .oh)(params.idTrx, jwtToken);
    return {
        props: {
            transactionDetail: response.data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [609,305], () => (__webpack_exec__(1128)));
module.exports = __webpack_exports__;

})();