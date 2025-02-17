interface FruitDisplayProps{
    fruits:string[]
}

function FruitDisplay({fruits}:FruitDisplayProps){
    return (
      <>
        <h2> Fruits</h2>
        {fruits.length === 0 ? (
          <p>No Fruit</p>
        ) : (
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        )}
      </>
    );
}
export default FruitDisplay