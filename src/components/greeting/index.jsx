import "./style.css";

export const Greeting = ({ name, email }) => {
  return (
    <section className="greeting">
      Hello {name}, din gamle get! {email}
    </section>
  );
};
