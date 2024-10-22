import Card from "../Card/Card";

import "./List.css";

const List = ({ list }) => {
  return (
    <ul>
      {list.map((element) => (
        <li key={element.id}>
          <Card url={element.image} name={element.name} />
        </li>
      ))}
    </ul>
  );
};

export default List;
