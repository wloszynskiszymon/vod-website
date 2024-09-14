"use client";
import DeleteIcon from "@/components/UI/Icons/DeleteIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSearchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    if (e.key === "Enter" && query.trim().length !== 0) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.trim() === "") {
      router.push("/");
    } else {
      router.replace(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex-center h-16 w-full translate-y-20 transform bg-blue-950 px-6">
      <input
        placeholder="Enter movie or TV show name"
        type="text"
        onKeyDown={onSearchHandler}
        onChange={onChangeHandler}
        value={searchParams?.get("q") || ""}
        ref={inputRef}
        className="h-full w-11/12 bg-blue-950 text-3xl font-bold text-white outline-none"
        autoFocus
      />
      <div onClick={() => router.push("/")} className="cursor-pointer">
        <DeleteIcon />
      </div>
    </div>
  );
};

export default SearchInput;
