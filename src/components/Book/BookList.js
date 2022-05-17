import Card from "../UI/Card/Card";

const BookList = (props) => {
  return (
    <>
      {props.lists.map((list) => 
        <Card>
          <div key={list.id}>
            <div className="title">{list.title}</div>
            <div className="status">{list.status}</div>
            <div className="label">{list.label}</div>
          </div>
        </Card>
      )}
    </>
  );
};
export default BookList;
