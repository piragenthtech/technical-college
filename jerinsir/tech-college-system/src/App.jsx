import Card from "./Card";
import Button from "./Button";
import Students from "./Students";
import UserGretting from "./UserGretting";
import List from "./List";

function App() {
  return (
    <>
      <Card />
      <Button />
      <Students name="piragenth" age={21} isStudent={true} />
      <Students name="satkunananthan" age={55} isStudent={false} />
      <Students />
      <List/>
      <UserGretting isLoggedin={true} username="piragenth" />
    </>
  );
}

export default App;
