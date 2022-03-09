import { useState } from "react";
import Item from "./components/Item";
import data from "./options.json";

function App() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (item) => {
      return item.question.toLowerCase().includes(search.toLowerCase());
    },
    [search]
  );

  return (
    <div className="container flex flex-col mx-auto items-center justify-center">
      <div className="px-4 py-5 sm:px-6 border dark:bg-gray-800 bg-white shadow my-6 rounded-md sticky top-0">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          The PW - Trivia
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
          All the questions and answers from Trivia.
        </p>
        <div className=" relative ">
          <input
            type="text"
            id="rounded-email"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full mt-4 py-1 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <ul className="flex flex-col overflow-y-auto max-h-96">
        {filteredData.map((option) => (
          <Item
            key={option.question}
            question={option.question}
            answers={option.answers}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
