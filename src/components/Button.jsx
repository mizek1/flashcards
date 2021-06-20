export default function Button({
  children: description = 'Descrição do botão',
  onButtonClick = null,
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      className="border border-blue-600 p-2 rounded-md bg-blue-300 shadow-sm text-sm mb-2"
      onClick={handleButtonClick}
    >
      {description}
    </button>
  );
}
