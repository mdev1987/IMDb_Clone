import React from 'react'

type propsType = {
    results?: any;
    error?: string
}

export default function Results({ results, error }: propsType) {
    console.log(results)
    if (error) {
        return (
            <h2>
                {error}
            </h2>
        )
    }
    return (
        <div>
            {results.results.map((result: any) => (
                <h2>{result.title}</h2>
            ))}
        </div>
    )
}
