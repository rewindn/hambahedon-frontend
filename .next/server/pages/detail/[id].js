"use strict";
(() => {
var exports = {};
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 9916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ index)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "react-number-format"
var external_react_number_format_ = __webpack_require__(3554);
var external_react_number_format_default = /*#__PURE__*/__webpack_require__.n(external_react_number_format_);
;// CONCATENATED MODULE: ./components/organs/TopUpForm/NominalItem.tsx


function NominalItem(props) {
    const { _id , coinQuantity , coinName , price , onChange  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: "col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10",
        htmlFor: _id,
        onChange: onChange,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "d-none",
                type: "radio",
                id: _id,
                name: "topup",
                value: _id
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "detail-card",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-3xl color-palette-1 m-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fw-medium",
                                        children: coinQuantity
                                    }),
                                    coinName
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                id: "icon-check",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                        cx: "10",
                                        cy: "10",
                                        r: "10",
                                        fill: "#CDF1FF"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M5.83301 10L8.46459 12.5L14.1663 7.5",
                                        stroke: "#00BAFF",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-lg color-palette-1 m-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_number_format_default()), {
                            value: price,
                            prefix: "Rp. ",
                            displayType: "text",
                            thousandSeparator: ".",
                            decimalSeparator: ","
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/organs/TopUpForm/PaymentItem.tsx

function PaymentItem(props) {
    const { bankID , type , name , onChange  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: "col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10",
        htmlFor: bankID,
        onChange: onChange,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "d-none",
                type: "radio",
                id: bankID,
                name: "paymentMethod",
                value: bankID
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "detail-card",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-3xl color-palette-1 fw-medium m-0",
                                children: type
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                id: "icon-check",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                        cx: "10",
                                        cy: "10",
                                        r: "10",
                                        fill: "#CDF1FF"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M5.83301 10L8.46459 12.5L14.1663 7.5",
                                        stroke: "#00BAFF",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-lg color-palette-1 m-0",
                        children: name
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/organs/TopUpForm/index.tsx






function index(props) {
    const router = (0,router_.useRouter)();
    const { 0: verifyID , 1: setVerifyID  } = (0,external_react_.useState)('');
    const { 0: bankAccountName , 1: setBankAccountName  } = (0,external_react_.useState)('');
    const { 0: nominalItem , 1: setNominalItem  } = (0,external_react_.useState)({});
    const { 0: paymentItem , 1: setpaymentItem  } = (0,external_react_.useState)({});
    const { nominals , payments  } = props;
    const onPaymentItemCheck = (payment, bank)=>{
        const data = {
            payment,
            bank
        };
        setpaymentItem(data);
    };
    const onNominalItemClick = (data)=>{
        setNominalItem(data);
    };
    const onSubmit = ()=>{
        if (verifyID === '' || bankAccountName === '' || nominalItem === {} || paymentItem === {}) {
            external_react_toastify_.toast.error('mohon isi dengan lengkap');
        } else {
            const data = {
                verifyID,
                bankAccountName,
                nominalItem,
                paymentItem
            };
            localStorage.setItem('data-topup', JSON.stringify(data));
            router.push('/checkout');
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        action: "./checkout.html",
        method: "POST",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-md-50 pt-30",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "ID",
                            className: "form-label text-lg fw-medium color-palette-1 mb-10",
                            children: "Verify ID"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            className: "form-control rounded-pill text-lg",
                            id: "ID",
                            name: "ID",
                            "aria-describedby": "verifyID",
                            placeholder: "Enter your ID",
                            value: verifyID,
                            onChange: (event)=>{
                                setVerifyID(event.target.value);
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pt-md-50 pb-md-50 pt-30 pb-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-lg fw-medium color-palette-1 mb-md-10 mb-0",
                        children: "Nominal Top Up"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-between",
                        children: [
                            nominals.map((nominal)=>/*#__PURE__*/ jsx_runtime_.jsx(NominalItem, {
                                    _id: nominal._id,
                                    coinQuantity: nominal.coinQuantity,
                                    coinName: nominal.coinName,
                                    price: nominal.price,
                                    onChange: ()=>onNominalItemClick(nominal)
                                }, nominal._id)
                            ),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-sm-6"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pb-md-50 pb-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-lg fw-medium color-palette-1 mb-md-10 mb-0",
                        children: "Payment Method"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("fieldset", {
                        id: "paymentMethod",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row justify-content-between",
                            children: [
                                payments.map((payment)=>{
                                    {
                                        return payment.banks.map((bank)=>/*#__PURE__*/ jsx_runtime_.jsx(PaymentItem, {
                                                bankID: bank._id,
                                                type: payment.type,
                                                name: bank.bankName,
                                                onChange: ()=>onPaymentItemCheck(payment, bank)
                                            })
                                        );
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-4 col-sm-6"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pb-50",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "bankAccount",
                        className: "form-label text-lg fw-medium color-palette-1 mb-10",
                        children: "Bank Account Name"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: "form-control rounded-pill text-lg",
                        id: "bankAccount",
                        name: "bankAccount",
                        "aria-describedby": "bankAccount",
                        placeholder: "Enter your Bank Account Name",
                        value: bankAccountName,
                        onChange: (event)=>{
                            setBankAccountName(event.target.value);
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "d-sm-block d-flex flex-column w-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "btn btn-submit rounded-pill fw-medium text-white border-0 text-lg",
                    onClick: onSubmit,
                    children: "Continue"
                })
            })
        ]
    }));
};


/***/ }),

/***/ 7767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function index(props) {
    const { type , data  } = props;
    const ROOT_IMG = "https://hambahedon.herokuapp.com/uploads";
    if (type === 'Mobile') {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row align-items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-md-12 col-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `${ROOT_IMG}/${data.thumbnail}`,
                        width: "280",
                        height: "380",
                        className: "img-fluid",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-md-12 col-8 d-md-none d-block",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-xl fw-bold color-palette-1 text-start mb-10",
                            children: data.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm color-palette-2 text-start mb-0",
                            children: data.category.name
                        })
                    ]
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pb-50 d-md-block d-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-4xl fw-bold color-palette-1 text-start mb-10 mt-10",
                children: data.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-lg color-palette-2 mb-0",
                children: data.category.name
            })
        ]
    }));
};


