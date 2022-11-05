
const SearchBar = ({ handleSearch}) => {

  return (
    <div className="w-full flex items-center justify-center mt-5 mb-2">
      <form className="flex items-center gap-2 py-1 border rounded px-2">
        <input
          type="text"
          name="search"
          onChange={handleSearch}
          placeholder="Search for products..."
          className="border-1 h-7 border-black outline-none text-sm px-1 py-1"
        />
        <button type="submit" className="text-xs bg-black text-white py-2 px-2 rounded cursor-pointer">
          Search
        </button>
      </form>
      


    </div>
  );
};

export default SearchBar;
