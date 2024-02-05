import { useRouter } from "next/router";

export default function User() {
  const { query } = useRouter();
  return (
    <>
      <h1>this is {query.username} page by dynamicx routing</h1>
    </>
  );
}
