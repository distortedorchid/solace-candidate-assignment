"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { InferSelectModel } from "drizzle-orm";
import { advocates } from "@/db/schema";
import { AdvocatesTable } from "./components/AdvocatesTable";

export type Advocate = InferSelectModel<typeof advocates>;
export type AdvocateList = Array<Advocate>;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [advocates, setAdvocates] = useState<AdvocateList>([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onClick = () => {
    console.log(advocates);
    setSearchTerm(undefined);
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <label htmlFor="searchBox">Search</label>
        <input
          id="searchBox"
          type="search"
          style={{ border: "1px solid black" }}
          onChange={onChange}
        />
        <button onClick={onClick}>Reset Search</button>
        Searching for: <span>{searchTerm}</span>
      </div>
      <br />
      <br />
      <AdvocatesTable {...{ searchTerm, advocates }} />
    </main>
  );
}
