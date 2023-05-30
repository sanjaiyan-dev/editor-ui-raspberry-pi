import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Button from "../Button/Button";
import "../../Modal.scss";
import {
  closeAccessDeniedWithAuthModal,
  syncProject,
} from "../Editor/EditorSlice";
import { defaultPythonProject } from "../../utils/defaultProjects";
import GeneralModal from "./GeneralModal";

const AccessDeniedWithAuthModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const user = useSelector((state) => state.auth.user);

  const isModalOpen = useSelector(
    (state) => state.editor.accessDeniedWithAuthModalShowing,
  );
  const closeModal = () => dispatch(closeAccessDeniedWithAuthModal());

  const createNewProject = async () => {
    dispatch(
      syncProject("save")({
        project: defaultPythonProject,
        accessToken: user.access_token,
        autosave: false,
      }),
    );
  };

  return (
    <GeneralModal
      isOpen={isModalOpen}
      closeModal={closeModal}
      withCloseButton
      heading={t("project.accessDeniedWithAuthModal.heading")}
      text={[
        {
          type: "paragraph",
          content: t("project.accessDeniedWithAuthModal.text"),
        },
      ]}
      buttons={[
        <Button
          className="btn--primary"
          buttonText={t("project.accessDeniedWithAuthModal.newProject")}
          onClickHandler={createNewProject}
        />,
        <a
          className="btn btn--secondary"
          href="https://projects.raspberrypi.org"
        >
          {t("project.accessDeniedWithAuthModal.projectsSiteLinkText")}
        </a>,
      ]}
      defaultCallback={createNewProject}
    />
  );
};

export default AccessDeniedWithAuthModal;
