import React from 'react'

type props = {
    title: string;
    Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
}
export default function HeaderIcon({ title, Icon }: props) {
    return (
        <div>
            <Icon className="h-8" />
            <p>{title}</p>
        </div>
    )
}
