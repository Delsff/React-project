import { useToggleWindow } from '../store/Window';
import { CloseWindow } from './OpenWindowLogin';
import { CloseWindowRegistr } from './OpenWindowRegistation';
export const ToggleWindowClick = () => {
  const { activeForms, isOpen } = useToggleWindow();
  if (!isOpen) return null;
  return (
    <>
      {activeForms === 'login' && <CloseWindow />}
      {activeForms === 'registr' && <CloseWindowRegistr />}
    </>
  );
};
