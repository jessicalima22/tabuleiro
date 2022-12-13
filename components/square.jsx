import styles from '../styles/square.module.css'

export default function Square (props){
return(
    <div className={styles.square} style = {{backgroundColor: props.black ? "#000" : "#fff"}}>

    </div>
)
}