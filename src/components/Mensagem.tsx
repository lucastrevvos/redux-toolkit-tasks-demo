import { useSelector } from "react-redux";
import { RootState } from "../store";

export function Mensagem() {
  const count = useSelector((state: RootState) => state.counter);

  return (
    <div>
      {count < 5 && <p>Ainda está baixo! Continue clicando.</p>}
      {count >= 5 && count < 10 && <p>Já está aumentando! Quase lá!</p>}
      {count >= 10 && <p>Uau! Chegou a 10 ou mais!</p>}
    </div>
  );
}
