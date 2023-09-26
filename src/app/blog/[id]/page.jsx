import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';


const BlogPost = () => {
  // const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellendus voluptate quam aliquam dolore eos eaque sit placeat iste necessitatibus non quibusdam quia veniam, commodi at. Dolorem voluptatum inventore ducimus!
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Span text</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src=""
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellendus voluptate quam aliquam dolore eos eaque sit placeat iste necessitatibus non quibusdam quia veniam, commodi at. Dolorem voluptatum inventore ducimus!
        </p>
      </div>
    </div>
  );
};

export default BlogPost