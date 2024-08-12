import "../../../assets/styles/Hello/Hello.css";
import styles from "../../../assets/styles/Hello/Hello.module.css";

const HelloExample = () => {
  return (
    <div>
      {/* 1. 인라인 스타일
      - JSX 는 객체로 작성해야 된다.
      - key: 속성, value: 속성값
      - 객체이기 때문에 쉼표로 구분해준다.
      - 대쉬를 사용했던 속성들은 카멜케이스로 작성한다.
      - 속성값이 문자열이면 따옴표로 감싸줘야 한다.
      - 숫자는 그냥 숫자를 기입해도 되지만, px 같은 건 따옴표로 감싸줘야 한다. */}
      <h1
        style={{
          color: "#f00",
          borderRight: "2px solid #000",
          marginBottom: "50px",
          opacity: 0.5,
        }}
      >
        Hello
      </h1>
      <div className={styles.box}>Hello-module</div>
      <div className="box">Hello</div>
    </div>
  );
};

export default HelloExample;
