export default function FilterBar({filter, setFilter}) {
  return (
    <>
      <label htmlFor="filter">Filter tasks:</label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Tasks</option>
        <option value="active">Active Tasks</option>
        <option value="completed">Complete Tasks</option>
      </select>
    </>
  );
}
