export default function FlashCards({ children: flashcards }) {
  return (
    <div className="p-2 border flex flex-row items-center justify-center flex-wrap">
      {flashcards}
    </div>
  );
}
