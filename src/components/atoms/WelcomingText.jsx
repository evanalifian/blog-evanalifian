export default function WelcomingText({ children }) {
  return (
    <h1 className="text-4xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-t from-zinc-700 to-zinc-500 my-0">
      {children}
    </h1>
  );
}
