"use strict";
exports.id = 3078;
exports.ids = [3078];
exports.modules = {

/***/ 3078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_2__);



const Form = ({ style ="4" , rtl  })=>{
    const { 0: formData , 1: setFormdata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: ""
    });
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        phone: 0
    });
    const handleFormChange = (e)=>{
        setFormdata((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
        const errores = validador({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors(errores);
    };
    const validador = (inputs)=>{
        let validations = {};
        const emailExpresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const phoneExpression = /^[0-9]{10}$/;
        if (!inputs.email) {
            validations.email = "ingrese su email";
        } else if (!emailExpresion.test(inputs.email)) {
            validations.email = "Debe ingresar un email valido";
        }
        if (!inputs.phone) {
            validations.phone = "Debe ingresar su telefono";
        } else if (!phoneExpression.test(inputs.phone)) {
            validations.phone = "Ingrese un numero de telefono valido";
        }
        return validations;
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if (!errors.email && !errors.phone) {
            _emailjs_browser__WEBPACK_IMPORTED_MODULE_2___default().send("service_hnmwgwg", "template_9k0xxkd", formData, "wOUw39SJsGoazsJ5B").then((res)=>{
                alert("Mensaje enviado correctamente");
            }).catch((res)=>{
                console.error(res);
            });
            setFormdata({
                name: "",
                email: "",
                phone: "",
                city: "",
                message: ""
            });
            return;
        }
        alert("Campos faltantes o incorrectos");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `contact section-padding pt-${style === "4" ? "0" : "50"} style-6`,
        id: "contacto",
        children: [
            style === "5" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "section-head text-center mb-100 style-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-20",
                            children: [
                                rtl ? "يسعدنا" : "Se un Facilitador!",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: rtl ? "سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة" : "Dejanos tus datos si queres formar parte de los facilitadores de Argentina! (Facilitador es quien trabaja y contribuye para hacer posible el Avivate en una ciudad)"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                action: "contact.php",
                                className: "form",
                                method: "post",
                                onSubmit: handleFormSubmit,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-center text-danger fs-12px mb-30",
                                        children: rtl ? "الحقل اللذى يحتوى على هذة العلامة اجبارى *" : "Los campos marcados con * son obligatorios"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group mb-20",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        name: "name",
                                                        className: "form-control",
                                                        placeholder: rtl ? "الاسم" : "Nombre *",
                                                        onChange: handleFormChange
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group mb-20",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "email",
                                                            className: "form-control",
                                                            placeholder: rtl ? "البريد الالكترونى *" : "Email *",
                                                            onChange: handleFormChange
                                                        }),
                                                        errors.email ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: errors.email
                                                        }) : null
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group mb-20",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "phone",
                                                            className: "form-control",
                                                            placeholder: rtl ? "رقم الهاتف (اختياري)" : "Numero de telefono *",
                                                            onChange: handleFormChange
                                                        }),
                                                        errors.phone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: errors.phone
                                                        }) : null
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group mb-20",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        name: "city",
                                                        className: "form-control",
                                                        placeholder: rtl ? "رابط موقعك (اختيارى)" : "\xbfDe que ciudad nos escribis?",
                                                        onChange: handleFormChange
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-12",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        rows: "10",
                                                        name: "message",
                                                        className: "form-control",
                                                        placeholder: rtl ? "كيف يمكننا مساعدتك ؟" : "Escribinos...",
                                                        onChange: handleFormChange
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-12 text-center mt-30",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "submit",
                                                    value: rtl ? "ارسل طلبك" : "Enviar mensaje",
                                                    className: "btn rounded-pill blue5-3Dbutn hover-red2 sm-butn fw-bold text-light"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ })

};
;