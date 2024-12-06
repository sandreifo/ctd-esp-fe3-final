import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
  const { dentists } = useContextGlobal();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    return newErrors;
  };

  // Manejo del submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("Datos enviados:", formData);
      setSuccess(true);
      setFormData({ name: "", email: "" });
    } else {
      setErrors(newErrors);
      setSuccess(false);
    }
  };

  // Manejo del cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Limpiar errores en tiempo real
  };

  return (
    <div className={`form-container ${dentists.theme === "dark" ? "dark" : "light"}`}>
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
          {errors.name && <p className="error">{errors.name}</p>}
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
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Enviar</button>
        {success && <p className="success">¡Formulario enviado con éxito!</p>}
      </form>
    </div>
  );
};

export default Form;