/***/ }),

/***/ 5106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Detail),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_organs_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2532);
/* harmony import */ var _components_organs_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3414);
/* harmony import */ var _components_organs_TopUpForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9916);
/* harmony import */ var _components_organs_TopUpItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7767);
/* harmony import */ var _services_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_organs_Navbar__WEBPACK_IMPORTED_MODULE_3__, _services_player__WEBPACK_IMPORTED_MODULE_6__]);
([_components_organs_Navbar__WEBPACK_IMPORTED_MODULE_3__, _services_player__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Detail({ dataItem , nominals , payments  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem('data-item', JSON.stringify(dataItem));
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_organs_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "detail pt-lg-60 pb-50",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-xxl container-fluid",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "detail-header pb-50",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-4xl fw-bold color-palette-1 text-start mb-10",
                                    children: "Top Up"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-lg color-palette-1 mb-0",
                                    children: "Perkuat akun dan jadilah pemenang"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_organs_TopUpItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        data: dataItem,
                                        type: "Mobile"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xl-9 col-lg-8 col-md-7 ps-md-25",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_organs_TopUpItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            data: dataItem,
                                            type: "Desktop"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_organs_TopUpForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            nominals: nominals,
                                            payments: payments
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_organs_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};
async function getStaticPaths() {
    const data = await (0,_services_player__WEBPACK_IMPORTED_MODULE_6__/* .getFeaturedGame */ .c1)();
    const paths = data.map((item)=>({
            params: {
                id: item._id
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const { id  } = params;
    const data = await (0,_services_player__WEBPACK_IMPORTED_MODULE_6__/* .getDetailVoucher */ .cT)(id);
    return {
        props: {
            dataItem: data.data,
            payments: data.payment,
            nominals: data.data.nominals
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
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,609,305,546], () => (__webpack_exec__(5106)));
module.exports = __webpack_exports__;

})();