import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import NavbarBrand from '@nextui-org/react/types/navbar/navbar-brand'
import { NextUIProvider } from '@nextui-org/react'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <NextUIProvider>
        <div className='home'>Home</div>
      </NextUIProvider>
    </React.Fragment>
  )
}

export default Home
