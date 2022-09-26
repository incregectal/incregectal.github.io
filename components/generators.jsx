import styles from '../styles/Home.module.css'

export default function Generators({total, update, ...rest}){
  
  // gcr is a shorthand for gecerator and will be used universally
  const gcrValues = {
    gcr1: 1
  }

  return (
    <p className={styles.clicker} onClick={() => update(total + gcrValues.gcr1)}>
        gec
    </p>
  )
}