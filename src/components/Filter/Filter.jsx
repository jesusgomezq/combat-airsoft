import SearchBar from "../SearchBar/SearchBar";

const Filter = () => {
  return (
    <div>
      <div className="container mx-auto px-4 bg-gray-300 rounded-lg mt-5">
        <div className="p-5 rounded-lg">
          <div className="relative group flex items-center w-52 ml-2 h-full">
            <SearchBar />
          </div>
          <div className="flex items-center justify-between mt-4 text-gray-600">
            <p className="text-xl first-letter:uppercase">filtrar</p>
            <button className="px-4 py-2 text-xl first-letter:uppercase border border-gray-400 rounded-lg hover:bg-gray-400">
              resetear filtro
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <select className="px-4 py-3 w-full rounded-md outline-none bg-gray-100 focus:border-gray-500 text-md">
                <option value="rifles electricos">Rifles electricos</option>
                <option value="pistolas a gas">Pistolas a gas</option>
                <option value="francotirador">Francotirador</option>
                <option value="escopetas">Escopetas</option>
                <option value="ametralladoras">Ametralladoras</option>
                <option value="lanza granadas">Lanza granandas</option>
                <option value="granadas y minas">Granadas y minas</option>
                <option value="supresores">Supresores</option>
                <option value="cascos">Cascos</option>
                <option value="chalecos">Chalecos</option>
                <option value="musleras">Musleras</option>
                <option value="mochilas">Mochilas</option>
                <option value="protectores">Protectores</option>
                <option value="fundas">Fundas</option>
                <option value="guantes">Guantes</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md outline-none bg-gray-100 focus:border-gray-500 text-md">
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="500">500</option>
                <option value="700">700</option>
                <option value="900">900</option>
                <option value="1200">1200</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
