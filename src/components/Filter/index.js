const Filter = ({ onSelectFilter = (f) => f }) => {
  return (
    <div>
      <div>Filter by Year</div>
      <select onChange={(e) => onSelectFilter(e.target.value)}>
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
