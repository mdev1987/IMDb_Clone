import { HandThumbUpIcon, StarIcon } from "@heroicons/react/20/solid";
import Image, { ImageLoader, ImageLoaderProps } from "next/image";
const BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face"

const posterLoader: ImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${BASE_URL}${src}`;
}


export default function Card({ result }: { result: any }) {
  const image_url = `${BASE_URL}${result.poster_path}`
  return (
    <div className="cursor-pointer 
    hover:text-white 
    select-none             
    items-center
    rounded
    hover:scale-105
    transition-transform
    duration-200
    justify-items-center
    border-blue-500
    active:text-red-400">
      <Image src={result.poster_path} alt={result.title || result.name}
        loader={posterLoader}
        width={230}
        height={350}
        className="w-full rounded-t" />
      <div className="p-3">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
          <div className="flex">
            <StarIcon className="h-5 mr-1" />
            <p>{result.vote_average}</p>
          </div>
        </div>
        <p className="truncate">{result.overview}</p>
        <p className="flex items-center">{result.release_date || result.first_air_date}
          <HandThumbUpIcon className="h-5 ml-3 mr-1" />
          {result.vote_count}
        </p>
      </div>
    </div>
  )
}
