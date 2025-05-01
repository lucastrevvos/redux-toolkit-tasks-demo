import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import { Counter } from "./components/Counter";
import { Mensagem } from "./components/Mensagem";

const Home = lazy(() => import("./pages/Home"));

export default function App() {
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Suspense fallback={<div className="p-4">Carregando página...</div>}>
      <Home />
      <Counter />
      <Mensagem />
    </Suspense>
  );
}
