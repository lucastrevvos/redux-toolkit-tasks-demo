import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { decrement, increment, reset } from "../features/counter/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4 text-center">
      <h2 className="text 2xl font-bold mb-4">Contador: {count}</h2>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 px-4 py-2 text-white rounded"
        >
          {" "}
          -1
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-500 px-4 py-2 text-white rounded"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-600 px-4 py-2 text-white rounded"
        >
          +1
        </button>
      </div>
    </div>
  );
}
