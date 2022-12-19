import Head from "next/head";
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: '<- App', href: '/' },
]

export default function About() {
  
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
                    <article class="prose lg:prose-xl">
                      <h1 className="font-bold tracking-tight sm:text-center sm:text-6xl">
                        Acerca del <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">proyecto</span>
                      </h1>
                      <p>¡Hola! Mi nombre es <a href="https://elenacalvillo.com">Elena Calvillo</a> actualmente soy Product Manager. Empecé mi carrera como desarrolladora Front-end pero, como puedes ver, me es difícil olvidarme de la programación y me gusta hacer proyectos alternos de vez en cuando.</p>
                      <p>Este proyecto de fin de semana nació con la intención de entender más sobre la inteligencia artificial y las ventajas que OpenAI puede ofrecer al mundo.</p>
                      <p>Mi alma gemela, se dedica a dar clases de programación a jóvenes de preparatoria en ITESO. Creé esta simple herramienta para ayudarlo a él y a sus estudiantes a entender código fácilmente con ayuda de la inteligencia artificial.</p>
                      <h3>Detrás del nombre <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Leo</span></h3>
                      <span className="flex justify-center not-prose">
                        <Image
                          src="/real-leo.png"
                          alt="Leo Pawie Walking"
                          width={250}
                          height={250}
                        />
                      </span>
                      <p>Leo es el nombre de mi gato naranja. Pensé que hacer un juego de palabras en español con su nombre sería divertido para los jóvenes y, además, ayudaría a describir tal cual lo que esta aplicación hace: leer código.</p>
                      
                    </article>
                    
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