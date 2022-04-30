import Navigation from "./navigation.js";

export default function Layout(props) {
  return (
    <>
      <Navigation></Navigation>
      <main>{props.children}</main>
    </>
  );
}
