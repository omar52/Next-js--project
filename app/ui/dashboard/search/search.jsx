"use client";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div
      className="search flex items-center p-2 rounded-xl me-2 "
      style={{ backgroundColor: "var(--bg)" }}
    >
      <MdSearch size={25} className="cursor-pointer me-2" />
      <input
        className="border-none outline-none"
        style={{ backgroundColor: "var(--bg)" }}
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
