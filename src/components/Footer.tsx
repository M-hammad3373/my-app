import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return(
<footer>
<div className='flex gap-6 p-6 bg-blue-300 marginTop ="50px"' >
         
         <Link href=""> Home</Link>
         <Link href="about"> about us</Link>
         <Link href="blog"> blog </Link>
         <Link href="contact"> contact us </Link>
       

       </div>
</footer>
 
)
}

export default Footer