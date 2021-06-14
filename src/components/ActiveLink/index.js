import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ children, href}) => {
    const router = useRouter()
    const style = {
        border: '1px solid',
        backgroundColor: '#fff',
        color: '#1d3557'
    }

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href)
    }

    return (
        <Link href={href} onClick={handleClick} style={style} passHref>
            {children}
        </Link>
    )
}

export default ActiveLink
