import styles from '../styles/Home.module.css'

export default function Gec({total, update, gpc, ...rest}){

  return (
    <p className={styles.clicker} onClick={() => update(total + gpc)}>
        gec
    </p>
  )
}