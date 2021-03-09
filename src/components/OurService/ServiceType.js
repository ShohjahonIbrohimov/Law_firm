import React, { useState } from "react";
import styles from "../../styles/Service.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ServiceType = ({
  category,
  saveToDb,
  handleUpdate,
  handleDelete,
  save,
  setsave,
}) => {
  const [expand, setexpand] = useState(false);
  const [categoryTitle, setcategoryTitle] = useState(category.title);
  const [categoryContent, setcategoryContent] = useState(category.content);

  const handleEdit = () => {
    setsave(false);
  };

  const update = () => {
    handleUpdate(categoryTitle, categoryContent, category.number);
    setsave(true);
  };

  return (
    <div className={styles.servicetype}>
      <div className={`${styles.service_accordion}`}>
        <input
          disabled={save}
          className={`${styles.title} ${save ? styles.title_done_edit : ""}`}
          type='text'
          value={categoryTitle}
          onChange={(e) => setcategoryTitle(e.target.value)}
          style={{ fontSize: "0.8rem", width: "100%" }}
        />
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
            onClick={() => (save ? handleEdit() : update())}
            className={styles.acordion_icon}
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
          disabled={save}
          editor={ClassicEditor}
          data={categoryContent}
          onChange={(event, editor) => {
            const data = editor.getData();
            setcategoryContent(data);
          }}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default ServiceType;
