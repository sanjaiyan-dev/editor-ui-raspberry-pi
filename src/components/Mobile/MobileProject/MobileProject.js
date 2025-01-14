import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EditorInput from "../../Editor/EditorInput/EditorInput";
import Output from "../../Editor/Output/Output";
import MobileProjectBar from "./../MobileProjectBar/MobileProjectBar";

import "./MobileProject.scss";
import { useDispatch, useSelector } from "react-redux";
import { CodeIcon, PreviewIcon, MenuIcon } from "../../../Icons";
import { useTranslation } from "react-i18next";
import Sidebar from "../../Menus/Sidebar/Sidebar";
import { showSidebar } from "../../Editor/EditorSlice";
import Button from "../../Button/Button";

const MobileProject = ({ forWebComponent }) => {
  const projectType = useSelector((state) => state.editor.project.project_type);
  const sidebarShowing = useSelector((state) => state.editor.sidebarShowing);
  const codeRunTriggered = useSelector(
    (state) => state.editor.codeRunTriggered,
  );
  const [selectedTab, setSelectedTab] = useState(0);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const openSidebar = () => dispatch(showSidebar());

  useEffect(() => {
    if (codeRunTriggered) {
      setSelectedTab(1);
    }
  }, [codeRunTriggered]);

  return (
    <div className="proj-container proj-editor-container proj-container--mobile">
      {sidebarShowing && <Sidebar />}
      <Tabs
        forceRenderTabPanel={true}
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <TabPanel>
          <EditorInput />
        </TabPanel>
        <TabPanel>
          <Output />
        </TabPanel>
        <MobileProjectBar />
        <div className="react-tabs__tab-container mobile-nav">
          {!forWebComponent && (
            <Button
              className="btn--tertiary mobile-nav__menu"
              ButtonIcon={MenuIcon}
              onClickHandler={openSidebar}
            />
          )}
          <TabList>
            <Tab>
              <CodeIcon />
              <span className="react-tabs__tab-text">{t("mobile.code")}</span>
            </Tab>
            <Tab>
              <PreviewIcon />
              <span className="react-tabs__tab-text">
                {projectType === "html"
                  ? t("mobile.preview")
                  : t("mobile.output")}
              </span>
            </Tab>
          </TabList>
        </div>
      </Tabs>
    </div>
  );
};

export default MobileProject;
