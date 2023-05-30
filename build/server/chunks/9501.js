"use strict";
exports.id = 9501;
exports.ids = [9501];
exports.modules = {

/***/ 8341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ITCreative_ChooseUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
;// CONCATENATED MODULE: ./src/data/DataAnalysis/features2.json
const features2_namespaceObject = JSON.parse('[{"title":"La red produce una severa adicción que atenta nuestra salud mental","active":"true"},{"title":"El uso abusivo de redes sociales genera ansiedad","active":"true"},{"title":"El sindrome de pantallas desconecta de la realidad","active":"true"},{"title":"Incentivos perversos de empresas producen consecuencias negativas en las personas","active":"true"},{"title":"La inteligencia artificial es dueña de las mentes","active":"true"},{"title":"El uso desmedido genera perdida de tiempo irrecuperable","active":"true"},{"title":"La falta de control en las redes produce angustia severa","active":"true"},{"title":"Somos el producto de una industria publicitaria invisible que gana millones a diario","active":"true"}]');
;// CONCATENATED MODULE: ./src/components/ITCreative/ChooseUs.jsx





const ChooseUs = ()=>{
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "choose-us style-7 section-padding",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-head style-4 mb-40",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "top-title mb-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: " \xbf Por qu\xe9 AVIVATE ? "
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "A"
                                                    }),
                                                    "prender a ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "VI"
                                                    }),
                                                    "vir con ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "VA"
                                                    }),
                                                    "lores ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "TE"
                                                    }),
                                                    "cnol\xf3gicos"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                style: {
                                                    textAlign: "center"
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: features2_namespaceObject.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `d-flex align-items-center ${feature.active ? "" : "op-4"}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bi bi-dot fs-2 me-2 lh-1 color-red2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "fw-bold",
                                                        children: feature.title
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "img",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/video02.png",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.youtube.com/watch?v=71kkSWyCY3w",
                                        className: "play_btn",
                                        onClick: openVideo,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fas fa-play"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const ITCreative_ChooseUs = (ChooseUs);


/***/ }),

/***/ 2467:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _data_ITCreative_testimonials_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Keyboard
]);



const Testimonials = ()=>{
    const { 0: load , 1: setLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            setLoad(true);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "testimonials style-7 section-padding",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "testimonials-slider7 position-relative overflow-hidden",
                children: load && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 1000,
                    pagination: false,
                    navigation: false,
                    mousewheel: false,
                    keyboard: true,
                    children: _data_ITCreative_testimonials_json__WEBPACK_IMPORTED_MODULE_4__.map((testimonial, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-10",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "testi-card",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        "“",
                                                        testimonial.text,
                                                        "”"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "author",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: testimonial.image,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "inf",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                children: testimonial.author
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        }, index))
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5760:
/***/ ((module) => {

module.exports = JSON.parse('[{"text":" El verdadero problema de la humanidad es el siguiente: Tenemos emociones paleolíticas, instituciones medievales y tecnología divina  ","image":"/assets/img/testimonials/user10.jpg","author":"DR. E.O. Wilson, sociobiólogo"}]');

/***/ })

};
;