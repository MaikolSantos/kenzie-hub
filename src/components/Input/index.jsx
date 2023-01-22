import { Container } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export function Input({ error, type, id, placeholder, text, register, disabled }) {
  const [see, setSee] = useState(false);

  function handleClick() {
    setSee(!see);
  }

  return (
    <Container error={error}>
      <label htmlFor={id}>{text}</label>
      <input
        type={see ? "text" : type}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        {...register}
        disabled={disabled}
      />
      {type === "password" && (
        <button error={error} type="button" onClick={handleClick}>
          {see ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
      {error && <small>{error}</small>}
    </Container>
  );
}
