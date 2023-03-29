import Card from "./Card.js";
import Button from "./Button.js";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
    <div className={classes.backdrop} onClick={props.onConfirm}/>
      <Card className={classes.modal}>
        <header classname={classes.header}>
          <h2 className={classes.h2}>{props.title}</h2>
        </header>
        <div classname={classes.content}>
          <p>{props.message}</p>
        </div>

        <footer classname={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
