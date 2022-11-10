import './NewComponentButton.scss';

import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { addProjectComponent, setNameError } from '../EditorSlice';
import Button from '../../Button/Button'
import NameErrorMessage from '../ErrorMessage/NameErrorMessage';
import { CloseIcon, NewFileIcon } from '../../../Icons';
import { validateFileName } from '../../../utils/componentNameValidation';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';

const NewComponentButton = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const projectType = useSelector((state) => state.editor.project.project_type)
    const projectComponents = useSelector((state) => state.editor.project.components);
    const componentNames = projectComponents.map(component => `${component.name}.${component.extension}`)

    const [cookies] = useCookies(['fontSize', 'theme'])
    const isDarkMode = cookies.theme==="dark" || (!cookies.theme && window.matchMedia("(prefers-color-scheme:dark)").matches)
    const theme = isDarkMode ? "dark" : "light"

    const closeModal = () => setIsOpen(false);
    const showModal = () => {
      dispatch(setNameError(""));
      setIsOpen(true)
    };
    const createComponent = () => {
      const fileName = document.getElementById('name').value
      const name = fileName.split('.')[0];
      const extension = fileName.split('.').slice(1).join('.');
      validateFileName(fileName, projectType, componentNames, dispatch, t, () => {
        dispatch(addProjectComponent({extension: extension, name: name}));
        closeModal();
      })
    }

    return (
      <div className={`--${theme}`}>
        <Button buttonText={t('filePane.newFileButton')} ButtonIcon={NewFileIcon} onClickHandler={showModal} className="proj-new-component-button" />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="New File"
          className='modal__content'
          overlayClassName='modal__overlay'
          parentSelector={() => document.querySelector('#app')}
          appElement={document.getElementById('app') || undefined}
        >
          <div className='modal__header'>
            <h2>{t('filePane.newFileModal.heading')}</h2>
            <button onClick={closeModal}>
              <CloseIcon/>
            </button>
          </div>

          <label htmlFor='name'>{t('filePane.newFileModal.inputLabel')}</label>
          <NameErrorMessage />
          <input type='text' name='name' id='name'></input>
          <div className='modal__buttons'>
            <Button className='btn--secondary' buttonText={t('filePane.newFileModal.cancel')} onClickHandler={closeModal} />
            <Button buttonText={t('filePane.newFileModal.save')} onClickHandler={createComponent} />
          </div>

        </Modal>
      </div>
    );
  }

export default NewComponentButton;
