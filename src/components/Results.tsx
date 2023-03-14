import React from 'react'
import Card from './Card';

type propsType = {
    results?: any;
    error?: string
}

export default function Results({ results, error }: propsType) {
    if (error) {
        return (
            <main className="flex-grow flex 
                justify-center
             bg-gray-700 py-10">
                <h2 className=" text-red-500 text-lg font-semibold ">
                    {error}
                </h2>
            </main>
        )
    }
    return (
        <main className="bg-gray-700 
           flex-grow
         text-gray-200 
           sm:grid 
           sm:grid-cols-2
           md:grid-cols-3
           lg:grid-cols-4
           xl:grid-cols-5
           2xl:grid-cols-6
           p-3
           gap-5
           select-none">
            {results.map((result: any) => (
                <Card key={result.id} result={result} />
            ))}
        </main>
    )
}
