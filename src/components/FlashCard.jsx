import { useEffect, useState } from 'react';

export default function FlashCard({
  id,
  title = 'Título do card',
  description = 'Descrição do card, normalmente contém mais palavras que o título',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
}) {
  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';

  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  return (
    <div
      className={`border border-gray-100 shadow-md p-2 w-80 h-40
      font-mono text-center ${fontSizeClassName} font-semibold
      flex flex-row items-center justify-center cursor-pointer mr-2`}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
}
