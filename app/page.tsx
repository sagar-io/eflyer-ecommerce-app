"use client"

import { Categories } from "@/components/Categories";
import { Hero } from "@/components/Hero";
import { QueryContext } from "@/libs/context/queryContext"
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div>
      <QueryContext.Provider value={searchQuery}>
        <Hero setSearchQuery={setSearchQuery} />
        <Categories />
      </QueryContext.Provider>
    </div>
  );
}
