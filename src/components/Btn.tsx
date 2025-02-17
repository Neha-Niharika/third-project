function Btn() {
  function eventHandler(){
    const compNo=Math.floor(Math.random()*3)+1
    const no=prompt("Enter a number")
    console.log(`Expected ${compNo} Recieved ${no}`)
  }

  return (
    <>
    <h1>Hello</h1>
    <button onClick={eventHandler}>Enter random no</button>
    </>
  );
}

export default Btn;
