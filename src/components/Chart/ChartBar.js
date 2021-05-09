import style from "./ChartBar.module.css";

const ChartBar = ({ label, value }) => {
  return (
    <div className={style["chart-bar-container"]}>
      <div className={style["chart-bar"]}>
        <div style={{ height: value + "%", backgroundColor: "blue" }}></div>
      </div>
      <div style={{ paddingTop: 10 }}>{label}</div>
    </div>
  );
};

export default ChartBar;
