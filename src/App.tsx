import Btn from "./components/Btn";
import FruitDisplay from "./components/FruitDisplay";
import Header from "./components/Header";
import Main from "./components/Main";
import MoodHandler from "./components/MoodHandler";
import ParentChild from "./components/ParentChild";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";
import ShowHideText from "./components/ShowHideText";

const fruit: string[] = [];
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
      <FruitDisplay fruits={fruit} />
      <br></br>
      <Btn />
      <MoodHandler />
      <ParentChild heading="80% Off" callToAction="Everything Must Go" />
      <br />
      <ParentChild heading="70% Off" callToAction="Everything Must Go" />
      <ShowHideText />
    </>
  );
}

export default App;
