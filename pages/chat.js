import Head from "next/head";
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState( { text:'' });
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      if (search) {
      setIsLoading(true);
      const res = await fetch(`/api/openai`, {
        body: JSON.stringify({
          code: search
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }};
 
    fetchData();
  }, [search]);
  return (
    <div>
      <Head>
        <title>GPT-3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          <a>AI Lyrics Generator</a>
        </h1>

        <p>Built with NextJS & GPT-3 API</p>

        <div>
          <div>
            <h3>Enter Artist:</h3>
            <input
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setSearch(query)
          }
        >
          Generate
        </button>
        
          <h4>Lyrics</h4>  
          {isLoading ? (
            <div>Loading ...</div>
         ) : (
           <span>
           {data.text}
           </span>
           )}
        
          </div>
        </div>
      </main>
    </div>
  );
}