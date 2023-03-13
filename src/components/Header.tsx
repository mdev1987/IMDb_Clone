import Image from "next/image";
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon, } from '@heroicons/react/20/solid'
import IMDb from "../../public/assets/images/imdb.png";
import HeaderIcon from "./HeaderIcon";

export default function Header() {
    return (
        <header>
            <div className="">
                <HeaderIcon title="HOME" Icon={HomeIcon} />
                <HeaderIcon title="ACCOUNT" Icon={UserIcon} />
                <HeaderIcon title="CONTACT" Icon={PhoneIcon} />
                <HeaderIcon title="ABOUT" Icon={InformationCircleIcon} />
            </div>
            <Image src={IMDb}
                placeholder={'blur'} alt="IMDb"
                className="w-28 h-28 object-cover" />
        </header>
    )
}
