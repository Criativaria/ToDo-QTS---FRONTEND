import { CirclePlus, CircleUserRound } from "lucide-react";
import styled from "styled-components";
import { Items, Tasks } from "../components/tasks";
import { useEffect, useState } from "react";
import "../App.css";
import { SignUp } from "../components/signup";
import { AnimatePresence } from "framer-motion";
import { SignIn } from "../components/singIn";
import { getTask } from "../api/task/getTask";
import { User } from "../api/user/login";
import { getUser } from "../api/user/getUser";

export function ToDoPage() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [toggleSignIn, setToggleSignIn] = useState(false);
  const [initialTasks, setInitialTasks] = useState<Items[]>([]);

  const [userName, setUserName] = useState("");

  const handleNewTask = () => {
    setShowNewTask(false);
  };

  const handleClick = () => {
    setShowNewTask(true);
  };

  const setToggleSignUpFunction = (value: boolean) => {
    setToggleSignUp(value);
  };
  const setToggleSignInFunction = (value: boolean) => {
    setToggleSignIn(value);
  };

  const handleLogin = async (getUser: User) => {
    const tasks = await getTask();
    const items = tasks.map((task) => ({
      id: task.id,
      text: task.text,
    }));
    setInitialTasks(items);
    setUserName(getUser.name);
  };

  const checkUserLogin = async () => {
    try {
      const user = await getUser();
      await handleLogin(user);
    } catch (error) {
      setToggleSignIn(true);
    }
  };

  useEffect(() => {
    checkUserLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Wrapper>
        <Title>
          <TitleText>To-Do</TitleText>
          <button onClick={handleClick} className="buttonNewTask">
            <CirclePlus size={50} color="#fcffeb" strokeWidth={1.5} />
          </button>
        </Title>
        <Line>
          <Tasks
            showNewTask={showNewTask}
            onNewTask={handleNewTask}
            initialTasks={initialTasks}
          />
        </Line>
        <div>
          <AnimatePresence>
            {toggleSignUp && (
              <SignUp
                toggleSignUp={toggleSignUp}
                setToggleSignUp={setToggleSignUpFunction}
                toggleSignIn={toggleSignIn}
                setToggleSignIn={setToggleSignInFunction}
              />
            )}
            {toggleSignIn && (
              <SignIn
                toggleSignIn={toggleSignIn}
                setToggleSignIn={setToggleSignInFunction}
                toggleSignUp={toggleSignUp}
                setToggleSignUp={setToggleSignUpFunction}
                onLogin={handleLogin}
              />
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={() => setToggleSignUp(true)}
          className="buttonUserToDo"
        >
          {userName && <P> Olá {userName}, boas vindas!</P>}

          <CircleUserRound size={50} color="#fcffeb" strokeWidth={1.5} />
        </button>
      </Wrapper>
    </>
  );
}
const P = styled.p`
  color: aliceblue;
  font-size: 30px;
  text-transform: capitalize;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 750px;
`;
const TitleText = styled.p`
  font-size: 50px;
  color: #fcffeb;
  font-weight: 600;
  font-style: italic;
`;
const Line = styled.div`
  border: 5px solid #fcffeb;
  border-radius: 30px;
  width: 750px;
  height: 550px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  margin: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  overflow: hidden;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #1b1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
`;
