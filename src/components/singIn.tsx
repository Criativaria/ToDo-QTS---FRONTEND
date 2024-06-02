/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-escape */
import { X } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { loginUser } from "../api/user/login";
import axios from "axios";

type SignUpProps = {
  toggleSignIn: boolean;
  setToggleSignIn: (value: boolean) => void;

  toggleSignUp: boolean;
  setToggleSignUp: (value: boolean) => void;
};

const variantBox: Variants = {
  show: {
    opacity: 1,
    bottom: 0,
  },
  hidden: {
    opacity: 0,
    bottom: -300,
  },
};

export function SignIn(props: SignUpProps) {
  const [nickname, setNickname] = useState("");
  const [senha, setSenha] = useState("");

  const handdleClickToggle = () => {
    props.setToggleSignIn(false);
    props.setToggleSignUp(true);
    return props.toggleSignIn, props.toggleSignUp;
  };

  const handdleClickClose = () => {
    props.setToggleSignIn(false);

    return props.toggleSignIn;
  };

  const requestLoginUser = async () => {
    try {
      setSenha("");
      setNickname("");
      await loginUser({ nickname, senha });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.message);
        console.log(error);
      }
    }
  };

  return (
    <>
      <motion.div
        layout
        variants={variantBox}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="signUp"
      >
        <div className="titulosECloseSign">
          <div className="divsecreta"></div>
          <div className="titulosSign">
            <h1 className="tituloSignUp">Login</h1>
            <p className="subTittleSignUp" onClick={handdleClickToggle}>
              ainda não tem conta?
            </p>
          </div>

          <button className="buttonCloseSign" onClick={handdleClickClose}>
            <X size={30} color="#1b1a1a" strokeWidth={2.5} />
          </button>
        </div>
        <div className="formSignUp">
          <div className="divTextoEInput">
            <input
              type="text"
              className="input"
              placeholder="nickname"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
            />
          </div>
          <div className="divTextoEInput">
            <input
              type="text"
              className="input"
              placeholder="senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
        </div>
        <button className="sendSign" onClick={() => requestLoginUser()}>
          enviar
        </button>
      </motion.div>
    </>
  );
}
