import { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = ({ style = "4", rtl }) => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: 0,
  });

  const handleFormChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    const errores = validador({ ...formData, [e.target.name]: e.target.value });
    setErrors(errores);
  };

  const validador = (inputs) => {
    let validations = {};
    const emailExpresion =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.phone) {
      emailjs
        .send(
          "service_hnmwgwg",
          "template_9k0xxkd",
          formData,
          "wOUw39SJsGoazsJ5B"
        )
        .then((res) => {
          alert("Mensaje enviado correctamente");
        })
        .catch((res) => {
          console.error(res);
        });

      setFormdata({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
      return;
    }
    alert("Campos faltantes o incorrectos");
  };

  return (
    <section
      className={`contact section-padding pt-${
        style === "4" ? "0" : "50"
      } style-6`}
      id="contacto"
    >
      {style === "5" && (
        <>
          <div className="section-head text-center mb-100 style-5">
            <h2 className="mb-20">{rtl ? "يسعدنا" : "Contáctanos!"} </h2>
            <p>
              {rtl
                ? "سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة"
                : "Dejanos tus datos para participar, ser parte o acceder a algunos de nuestros cursos o eventos."}
            </p>
          </div>
        </>
      )}
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                action="contact.php"
                className="form"
                method="post"
                onSubmit={handleFormSubmit}
              >
                <p className="text-center text-danger fs-12px mb-30">
                  {rtl
                    ? "الحقل اللذى يحتوى على هذة العلامة اجبارى *"
                    : "Los campos marcados con * son obligatorios"}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={rtl ? "الاسم" : "Nombre *"}
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder={rtl ? "البريد الالكترونى *" : "Email *"}
                        onChange={handleFormChange}
                      />
                      {errors.email ? <div>{errors.email}</div> : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder={
                          rtl ? "رقم الهاتف (اختياري)" : "Numero de telefono *"
                        }
                        onChange={handleFormChange}
                      />
                      {errors.phone ? <div>{errors.phone}</div> : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder={
                          rtl
                            ? "رابط موقعك (اختيارى)"
                            : "¿De que ciudad nos escribis?"
                        }
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        rows="10"
                        name="message"
                        className="form-control"
                        placeholder={
                          rtl ? "كيف يمكننا مساعدتك ؟" : "Escribinos..."
                        }
                        onChange={handleFormChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 text-center mt-30">
                    <input
                      type="submit"
                      value={rtl ? "ارسل طلبك" : "Enviar mensaje"}
                      className="btn rounded-pill blue5-3Dbutn hover-red2 sm-butn fw-bold text-light"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
