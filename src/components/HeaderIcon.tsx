type props = {
    title: string;
    Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
}
export default function HeaderIcon({ title, Icon }: props) {
    return (
        <div className="mx-4 flex flex-col 
                      hover:text-white cursor-pointer 
                      lg:mx-6 active:text-red-400">
            <Icon className="h-8" />
            <p className="my-2">{title}</p>
        </div>
    )
}
