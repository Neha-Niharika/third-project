interface ParentChildProps {
  heading: string;
  callToAction: string;
}
function ParentChild({ heading, callToAction }: ParentChildProps) {
  const date = new Date();
  return (
    <>
      <h1>{heading} </h1>
      <p>{callToAction}</p>
      <h1>{date.toLocaleTimeString()}</h1>
    </>
  );
}
export default ParentChild;
