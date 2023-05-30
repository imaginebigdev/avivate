"use strict";
exports.id = 3777;
exports.ids = [3777];
exports.modules = {

/***/ 3777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_Testimonials)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
;// CONCATENATED MODULE: ./src/data/App/testimonials.json
const testimonials_namespaceObject = JSON.parse('{"numCards":[{"image":"/assets/img/icons/testi_s4_ic1.png","value":"2,5M+","type":{"text1":"Downloaded and","text2":"Installation"}},{"image":"/assets/img/icons/testi_s4_ic2.png","value":"4.8/5","stars":5,"type":"Based on 1,258 reviews"}],"testiCards":[{"userImg":"/assets/img/testimonials/user4.png","stars":5,"title":{"text1":"“You can even send emails to Evernote and gather  ","text2":" all of the things you need in a single place.”"},"author":{"name":"jurgen k.","position":"Senior Marketing","company":"Br /ator"}},{"userImg":"/assets/img/testimonials/user5.png","stars":5,"title":"“Notero - 1st my choice for notes app. Awesome”","author":{"name":"foden p.","position":"Director","company":"Ecoland Resort"}},{"userImg":"/assets/img/testimonials/user6.png","stars":5,"title":{"text1":"”.This app is seriously good. It’s simple, clean and ","text2":" a real joy to use.”"},"author":{"name":"Kerry T.","position":"Designer","company":"Teckzone Inc"}}]}');
;// CONCATENATED MODULE: ./src/data/App/testimonials-rtl.json
const testimonials_rtl_namespaceObject = JSON.parse('{"numCards":[{"image":"/assets/img/icons/testi_s4_ic1.png","value":"2,5M+","type":{"text1":"تحميل و","text2":"تثبيت"}},{"image":"/assets/img/icons/testi_s4_ic2.png","value":"4.8/5","stars":5,"type":"بناءاً على هذا العدد من التقييمات 1،258"}],"testiCards":[{"userImg":"/assets/img/testimonials/user4.png","stars":5,"title":{"text1":"“يمكنك حتى إرسال رسائل بريد إلكتروني إلى Evernote وجمع  ","text2":" كل الأشياء التي تحتاجها في مكان واحد.”"},"author":{"name":"يورجن ك.","position":" أول قسم التسويق ","company":"Brator"}},{"userImg":"/assets/img/testimonials/user5.png","stars":5,"title":"“نوتيرو - الخيار الأول الذي أختاره لتطبيق الملاحظات. رائع”","author":{"name":"فودن ص.","position":"مدير","company":"Ecoland Resort"}},{"userImg":"/assets/img/testimonials/user6.png","stars":5,"title":{"text1":"”.هذا التطبيق جيد بجدية. إنه ببساطة ، نظيف و  ","text2":" متعة حقيقية في الاستخدام.”"},"author":{"name":"Kerry T.","position":"مصمم","company":"Teckzone Inc"}}]}');
;// CONCATENATED MODULE: ./src/components/App/Testimonials.jsx






const Testimonials = ({ rtl  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const data = rtl ? testimonials_rtl_namespaceObject : testimonials_namespaceObject;
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "testimonials style-4 pt-70",
        "data-scroll-index": "5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-head style-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "title_small",
                                                children: rtl ? "اراء العملاء" : "Testimonials"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mb-30",
                                                children: [
                                                    rtl ? "محبوب من" : "Loved From",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: rtl ? "العملاء" : "Customers"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text mb-40",
                                        children: rtl ? "أحب نوتيرو من آلاف العملاء في جميع أنحاء العالم وحصل على الثقة من الشركات الكبرى." : "Notero loved from thoudsands customer worldwide and get trusted from big companies."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "numbs",
                                        children: data.numCards.map((card, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "num-card",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon img-contain",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: card.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        children: card.value
                                                    }),
                                                    card.stars && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "stars",
                                                        children: Array(card.stars).fill().map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-star"
                                                            }, i))
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: typeof card.type === "string" ? card.type : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                card.type.text1,
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                " ",
                                                                card.type.text2
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex align-items-center mt-70",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.apple.com/app-store",
                                                rel: "noreferrer",
                                                className: "btn rounded-pill bg-blue4 fw-bold text-white me-4",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                    children: [
                                                        " ",
                                                        rtl ? "انظر التعليقات على متجر التطبيقات" : "See Reviews On App Store"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://youtu.be/pGbIOC83-So?t=21",
                                                className: "play-btn",
                                                onClick: openVideo,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon me-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-play ms-1"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                        className: "small",
                                                        children: [
                                                            rtl ? "مشاهده" : "View",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            rtl ? "البرومو" : "Promotion"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "testi-cards",
                                    children: [
                                        data.testiCards.map((card, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "client_card",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "user_img",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: card.userImg,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inf_content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "stars mb-2",
                                                                children: Array(card.stars).fill().map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    }, i))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                children: typeof card.title === "string" ? card.title : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                    children: [
                                                                        card.title.text1,
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        " ",
                                                                        card.title.text2
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    card.author.name,
                                                                    " ",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "text-muted",
                                                                        children: [
                                                                            " /  ",
                                                                            card.author.position,
                                                                            " ",
                                                                            rtl ? "في" : "at",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: card.author.company
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index)),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/assets/img/contact_globe.svg",
                                            alt: "",
                                            className: "testi-globe"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const App_Testimonials = (Testimonials);


/***/ })

};
;