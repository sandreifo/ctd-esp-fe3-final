import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
  const {state} = useContextGlobal ();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validation = () => {
    const error = {};
    if (!formData.name || formData.name.length <= 5) {
      error.name = "El nombre debe tener más de 5 caracteres.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = "El correo electrónico no es válido.";
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validation();
    if (Object.keys(newErrors).length === 0) {
      console.log("Datos enviados:", formData);
      setSuccess(true);
      setFormData({ name: "", email: "" });
    } else {
      setErrors(newErrors);
      setSuccess(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  return (
    <div className={`form-container ${state.theme === "dark" ? "dark" : "light"}`}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
          />
          {errors.name && <p className="error">Por favor verifica tu información nuevamente</p>}
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu correo"
          />
          {errors.email && <p className="error">Por favor verifica tu información nuevamente</p>}
        </div>
        <button type="submit">Enviar</button>
        {success && (
          <p className="success">
            Gracias {formData.name}, te contactaremos cuando antes vía mail
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
