import { atom } from "recoil";

// atom은 state의 일부를 의미한다.
// 어느 컴포넌트나 atom 내 값을 읽을 수 있고, atom에 값을 쓸 수도 있다.
// 컴포넌트는 암묵적으로 atom을 구독하고 있다. -> 때문에 ㅣㅁ새ㅢ이 없데이트가되면, 해당 atom을 구독하고있던 컴포넌트들은 모두 re-render 된다.
const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // 기본 값 or 초기값
});

export default textState;
