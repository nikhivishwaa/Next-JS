import { useRouter } from "next/router";

export default function Settings() {
  const { query } = useRouter();
  return <div>this setting page of {query.adminname}</div>;
}
