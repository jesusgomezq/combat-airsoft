import { IoIosSearch } from "react-icons/io"


const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-center relative">
        <input
          type="text"
          placeholder="Buscar aqui"
        //   onChange={(e) => setSearch(e.target.value)}
          className="w-[200px] md:group-hover:w-[600px] transition-all duration-300
           rounded-full border border-gray-400 px-2 py-1 focus:outline-none
          focus:border-1 focus:border-bgDesingColor sm:w-[200px]"
        //   value={search}
        />
        <span
          className="absolute text-gray-500 group-hover:text-bgBodyColor
          top-1/2 -translate-y-1/2 right-3 text-xl">
          <IoIosSearch />
        </span>
      </div>
    </div>
  )
}

export default SearchBar