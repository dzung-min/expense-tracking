const Filter = ({ onSelectFilter = (f) => f }) => {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>Filter by Year</div>
      <select
        style={{ width: 80, height: 30, fontSize: "1rem" }}
        onChange={(e) => onSelectFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
    </div>
  );
};

export default Filter;
