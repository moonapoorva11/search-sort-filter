import { USERS } from "./config";
import { useState, useEffect } from "react";
import { MapPinned as MapPinIcon, Cake as CakeIcon } from "lucide-react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(USERS);
  const [filterCity, setFilterCity] = useState("");
  const [filterAge, setFilterAge] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (!searchText) {
      setFilteredUsers(USERS);
      return;
    }
    
    const tempFilteredUsers = USERS.filter((user) => {
      if (user.name.toLocaleLowerCase().includes(searchText)) {
        return true;
      } else if (user.city.toLocaleLowerCase().includes(searchText)) {
        return true;
      } else if (user.age.toString().includes(searchText)) {
        return true;
      }
      return false;
    });
    
    setFilteredUsers(tempFilteredUsers);
  }, [searchText]);

  useEffect(() => {
    if (!filterCity && !filterAge) {
      setFilteredUsers(USERS);
      return;
    }
    
    const tempFilteredUsers = USERS.filter((user) => {
      let isMatch = true;
      if (filterCity) {
        isMatch = isMatch && user.city.toLowerCase() === filterCity.toLowerCase();
      }
      if (filterAge) {
        isMatch = isMatch && user.age === parseInt(filterAge);
      }
      return isMatch;
    });
    
    setFilteredUsers(tempFilteredUsers);
  }, [filterCity, filterAge]);

   useEffect(()=> {
    const tempSortedUsers = filteredUsers.sort((a,b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  
setFilteredUsers([...tempSortedUsers]);
}, [sortOrder, filteredUsers] );

  return (
    <div className="bg-slate-100 min-h-screen">
      <h1 className="text-center text-purple-500 text-4xl font-bold py-5">
        Search, sort, filter
      </h1>

      <input
        type="text"
        placeholder="Search"
        className="w-2/3 p-1 my-4 bg-white block mx-auto rounded-lg text-2xl focus:outline-none border border-gray-200"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value.toLocaleLowerCase())}
      />

      {searchText ? (
        <p className="text-center mt-1">
          {filteredUsers.length === 0 
            ? "Oops! No users found....Try another Search..." 
            : `Found ${filteredUsers.length} Users for search result...`}
        </p>
      ) : null}

      <div className="flex justify-around">
        <div>
          <span>Filter By City :</span>
          <select
            className="bg-white text-lg my-2 rounded-lg px-5"
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
          >
            <option value="">All</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Banglore">Banglore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>

        <div>
          <span>Filter By Age :</span>
          <select
            className="bg-white text-lg my-2 rounded-lg px-5"
            value={filterAge}
            onChange={(e) => setFilterAge(e.target.value)}
          >
            <option value="">All</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="28">28</option>
            <option value="30">30</option>
            <option value="32">32</option>
          </select>
        </div>

        <div>
          <span>Sort by name:</span>
          <select
            className="bg-white text-lg my-2 rounded-lg px-5"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        {filteredUsers.map((userData, index) => {
          const { name, city, age, avatar } = userData;
          return (
            <div
              className="bg-white shadow-lg m-5 px-5 py-2 rounded-lg w-[400px] flex"
              key={index}
            >
              <img src={avatar} className="h-15 rounded-full mr-4" alt={name} />
              <div>
                <h1 className="font-bold text-lg border-b border-gray-200">
                  {name}
                </h1>
                <div className="flex items-center pt-2">
                  <CakeIcon className="inline" /> {age}
                  <MapPinIcon className="inline ml-4" /> {city}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;