import { useState } from "react";
import Card from "./Card";

export default function Form() {
  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 3 || name.trim() === "") {
      setError("El nombre es demasiado corto.");
      setSubmitted(false);
      return;
    }
    if (dni.trim().length < 6) {
      setError("El DNI es demasiado corto.");
      setSubmitted(false);
      return;
    } else {
      setSubmitted(true);
      setError("");
    }

    console.log("Nombre: ", name);
    console.log("DNI: ", dni);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label h5">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escriba aqui su nombre"
            className="form-control"
          ></input>
        </div>
        <div>
          <label htmlFor="dni" className="form-label h5">
            DNI
          </label>
          <input
            id="dni"
            name="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            placeholder="Escriba aqui su DNI"
            className="form-control"
          ></input>
        </div>
        <button type="submit" disabled={submitted} className="btn btn-primary">
          Enviar
        </button>
      </form>
      {submitted && !error ? <Card name={name} dni={dni} /> : <p>{error}</p>}
    </>
  );
}
