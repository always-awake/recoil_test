import textState from "../state/text";
import { useRecoilState } from "recoil";

const TextInput = () => {
  // atom에 있는 값을 읽고 atom에 값을 쓰려면, useRecoilState()를 사용해야 한다.
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

export default TextInput;
