import { RiMessageFill } from "react-icons/ri";
// import { FaPhone } from "react-icons/fa6";
import styles from "./Button.module.css"
function Button(props) {
   
  return (
    <button className={ props.isOutline ? styles.outline_btn :styles.primary_btn}>
      {props.icon}
      {props.text}
    </button>
  )
}

export default Button
