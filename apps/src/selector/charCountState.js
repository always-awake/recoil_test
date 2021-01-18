import { selector } from "recoil";
import textState from "../state/text";

// selector는 state에서 파생된 일부 상태값이다.
// Derived state is a transformation of state
const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export default charCountState;
