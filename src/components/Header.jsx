export default function Header({ children }) {
  return (
    <>
      <header>
        <div className="bg-yellow-400 mx-auto p-4">
          <h1 className="text-center font-bold text-xl">{children}</h1>
        </div>
      </header>
    </>
  );
}
