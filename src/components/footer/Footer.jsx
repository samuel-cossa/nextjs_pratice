import React from 'react'
import styles from "./footer.module.css";
import Image from "next/image";



const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Usolutions. All rights reserved.</div>
      <div className={styles.social}>
        <a href="https://facebook.com">
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Usolutio Dev Facebook Account" />
        </a>
        <a href="https://google.com">
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Usolutio Dev Instagram Account" />
        </a>
        <a href="https://google.com">
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Usolutio Dev Twitter Account" />
        </a>
        <a href="https://youtube.com">
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Usolutio Dev Youtube Channel" />
        </a>
      </div>
    </div>
  )
}

export default Footer