const Input = (props) => {
  return (
    <input
      value={props.value}
      onChange={(e) => {
        props.setValue(e);
      }}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};
export default Input;
