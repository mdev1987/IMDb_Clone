import Image from "next/image";
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon, } from '@heroicons/react/20/solid'
import IMDb from "../../public/assets/images/IMDb.png";
import HeaderIcon from "./HeaderIcon";

export default function Header() {
    return (
        <header className="bg-gray-700 text-gray-200 
                            flex flex-col items-center                             
                            p-6 select-none
                            justify-between
                            sm:flex-row">
            <div className="flex">
                <HeaderIcon title="HOME" Icon={HomeIcon} />
                <HeaderIcon title="ACCOUNT" Icon={UserIcon} />
                <HeaderIcon title="CONTACT" Icon={PhoneIcon} />
                <HeaderIcon title="ABOUT" Icon={InformationCircleIcon} />
            </div>
            <Image src={IMDb}
                placeholder={'blur'} alt="IMDb"
                className="w-28 h-28 
                cursor-pointer
                active:brightness-110
                object-contain" />
        </header>
    )
}
