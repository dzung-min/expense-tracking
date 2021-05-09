import ChartBar from "./ChartBar";

import style from "./index.module.css";

const Chart = ({ chartData }) => {
  const displayData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let item of chartData) {
    let month = new Date(item.date).getMonth();
    displayData[month].value = item.amount;
  }

  const maxValue = Math.max(...displayData.map((item) => item.value));

  return (
    <div className={style.chart}>
      {displayData.map((data) => (
        <ChartBar
          key={data.label}
          label={data.label}
          value={maxValue > 0 ? Math.floor((data.value / maxValue) * 100) : 0}
        />
      ))}
    </div>
  );
};

export default Chart;
