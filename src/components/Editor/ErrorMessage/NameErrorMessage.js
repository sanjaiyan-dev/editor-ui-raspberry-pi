import './ErrorMessage.css'
import { useSelector } from 'react-redux'

const NameErrorMessage = () => {
  const error = useSelector((state) => state.editor.nameError);

  return error ? (
    <div className='error-message'>
      <p className='error-message--content'>{ error }</p>
    </div>
  ) : null;
};

export default NameErrorMessage;