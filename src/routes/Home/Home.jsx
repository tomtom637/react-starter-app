import Form from '../../components/NewPersonForm/NewPersonForm';
import People from '../../components/People/People';

export default function Home() {
  return (
    <div className="container">
      <p>This is the home page, yeah!</p>
      <p style={{ fontSize: "3rem" }}>🐳</p>
      <br />
      <Form />
      <br /><br />
      <People />
    </div>
  );
}
