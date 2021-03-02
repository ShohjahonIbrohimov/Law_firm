import React, { useState } from "react";
import styles from "../styles/Service.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import services2 from "../assets/services.json";

const ServiceType = ({ category, data, handleDelete, saveToDb }) => {
  const [expand, setexpand] = useState(false);
  const [categoryName, setcategoryName] = useState(category.name);
  const [save, setsave] = useState(true);

  const handleEdit = () => {
    setsave(!save);
  };

  return (
    <div className={styles.servicetype}>
      <div className={`${styles.service_accordion}`}>
        <input
          disabled={save}
          className={`${styles.title} ${save ? styles.title_done_edit : ""}`}
          type='text'
          value={categoryName}
          onChange={(e) => setcategoryName(e.target.valu)}
        />
        {/* <h5 className={styles.title}>{category.name}</h5> */}
        <div className={styles.actions}>
          <div
            className={`${styles.acordion_icon_del} ${styles.acordion_icon}`}
            onClick={() => handleDelete(category.number)}
          >
            <i
              className='bx bxs-chevron-right bx-sm acordion_icon'
              style={{ color: "white" }}
              class='bx bxs-trash-alt'
            ></i>
          </div>
          <div
            className={styles.acordion_icon}
            onClick={handleEdit}
            style={{ margin: "0 0.3rem" }}
          >
            {save && (
              <i class='bx bxs-edit bx-sm' style={{ color: "white" }}></i>
            )}
            {!save && (
              <i
                class='bx bx-check-circle bx-sm'
                style={{ color: "white" }}
              ></i>
            )}
          </div>
          <div
            className={styles.acordion_icon}
            onClick={() => setexpand(!expand)}
          >
            <i
              className='bx bxs-chevron-right bx-sm acordion_icon'
              style={{ color: "white" }}
            ></i>
          </div>
        </div>
      </div>

      <div
        className={`${styles.docx_iframe} ${expand ? styles.expand : ""} ${
          saveToDb ? "CK_editor" : ""
        }`}
      >
        <CKEditor
          // className={saveToDb ? "ck_editor" : ""}
          disabled={save}
          editor={ClassicEditor}
          data={data}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default ServiceType;
