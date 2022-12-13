import Square from "./square";
import styles from "../styles/line.module.css"

export default function Line(props){
    return (
        <div className={styles.line}>
        <Square black/>
        <Square />
        <Square black/>
        <Square />
        <Square black/>
        <Square />
        <Square black/>
        <Square />
       </div>
    )
}