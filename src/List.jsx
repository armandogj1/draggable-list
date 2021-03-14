import { useState } from 'react';

const list = [{ val: 'a' }, { val: 'b' }, { val: 'c' }, { val: 'd' }, { val: 'e' }];

const List = () => {
  const [items, setItems] = useState(list);
  const [dragged, setDragged] = useState(null);
  const [position, setPosition] = useState({ idx: -1 });

  const handleDragStart = (e) => {
    e.preventDefault();
    if (!dragged) {
      const idx = e.target.dataset.element;
      const { [idx]: discard, ...newItems } = items;

      setDragged(discard);
      setItems(Object.values(newItems));
      setPosition({ idx: +idx, y: e.clientY });
    }
  };

  const handleHover = (e) => {
    e.preventDefault();

    if (dragged) {
      let pos = +e.target.dataset.element;
      const elPosition = e.target.getBoundingClientRect();
      if (!isNaN(pos)) {
        setPosition({ idx: pos, y: elPosition.y + elPosition.height / 2 });
      }
    }
  };

  const handleDragEnd = (e) => {
    const newItems = [...items];
    const dropPosition = e.clientY;
    const insertPosition = dropPosition > position.y ? position.idx + 1 : position.idx;
    newItems.splice(insertPosition, 0, dragged);
    console.log('end', items, insertPosition, newItems);
    setItems(newItems);
    setDragged(null);
  };

  return (
    <ul
      onClick={(e) => console.log(e.target.dataset.element)}
      onDrop={handleDragEnd}
      onDragOver={handleHover}
    >
      {items.map((li, idx) => (
        <li key={idx} data-element={idx} draggable onDrag={handleDragStart}>
          {li.val}
        </li>
      ))}
    </ul>
  );
};

export default List;
