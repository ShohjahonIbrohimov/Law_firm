import React, { useState } from "react";
import styles from "../../styles/NewsAddForm.module.css";

const NewsAddForm = () => {
  // const { setnews, news } = useContext(NewsContext);
  const [news, setnews] = useState([]);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const handleAddNews = (e) => {
    e.preventDefault();
    setnews([...news, { title, body }]);
  };

  return (
    <form className={styles.form_wrapper}>
      <input
        onChange={(e) => settitle(e.target.value)}
        value={title}
        className={styles.margin}
        type='text'
        placeholder='Sarlavha'
      />
      <textarea
        onChange={(e) => setbody(e.target.value)}
        value={body}
        className={styles.margin}
        name=''
        id=''
        cols='30'
        rows='10'
      ></textarea>
      <button onClick={handleAddNews} className='glb_btn'>
        Qo'shish
      </button>
    </form>
  );
};

export default NewsAddForm;
