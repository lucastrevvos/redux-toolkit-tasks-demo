import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import type { RootState } from "../store";

export function ThemeToggle() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="border px-4 py-2 rounded"
    >
      Mudar tema: {theme}
    </button>
  );
}
