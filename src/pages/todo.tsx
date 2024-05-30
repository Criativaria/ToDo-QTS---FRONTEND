import { CirclePlus, CircleUserRound } from "lucide-react";
import styled from "styled-components";
import { Tasks } from "../components/tasks";
import { useState } from "react";
import "../App.css";
import { SignUp } from "../components/signup";
import { AnimatePresence } from "framer-motion";

export function ToDoPage() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [toggleSign, setToggleSign] = useState(false);

  const handleNewTask = () => {
    setShowNewTask(false);
  };

  const handleClick = () => {
    setShowNewTask(true);
  };

  const setToggleSignFunction = (value: boolean) => {
    setToggleSign(value);
  };

  console.log(toggleSign);

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
          <Tasks showNewTask={showNewTask} onNewTask={handleNewTask} />
        </Line>
        <div>
          <AnimatePresence>
            {toggleSign && (
              <SignUp
                toggleSign={toggleSign}
                setToggleSign={setToggleSignFunction}
              />
            )}
          </AnimatePresence>
        </div>
        <button onClick={() => setToggleSign(true)} className="buttonUserToDo">
          <CircleUserRound size={50} color="#fcffeb" strokeWidth={1.5} />
        </button>
      </Wrapper>
    </>
  );
}
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
