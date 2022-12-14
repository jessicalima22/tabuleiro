import Square from "./square";
import styles from "../styles/line.module.css"

export default function Line(props){
    return (
        <div className={styles.line}>
        <Square black={props.black} />
        <Square black={!props.black}/>
        <Square black={props.black} />
        <Square black={!props.black}/>
        <Square black={props.black} />
        <Square black={!props.black}/>
        <Square black={props.black} />
        <Square black={!props.black}/>
       </div>
    )
}