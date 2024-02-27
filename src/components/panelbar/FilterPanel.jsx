export default function FilterPanel({filterOptions, optionTitle}){

  return(
    <select>
    <option>{optionTitle}</option>
    {filterOptions.map((option) => (
          <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>

  );
}