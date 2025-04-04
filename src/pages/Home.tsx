import { useNavigate } from "react-router-dom";




const Home: React.FC = () => {

  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate('/todo-list')}>Todo-list</button>
      <div>Home</div>

    </>
  )

}

export default Home;