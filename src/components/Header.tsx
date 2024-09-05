
import React from 'react'

import Link from 'next/link'

interface Props {}

function Header(props: Props) {
    const {} = props

    return (
        <div className='flex gap-6 p-6 bg-blue-300'>
         
          <Link href=""> Home</Link>
          <Link href="about"> about us</Link>
          <Link href="blog"> blog </Link>
          <Link href="contact"> contact us </Link>
        </div>
    )
}

export default Header

