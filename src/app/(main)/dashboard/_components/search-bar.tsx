import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="search-bar duration-300  focus-within:border-white bg-gray-500/20 border border-gray-500 rounded-lg flex items-center gap-2 text-gray-200 p-2">
      {/* Search Icon */}
      <Search className="size-4 md:size-4.5" />

      {/* Input */}
      <input
        type="text"
        placeholder="search for application "
        className="text-xs outline-none border-0 focus:outline-none grow"
      />
    </div>
  );
}
