import { MdSearch } from "react-icons/md";

const Search = ({placeholder}) => {
  return (
    <div
      className="search flex items-center p-2 rounded-xl me-2 "
      style={{ backgroundColor: "var(--bg)" }}
    >
      <MdSearch size={25} className="cursor-pointer me-2" />
      <input
      className="border-none outline-none"
        style={{ backgroundColor: "var(--bg)" }}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
