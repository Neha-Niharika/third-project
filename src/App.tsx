import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Header>
        <h1>Hello, I'm Neha</h1> <h3>Nice to meet you</h3> <hr />{" "}
      </Header>
      <Main greet="Have a good day" />
      <Sidebar />
      <UserProfile name="Sam" isMember={true} />
      <UserProfile name="Ram" isMember={false} />
    </>
  );
}

export default App;
