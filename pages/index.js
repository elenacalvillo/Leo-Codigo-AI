import Head from "next/head";
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About ->', href: '/about' },
]

export default function Home() {
  const [data, setData] = useState( { text:'' });
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const resetAll = () => {
    setQuery(""); //Clears the TextArea
  };
 
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
        <title>Leo Código | Entiende código con Inteligencia Artificial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
        <div className="isolate bg-white">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="px-6 pt-6 lg:px-8">
            <div>
              <nav
                className="flex h-9 items-center justify-between"
                aria-label="Global"
              >
                <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                  <a
                    href="#"
                    className="-m-1.5 p-1.5 flex items-center justify-between"
                  >
                    <Image
                      src="/leo.svg"
                      alt="Leo Pawie Walking"
                      width={70}
                      height={50}
                    />
                    <span className="font-bold p-3">Leo Código</span>
                  </a>
                </div>
    
                <div className="flex justify-center gap-x-12">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-semibold text-gray-900 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                  <div className="relative rounded-full py-1 px-3 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span className="text-gray-600">
                      Ver repo en{" "}
                      <a href="https://github.com/elenacalvillo/Leo-Codigo-AI" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Github <span aria-hidden="true">&rarr;</span>
                      </a>
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
    
          <main>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-32 sm:pb-40">
                <div>
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                      Entiende código con ayuda de la{" "}
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                        Inteligencia Artificial
                      </span>
                    </h1>
    
                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                      ¿No sabes qué hace esta función? Pregúntale a la IA:
                    </p>
                    <div className="relative w-full h-48 mt-5">
                      <div class="absolute top-0 left-20 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                        <div class="shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <div>
                          <div class="text-lg text-slate-600">¿Qué hace print('Hello, world!') ?</div>
                        </div>
                      </div>
                      <div class="absolute bottom-0 right-20 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                        <div class="shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                          </svg>
                        </div>
                        <div>
                          <p class="text-slate-600">La función print() muestra en pantalla el texto que se le pasa como argumento.</p>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <form id="codeBlock" className="pt-20">
                    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 shadow-lg">
                      <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                        <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                          <div class="flex items-center space-x-1 sm:pr-4">
                            <h4>Inserta tu código aquí 👇</h4>
                          </div>
                          <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                            <small class="text-gray-400">
                              ¿Qué código quieres entender hoy?
                            </small>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="flex p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        onClick={resetAll}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                          </svg>
                          <span className="text-sm p-1">Borrar</span>
                        </button>
                      </div>
                      <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                        <textarea
                          id="editor"
                          rows="8"
                          class="block w-full px-0 text-sm text-gray-600 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                          placeholder="Pega aquí el código..."
                          required
                          value={query}
                          onChange={(event) => setQuery(event.target.value)}></textarea>
                      </div>
                    </div>
                  </form>
                  
                  <div className="grid justify-items-end">
                    <button
                      type="button"
                      class="rounded-lg bg-violet-600 px-4 py-2 text-md font-bold text-white ring-1 ring-violet-600 hover:bg-violet-700 hover:ring-violet-700 shadow-lg"
                      onClick={() => setSearch(query)}>
                      Explicar código
                      <span className="text-indigo-200" aria-hidden="true">
                        &nbsp; &rarr;
                      </span>
                    </button>
                  </div>
    
                  <div class="w-full mt-20 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 shadow-lg">
                    <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                      <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                        <div class="flex items-center space-x-1 sm:pr-4">
                          <h4>Esto es lo que hace el código</h4>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                          <small class="text-gray-400">
                            Encuentra la explicación abajo.
                          </small>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="flex p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      onClick={()=>navigator.clipboard.writeText(data.text)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                          />
                        </svg>
    
                        <span className="text-sm p-1">Copiar</span>
                      </button>
                    </div>
                    <div className="bg-white rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                        {isLoading ? (
                          <div className="p-3 grid gap-4 flex justify-center">
                            <Image
                              src="/leo-walking.gif"
                              alt="Leo Pawie Walking"
                              width={300}
                              height={300}
                            />
                            <h4 className="text-xl font-bold text-gray-700">
                              {" "}
                              Dame un momento para analizarlo...{" "}
                            </h4>
                          </div>
                        ) : (
                          <article className="proseMirror">
                            <pre className="block whitespace-pre-wrap">
                              {data.text}
                            </pre>
                          </article>
                        )}
                      </div>
                    </div>
                  </div>
    
                  <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg
                      className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                      viewBox="0 0 1155 678"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                      />
                      <defs>
                        <linearGradient
                          id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                          x1="1155.49"
                          x2="-78.208"
                          y1=".177"
                          y2="474.645"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#9089FC" />
                          <stop offset={1} stopColor="#FF80B5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}