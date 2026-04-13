export function MyAwesomeApp() {
  const myFavotityColor = ["blue", "red", "green", "yellow", "pink"];

  const addres = {
    city: "Medellin",
    country: "Colombia",
  };

  return (
    <>
      <h1>Edwards</h1>
      <h3>Ardila</h3>
      {myFavotityColor.join(", ")}
          {JSON.stringify(addres)}
          
    </>
  );
}
