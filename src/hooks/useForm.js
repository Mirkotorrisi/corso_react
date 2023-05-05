import React, { useState } from "react";

export const useForm = () => {
  // l'hook useState serve a conservare e manipolare dei dati che vengono mostrati nella nostra interfaccia

  const [form, setForm] = useState({});

  const handleChange = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleChange,
  };
};
