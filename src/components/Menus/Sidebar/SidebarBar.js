import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { DoubleChevronLeft, DoubleChevronRight } from "../../../Icons";
import Button from "../../Button/Button";
import SidebarBarOption from "./SidebarBarOption";
import htmlLogo from "../../../assets/html_icon.svg";
import pythonLogo from "../../../assets/python_icon.svg";

const SidebarBar = (props) => {
  const { menuOptions, option, toggleOption } = props;
  const project = useSelector((state) => state.editor.project);
  const { t } = useTranslation();
  const topMenuOptions = menuOptions.filter(
    (menuOption) => menuOption.position === "top",
  );
  const bottomMenuOptions = menuOptions.filter(
    (menuOption) => menuOption.position === "bottom",
  );

  const expandPopOut = () => {
    toggleOption("file");
    window.plausible("Expand file pane");
  };

  const collapsePopOut = () => {
    toggleOption(option);
    window.plausible("Collapse file pane");
  };

  return (
    <div className={`sidebar__bar${option ? " sidebar__bar--selected" : ""}`}>
      <div className={`sidebar__bar-options--top`}>
        <img
          className="editor-logo"
          src={project.project_type === "python" ? pythonLogo : htmlLogo}
          alt={t("header.editorLogoAltText")}
        />
        {topMenuOptions.map((menuOption, i) => (
          <SidebarBarOption
            key={i}
            Icon={menuOption.icon}
            title={menuOption.title}
            isActive={option === menuOption.name}
            toggleOption={toggleOption}
            name={menuOption.name}
          />
        ))}
      </div>
      <div className={`sidebar__bar-options--bottom`}>
        {bottomMenuOptions.map((menuOption, i) => (
          <SidebarBarOption
            key={i}
            Icon={menuOption.icon}
            title={menuOption.title}
            isActive={option === menuOption.name}
            toggleOption={toggleOption}
            name={menuOption.name}
          />
        ))}
        {option ? (
          <Button
            className="btn--tertiary"
            ButtonIcon={DoubleChevronLeft}
            title={t("sidebar.collapse")}
            buttonOuter
            buttonOuterClassName="sidebar-collapse-button"
            onClickHandler={collapsePopOut}
          />
        ) : (
          <Button
            className="btn--tertiary"
            ButtonIcon={DoubleChevronRight}
            title={t("sidebar.expand")}
            buttonOuter
            buttonOuterClassName="sidebar-expand-button"
            onClickHandler={expandPopOut}
          />
        )}
      </div>
    </div>
  );
};

export default SidebarBar;
