import { PropsWithChildren } from "react";

interface props extends PropsWithChildren {
    justify: keyof typeof justifyStyle
    isAbsolute?: boolean
    className?: string
}

const justifyStyle = {
    between: 'justify-between py-0.5 px-4',
    start: 'justify-start py-2 px-4 ',
    end: 'justify-end py-2 px-4',
} as const

const Header = ({ justify, children, isAbsolute, className }: props) => {
    const style = justifyStyle[justify]
    return (
        <div className={`${className} w-full flex ${style} items-center z-40 ${isAbsolute ? 'absolute top-0' : ''}`}>
            {children}
        </div>
    )
}

export default Header;