import { Container } from "./styles";

export function Select({ error, id, placeholder, text, register, options }) {
  return (
    <Container error={error}>
      <label htmlFor={id}>{text}</label>
      <select
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        {...register}
      >
        <option value="">{placeholder}</option>
        {options?.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {error && <small>{error}</small>}
    </Container>
  );
}
