import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface IListItem {
  listItem: string;
  done: boolean;
  id?: string;
}

const TodoList: React.FC = () => {
  const [list, setList] = useState<IListItem[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      setList([...list, { listItem: input, done: false, id: uuidv4() }]);
      setInput("");
    }

  }

  const toggleDone = (id: string | undefined) => {
    const updatedList: IListItem[] = list.map((item) => {
      if (item.id === id) {
        return { listItem: item.listItem, done: !item.done };
      }
      return item;
    })

    setList(updatedList);
  }


  return (
    <>
      <ul>
        {list.map((item: IListItem) => {
          return <>
            <li style={{ textDecoration: item.done ? 'line-through' : 'none' }} key={item.id}>
              {item.listItem}
              {!item.done && <button onClick={() => toggleDone(item.id)}>Clear</button>}
            </li>
          </>
        })
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="input" onChange={(e) => setInput(e.target.value)} />

      </form>
    </>
  )
}

export default TodoList;