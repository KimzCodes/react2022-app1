const Input = ({ label, type, ...rest }) => {
  return (
    <>
      {label && <label htmlFor={label}>{label}:</label>}
      <input type={!type ? "text" : type} {...rest} />
    </>
  );
};

export default Input;
