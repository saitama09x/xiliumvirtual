import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Home } from '@components/home-component'

class MainApp extends React.Component  {
  
  render(){

    return (
        <>
            <Home />
        </>
    )
  }

}

export default MainApp