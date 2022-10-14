import React, { useState } from "react";
import classes from "../../../styles/addmusic.module.css";
function AddmusicForm() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [royalty, setRoyalty] = useState();
  const [price, setPrice] = useState();
  const [fileUrl, setFileUrl] = useState("");

  function handleChange(e) {
    e.preventDefault();
    const {name,value}=e.target;
    if(name==="name"){
        setName(value);
    }
     if (name === "desc") {
       setDesc(value);
     }
      if (name === "price") {
        setPrice(value);
      }
       if (name === "royalty") {
         setRoyalty(value);
       }
  }
  return (
    <div className={classes.addMusic}>
      <div className={classes.input_div}>
        <label>Name</label>
        <input name="name" type="text" className={classes.inputt} />
      </div>
      <div className={classes.input_div}>
        <label>Desciption</label>
        <textarea name="desc" row={3} className={classes.inputt} />
      </div>
      <div className={classes.input_div}>
        <label>Asset Price</label>
        <input name="price" type="text" className={classes.inputt} />
      </div>
      <div className={classes.input_div}>
        <label>Royalty (in %)</label>
        <input name="royalty" type="text" className={classes.inputt} />
      </div>
      <div className={classes.input_div}>
        <input type="file" accept=".mp3" className={classes.inputt} />
      </div>
      <button className={classes.createBtn}>Create NFT</button>
    </div>
  );
}

export default AddmusicForm;
