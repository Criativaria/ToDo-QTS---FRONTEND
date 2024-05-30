import { X } from "lucide-react";
import { motion, Variants } from "framer-motion";

type SignUpProps = {
  toggleSign: boolean;
  setToggleSign: (value: boolean) => void;
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

export function SignUp(props: SignUpProps) {
  const handdleClick = () => {
    props.setToggleSign(false);

    console.log(props.toggleSign);
    return props.toggleSign;
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
        <div className="divButtonIconX" onClick={handdleClick}>
          <button className="buttonCloseSign">
            <X size={30} color="#1b1a1a" strokeWidth={2.5} />
          </button>
        </div>
        <h1 className="tituloSignUp">Criar Conta</h1>

        <div className="formSignUp">
          <div className="divTextoEInput">
            <input type="text" className="input" placeholder="nickname" />
          </div>
          <div className="divTextoEInput">
            <input type="text" className="input" placeholder="senha" />
          </div>
          <div className="divTextoEInput">
            <input type="text" className="input" placeholder="nome" />
          </div>
        </div>
        <button className="sendSign">enviar</button>
      </motion.div>
    </>
  );
}
