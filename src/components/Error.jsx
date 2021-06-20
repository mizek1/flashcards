export default function Error({ children: errorMessage }) {
  return (
    <span className="bg-red-200 text-red-600 font-semibold p-2">
      {errorMessage}
    </span>
  );
}
