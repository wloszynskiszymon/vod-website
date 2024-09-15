import SearchInput from "./_components/SearchInput";
import SearchResults from "./_components/SearchResults";

const SearchPage = () => {
  return (
    <div className="h-screen w-screen">
      <SearchInput />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
