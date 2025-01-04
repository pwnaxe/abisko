

export default function SearchBar() {
    return (
      <div className="flex justify-center items-center mt-8">
        <div className="relative w-3/4 max-w-lg">
          <input
            type="text"
            placeholder="Światła na niebie"
            className="w-full py-3 pl-5 pr-12 text-base rounded-3xl shadow-md border bg-slate-300 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  