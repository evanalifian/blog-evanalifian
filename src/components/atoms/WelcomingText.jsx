export default function WelcomingText({ children }) {
  return (
    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 my-0">
      {children}
    </h1>
  );
}
