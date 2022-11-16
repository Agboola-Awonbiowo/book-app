import { Dispatch, SetStateAction, FC } from 'react';
interface searchProps {
  setSearchInput: Dispatch<SetStateAction<string>>
}
const Search: FC<searchProps> = (props) => {
  const {setSearchInput} = props
  return (
    <input
      type="search"
      onChange={(e) => setSearchInput(e.target.value.trim().toLocaleLowerCase())}
      className="block p-4 pl-10 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500"
      placeholder="Search..."
    />
    // <button>Search</button>
  );
}

export default Search;
