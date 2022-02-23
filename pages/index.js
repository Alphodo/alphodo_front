import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './component/Footer/Footer'
export default function Home() {
  return (
      <>
        <Footer/>
        <div className={styles.container}>

        </div>
      </>
  )
}
