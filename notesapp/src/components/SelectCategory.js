const SelectCategory = ({option, changeSelection}) => {
  return (
    <select 
    name="category" 
    id="category"
    value = {option}
    onChange = {() => changeSelection()}
    >
      <option value="work">work</option>
      <option value="personal">personal</option>
    </select>
  );
};

export default SelectCategory;
