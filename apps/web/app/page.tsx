import { Button, Header } from "ui";

export default function Page() {
  console.log(process.env.DEBUG_MESSAGE);
  return (
    <>
      <Header text="Web" />
      <Button />
      <div>{process.env.DEBUG_MESSAGE}</div>
    </>
  );
}
