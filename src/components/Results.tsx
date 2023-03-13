import React from 'react'
import Card from './Card';

type propsType = {
    results?: any;
    error?: string
}

export default function Results({ results, error }: propsType) {
    console.log(results)
    if (error) {
        return (
            <main>
                <h2>
                    {error}
                </h2>
            </main>
        )
    }
    return (
        <main>
            {results.map((result: any) => (
                <Card key={result.id} result={result} />
            ))}
        </main>
    )
}
