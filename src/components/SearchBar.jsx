function SearchBar() {
  return (
    <div className="px-4">
      <input
        type="text"
        className="mb-2 h-10 w-full rounded-xl bg-gray-200 pl-4 pr-2 placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-inset"
        placeholder="Search friend here"
        id="search-friend"
      />
    </div>
  );
}

export default SearchBar;
