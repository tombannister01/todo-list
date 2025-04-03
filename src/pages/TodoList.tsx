import { useState } from "react";

const TodoList: React.FC = () => {
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      setList(list.concat(input));
      setInput("");
    }


  }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }


  return (
    <>
      <ul>
        {list.map((listItem: string, index: number) => <li key={index}>{listItem}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="input" onChange={handleInput} />
      </form>
    </>
  )
}

export default TodoList;