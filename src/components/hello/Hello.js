import UseState from "./components/UseState.js";

export default function Hello() {
  return (
    <div>
      <UseState age={10} />
      <UseState age={20} />
      <UseState age={30} />
    </div>
  );
}
