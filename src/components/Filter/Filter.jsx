import { Dropdown } from "./Filter.styled";

const Filter = ({ filterChange }) => {
  return (
    <Dropdown
      name="filter"
      onChange={({ target: { value } }) => filterChange(value)}
    >
      <option value="all">show all</option>
      <option value="follow">follow</option>
      <option value="followings">followings </option>
    </Dropdown>
  );
};

export default Filter;
