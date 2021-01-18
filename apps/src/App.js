import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter";

const App = () => {
  return (
    // recoil state를 사용하기 위해, 부모 컴포넌트 트리 안에 RecoilRoot를 위치시켜야한다.
    // 루트 컴포넌트가 RecoilRoot를 위치시키기에 가장 좋은 위치
    <RecoilRoot>
      <p>Test Recoil</p>
      <CharacterCounter />
    </RecoilRoot>
  );
};

export default App;
