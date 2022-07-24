import Accordion from "../../components/Accordion/Accordion";

export default function About() {
  return (
    <div className="container">
      <div>This is the about page folks</div>
      <br />
      <Accordion title="What is this?">
        <p>
          This is a simple accordion component. It's a simple component that
          takes a title and a children element.
          <br />
          The children element is what will be displayed in the accordion.
        </p>
      </Accordion>
    </div>
  );
}
