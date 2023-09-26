import React from 'react'
import styles from "./footer.module.css";
import Image from "next/image";
import Link from 'next/link';



const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Usolutions. All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://facebook.com">
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Usolutio Dev Facebook Account" />
        </Link>
        <Link href="https://google.com">
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Usolutio Dev Instagram Account" />
        </Link>
        <Link href="https://google.com">
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Usolutio Dev Twitter Account" />
        </Link>
        <Link href="https://youtube.com">
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Usolutio Dev Youtube Channel" />
        </Link>
      </div>
    </div>
  )
}

export default Footer