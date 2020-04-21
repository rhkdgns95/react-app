import React from 'react';
import App from './App';

const HookWrapper = (props) => {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook}/>;
};

/*  
 *  it블록에 테스트 작성시 보통 다음 3단계를 거침
 *   1. 값을 정의(arrange)
 *   2. 실행(act)
 *   3. 단언(assert)
 */
describe("App Testing", () => {
  /**
   *  테스팅 진행
   *   1. 컴포넌트 존재유무 확인.
   *   2. 컴포넌트 props값 확인.
   *   3. 컴포넌트의 렌더링 될 때, 하위 컴포넌트 확인.
   */
  context("App Component 내부", () => {
    let wrapper;
    let hookWrapper;
    
    before(() => {
      wrapper = shallow(<App />);
      hookWrapper = mount(<HookWrapper hook={() => <App title="hello"/>}/>);
    });

    it("컴포넌트 존재", () => {
      expect(hookWrapper.find('div')).to.exist;
    });

    it("컴포넌트 Props는 'hello' 이다", () => {
      const { hook } = hookWrapper.find('div').props();
      const { title } = hook.props;
      expect(title).to.equal("hello");
    });

    it("컴포넌트 렌더링은 <p>는 4개다", () => {
      const appProps = wrapper.find('p');
      expect(wrapper.find('p')).to.have.length(4);
    });

  });
});