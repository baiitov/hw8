import Button from "./Button"
import Card from "./Card"
import classes from './ErrorModule.module.css'
import ReactDOM from 'react-dom';



const BackDrop = props=>{
    return <div onClick={props.onConfirm} className={classes.backdrop} />
}

const ModalOverlay = (props)=>{
    return (
                     
        <Card className={classes.modal}>

            <header className={classes.header}>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className={classes.content}>
                <p>{props.messega}</p>
            </div>
            <footer className={classes.actions}>
                {props.children}
               <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        
    )
}

const ErrorModal = (props)=>{
   return(
       <>
       {
           ReactDOM.createPortal(
               <BackDrop  onConfirm={props.onConfirm}/>,
               document.getElementById('backdrop-root')
           )
       }
       {
           ReactDOM.createPortal(
               <ModalOverlay title={props.title} onConfirm={props.onConfirm} children={props.children} messega={props.messega}/>,
               document.getElementById('modal-root')
           )
       }
       
       </>
   )
}
export default ErrorModal