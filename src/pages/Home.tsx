import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <>
      <Button navigateTo={'./todo-list'} text={'Todo-list'} />
      <div>Home</div>

    </>
  )

}

export default Home;