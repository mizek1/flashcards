import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from 'react-icons/ai';

export default function FlashCardItem({
  children: flashCard,
  onDelete = null,
  onEdit = null,
}) {
  const { title, description } = flashCard;

  function handleDeleteClick() {
    if (onDelete) {
      onDelete(flashCard.id);
    }
  }

  return (
    <div className="border font-semibold p-2 m-2 rounded-md">
      <ul className="flex flex-col space-y-3">
        <li>
          <strong>Título:</strong> <span>{title}</span>
        </li>
        <li>
          <strong>Descrição:</strong> <span>{description}</span>
        </li>
        <div className="mt-4 flex flex-row items-center justify-end space-x-2">
          <EditIcon className="cursor-pointer" size="16" />
          <DeleteIcon
            onClick={handleDeleteClick}
            className="cursor-pointer"
            size="16"
          />
        </div>
      </ul>
    </div>
  );
}
