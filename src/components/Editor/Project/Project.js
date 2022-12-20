/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import 'react-toastify/dist/ReactToastify.css'

import './Project.scss';
import EditorPanel from '../EditorPanel/EditorPanel'
import FilePane from '../../FilePane/FilePane'
import Output from '../Output/Output'
import RenameFile from '../../Modals/RenameFile'
import RunnerControls from '../../RunButton/RunnerControls'
import { expireJustLoaded, setHasShownSavePrompt, syncProject } from '../EditorSlice';
import { isOwner } from '../../../utils/projectHelpers'
import NotFoundModal from '../../Modals/NotFoundModal';
import AccessDeniedNoAuthModal from '../../Modals/AccessDeniedNoAuthModal';
import AccessDeniedWithAuthModal from '../../Modals/AccessDeniedWithAuthModal';
import { showLoginPrompt, showSavePrompt } from '../../../utils/Notifications';

const Project = (props) => {
  const dispatch = useDispatch()
  const { forWebComponent } = props;
  const user = useSelector((state) => state.auth.user)
  const project = useSelector((state) => state.editor.project)
  const modals = useSelector((state) => state.editor.modals)
  const renameFileModalShowing = useSelector((state) => state.editor.renameFileModalShowing)
  const notFoundModalShowing = useSelector((state) => state.editor.notFoundModalShowing)
  const accessDeniedNoAuthModalShowing = useSelector((state) => state.editor.accessDeniedNoAuthModalShowing)
  const accessDeniedWithAuthModalShowing = useSelector((state) => state.editor.accessDeniedWithAuthModalShowing)
  const justLoaded = useSelector((state) => state.editor.justLoaded)
  const hasShownSavePrompt = useSelector((state) => state.editor.hasShownSavePrompt)

  useEffect(() => {
    if (forWebComponent) {
      return
    }
  
    let debouncer = setTimeout(() => {
      if (isOwner(user, project) && project.identifier) {
        dispatch(syncProject('save')({ project, accessToken: user.access_token, autosave: true }));
      }
      else {
        localStorage.setItem(project.identifier || 'project', JSON.stringify(project))
        if (justLoaded) {
          dispatch(expireJustLoaded())
        } else if (!hasShownSavePrompt) {
          user ? showSavePrompt() : showLoginPrompt()
          dispatch(setHasShownSavePrompt())
        }
      }
    }, 2000);
     
    return () => clearTimeout(debouncer)
  }, [dispatch, forWebComponent, project, user])

  return (
    <div className='proj'>
      <div className={`proj-container${forWebComponent ? ' proj-container--wc': ''}`}>
      {!forWebComponent ? <FilePane /> : null}
        <div className='proj-editor-container'>
          <Tabs>
            <TabList>
              { project.components.map((file, i) => (
                  <Tab key={i}>{file.name}.{file.extension}</Tab>
                )
              )}
            </TabList>
            { project.components.map((file,i) => (
              <TabPanel key={i}>
                <EditorPanel fileName={file.name} extension={file.extension} />
              </TabPanel>
              )
            )}
            <RunnerControls />
          </Tabs>
        </div>
        <Output />
      </div>
      {(renameFileModalShowing && modals.renameFile) ? <RenameFile /> : null}
      {(notFoundModalShowing) ? <NotFoundModal /> : null}
      {(accessDeniedNoAuthModalShowing) ? <AccessDeniedNoAuthModal /> : null}
      {(accessDeniedWithAuthModalShowing) ? <AccessDeniedWithAuthModal /> : null}
    </div>
  )
};

export default Project;

