import { HandThumbUpIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
const BASE_URL = "https://image.tmdb.org/t/p/original"

export default function Card({ result }: { result: any }) {

  return (
    <div>
      <Image src={`${BASE_URL}${result.poster_path}`} alt={result.title}
        width={200} height={100}
        className="rounded" />
      <div className="">
        <h2>{result.title} <span>{result.vote_average}</span></h2>
        <p className="truncate">{result.overview}</p>
        <p>{result.release_date}
          <HandThumbUpIcon className="h-5" />
          {result.vote_count}
        </p>
      </div>
    </div>
  )
}
