import './App.css';
import BookList from './components/Book/BookList';
import Header from './components/UI/Layout/Header';

function App() {
  const books = [
    {
      id: "e1",
      title: "VueJS",
      label: "Web Technology",
      status: "Available",
    },
    {
      id: "e2",
      title: "Gone With The Wind",
      label: "Mystery",
      status: "Available",
    },
    {
      id: "e3",
      title: "Car Insurance",
      label: "Business",
      status: "Unavailable",
    },
    {
      id: "e4",
      title: "Be Happy",
      label: "Chicken Soup",
      status: "Borrowed",
    },
  ];


  return (
    <>
      {/* <Header></Header> */}
      <BookList lists={books} />
    </>
  );
}

export default App;
