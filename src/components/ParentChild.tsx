interface ParentChildProps {
  heading: string;
  callToAction: string;
}
function ParentChild({ heading, callToAction }: ParentChildProps) {
  return (
    <>
      <h1>{heading} </h1>
      <p>{callToAction}</p>
    </>
  );
}
export default ParentChild;
