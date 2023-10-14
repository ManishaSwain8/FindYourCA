import { useState } from "react";
import React from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CAData from "./CAData";
import Details from "./Details";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const routes = [{ path: "/details", element: <Details /> }];
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredResults = CAData.filter(
      (professional) =>
        professional.name.toLowerCase().includes(searchTerm.toLowerCase()) //convertes the text to lower case no matter what user inputs
    );
    setSearchResults(filteredResults);
  };
  return (
    <>
      <div>
        <form>
          <div className="relative flex ">
            <input
              type="search"
              id="default-search"
              className="max-sm:w-60  text-bold mt-14 block w-5/6 p-4 pl-6 text-sm text-gray-900 border  rounded-2xl bg-white focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search by name"
              required
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className=" h-14 w-36 bg-sky-600 text-white font-semibold pl-12 text-sm  flex mt-14 -ml-4 pointer-events-none rounded-xl  ">
              <button>Search</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <ul>
          {searchResults.map((result, id) => (
            <li
              key={result.id}
              className="flex justify-between   rounded-xl hover:bg-blue-100 "
            >
              <h3 className="mt-2 p-2">{result.name}</h3>
              <Link to={`/details`}>
                <button className="text-sky-600 font-semibold p-2 ">
                  Details
                </button>
              </Link>
              {/* on click navigates to another Detail page */}
            </li>
          ))}
        </ul>
      </div>

      <Routes>
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}
