"use client";
import styles from '../../page.module.css';

export default function Card({data={}}){
  return(
    <>
       <div className={`${styles.col} ${styles.col1}`}>
          <div>
            <img src={`/images/${data.icon}`} alt=""/>
          </div>
          <div>
            <div>{data.week}</div>
            <div>{data.date}</div>
            <div>{data.tem}</div>
          </div>
        </div>
    </>
  )
}