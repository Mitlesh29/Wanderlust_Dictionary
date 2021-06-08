import { useRef } from "react";
import classes from "./MeetupForm.module.css";
import Card from "../ui/Card";

function MeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function SubmitHandler(event) {
    event.preventDefault();
    const EnteredTitle = titleRef.current.value;
    const EnteredImage = imageRef.current.value;
    const EnteredAddress = addressRef.current.value;
    const EnteredDescription = descriptionRef.current.value;

    const MeetupData = {
      title: EnteredTitle,
      image: EnteredImage,
      address: EnteredAddress,
      description: EnteredDescription,
    };
    props.onAddMeetup(MeetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Destination name</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image Link</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;
