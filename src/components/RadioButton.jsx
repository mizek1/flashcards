import { serviceGetNewId } from '../services/idService';

export default function RadioButton({
  id = serviceGetNewId(),
  name = 'radio-button-name',
  children: buttonDescription = 'Descrição do botão',
  checked: buttonChecked,
  onButtonClick = null,
}) {
  function handleRadioChange() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <div className="flex flex-row items-center justify-center space-x-1">
      <input
        id={id}
        type="radio"
        name={name}
        checked={buttonChecked}
        onChange={handleRadioChange}
      />
      <label htmlFor={id}>{buttonDescription}</label>
    </div>
  );
}
