import Input from "../../components/Input/Input";

export default function Test() {
  return (
    <div className="container">
      <br /><br />
      <Input type="text" label="What's your name?" />
      <br />
      <Input type="password" label="Type your password" />
    </div>
  );
}