import React from "react";
import Button from "../../Button/Button";
import classNames from "classnames";

const SidebarBarOption = (props) => {
  const { Icon, isActive, name, title, toggleOption } = props;

  const onClickHandler = () => {
    toggleOption(name);
    if (name === "file") {
      window.plausible("Side menu open project files");
    }
  };

  return (
    <div
      className={classNames("sidebar__bar-option-wrapper", {
        "sidebar__bar-option-wrapper--selected": isActive,
      })}
    >
      <Button
        className={classNames("sidebar__bar-option", {
          "sidebar__bar-option--selected": isActive,
        })}
        ButtonIcon={Icon}
        title={title}
        onClickHandler={onClickHandler}
      />
    </div>
  );
};

export default SidebarBarOption;
