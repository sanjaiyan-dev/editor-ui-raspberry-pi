import React, { useState } from "react";

import Button from "../Button/Button";
import {
  addProjectComponent,
  closeNewFileModal,
  openFile,
} from "../Editor/EditorSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { validateFileName } from "../../utils/componentNameValidation";
import InputModal from "./InputModal";

const NewFileModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const projectType = useSelector((state) => state.editor.project.project_type);
  const projectComponents = useSelector(
    (state) => state.editor.project.components,
  );
  const componentNames = projectComponents.map(
    (component) => `${component.name}.${component.extension}`,
  );

  const isModalOpen = useSelector((state) => state.editor.newFileModalShowing);
  const closeModal = () => dispatch(closeNewFileModal());

  const [fileName, setFileName] = useState("");

  const createComponent = () => {
    const name = fileName.split(".")[0];
    const extension = fileName.split(".").slice(1).join(".");
    validateFileName(fileName, projectType, componentNames, dispatch, t, () => {
      dispatch(addProjectComponent({ extension: extension, name: name }));
      dispatch(openFile(fileName));
      closeModal();
    });
  };

  return (
    <InputModal
      isOpen={isModalOpen}
      closeModal={closeModal}
      withCloseButton
      heading={t("filePanel.newFileModal.heading")}
      inputs={[
        {
          label: t("filePanel.newFileModal.inputLabel"),
          helpText: t("filePanel.newFileModal.helpText", {
            examples: t(
              `filePanel.newFileModal.helpTextExample.${projectType}`,
            ),
          }),
          value: fileName,
          setValue: setFileName,
          validateName: true,
        },
      ]}
      defaultCallback={createComponent}
      buttons={[
        <Button
          key="create"
          className="btn--primary"
          buttonText={t("filePanel.newFileModal.addFile")}
          onClickHandler={createComponent}
        />,
        <Button
          key="close"
          className="btn--secondary"
          buttonText={t("filePanel.newFileModal.cancel")}
          onClickHandler={closeModal}
        />,
      ]}
    />
  );
};

export default NewFileModal;
