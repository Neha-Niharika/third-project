interface MainProps {
  greet: string;
}
function Main({ greet }: MainProps) {
  return <h1>Good morning, {greet}</h1>;
}

export default Main;
