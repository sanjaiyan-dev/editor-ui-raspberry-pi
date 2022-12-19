import './App.scss';
import './utils/Notifications.scss';

import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { SettingsContext } from './settings';
import Header from './components/Header/Header'
import Routes from './components/Routes'
import GlobalNav from './components/GlobalNav/GlobalNav';
import Footer from './components/Footer/Footer';
import BetaBanner from './components/BetaBanner/BetaBanner';
import BetaModal from './components/Modals/BetaModal';
import LoginToSaveModal from './components/Modals/LoginToSaveModal';
import { showSavedMessage } from './utils/Notifications';
import ToastCloseButton from './utils/ToastCloseButton';

function App() {
  const isEmbedded = useSelector((state) => state.editor.isEmbedded);
  const [cookies] = useCookies(['theme', 'fontSize'])
  const themeDefault = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"

  const saving = useSelector((state) => state.editor.saving)
  const autosave = useSelector((state) => state.editor.lastSaveAutosave)

  useEffect(() => {
    if (saving === 'success' && autosave === false) {
      showSavedMessage()
    }
  }, [saving, autosave])

  return (
    <div 
    id='app'
    className = {`--${cookies.theme || themeDefault } font-size-${cookies.fontSize || 'small' }`}>
      
      <SettingsContext.Provider value={{theme: cookies.theme || themeDefault, fontSize: cookies.fontSize || 'small' }}>
        <ToastContainer enableMultiContainer containerId='top-center' position='top-center' className='toast--top-center' closeButton={ToastCloseButton}/>
        <BrowserRouter>
          { isEmbedded ? null : <><GlobalNav/><BetaBanner/><Header/></> }
          <Routes />
          { isEmbedded ? null : <Footer/> }
          <BetaModal/>
          <LoginToSaveModal/>
        </BrowserRouter>
        <ToastContainer enableMultiContainer containerId='bottom-center' position='bottom-center' className='toast--bottom-center' />
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
