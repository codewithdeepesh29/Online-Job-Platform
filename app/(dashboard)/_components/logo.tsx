import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return <Image
    height= {100}
    width={100}
    alt='Logo'
    src="/img/logo.jpg"
  />
}
