"use client"

import styles from './page.module.css';
import Card from './_components/card';
import { useEffect, useState } from 'react';
import data from "./_data/weather.json"

export default function WeatherPage(props) {
  const [wData, setwData] = useState([])
  useEffect(() => {
    // 寫法一
    // async function _getData(){
    //   await fetch()
    // }
    // _getData()
    // 立即執行函式
    (async ()=>{
      const res = await fetch("http://localhost:3005/weather")
      const result =await res.json();
      // console.log(result);
      setwData(result);
    })();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.bgi}></div>
        <div className={styles.content}>
          <div className={`${styles.item} ${styles.item1}`}>
            <img src="/images/wsun.png" alt="" />
          </div>
          <div className={`${styles.item} ${styles.item2}`}>
            <div>Partly Cloudy</div>
            <div>May, 25th, Mon</div>
            <div></div>
            <div>
              <span>RealFeel</span><span>25°C/76°F</span>
            </div>
            <div>
              <span>Humudity</span><span>61%</span>
            </div>
          </div>
          <div className={`${styles.item} ${styles.item3}`}>
            <div>
              <span>27°C/87°F</span>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={`${styles.row} ${styles.row1}`}>
          {wData.map((v, i) => (
            <Card key={i} data={v} />
          ))}

        </div>
      </main>
    </>
  )
}