import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <div className="w-full md:w-3/4 h-12 md:h-16 flex">
      <div className="w-2/3 h-full px-3 bg-white inline-flex">
        <div className="w-10 h-full flex items-center justify-center">
          <AiOutlineSearch className="w-8 h-8 text-dark" />
        </div>
        <input
          type="search"
          placeholder="Search event"
          className="w-full px-3 bg-white placeholder-dark/50 overflow-hidden"
        />
      </div>
      <button className="w-1/3 h-full text-lg md:text-2xl font-bold bg-primary">Find event</button>
    </div>
  );
};

export default Search;
