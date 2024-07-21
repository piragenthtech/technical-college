import Card from "./Card";
import Button from "./Button";
import Students from "./Students";
import UserGretting from "./UserGretting";
import List from "./List";
import MyComponent from "./MyComponent.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
  ];

  const vegetables = [
    { id: 4, name: "potatoes", calories: 935 },
    { id: 5, name: "carrots", calories: 452 },
    { id: 6, name: "celery", calories: 1053 },
  ];

  return (
    <>
      <Card />
      <Button />
      <Students name="piragenth" age={21} isStudent={true} />
      <Students name="satkunananthan" age={55} isStudent={false} />
      <Students />
      <MyComponent />
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="vegetables" />

      <UserGretting isLoggedin={true} username="piragenth" />
    </>
  );
}

export default App;
