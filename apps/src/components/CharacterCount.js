import { useRecoilValue } from "recoil";
import charCountState from "../selector/charCountState";

const CharacterCount = () => {
  // charCountStat 값을 읽으려면 useRecoilValue 훅을 사용해야한다.
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count.text}</>;
};

export default CharacterCount;
