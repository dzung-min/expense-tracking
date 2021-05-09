import style from "./index.module.css";

const InputWithLabel = ({ id, label, type = "text", value }) => {
  return (
    <div className={style["input-field"]}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...value} required />
    </div>
  );
};

export default InputWithLabel;
