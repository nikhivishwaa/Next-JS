import { useRouter } from "next/router";
import useSWR from "swr";

const fetchData = (...args) => fetch(...args).then((res) => res.json());

export default function Index() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    "https://dummyjson.com/users/" + query.id,
    fetchData
  );
  if (!data) return <h1>loading...</h1>;
  else if (error) return <h1>Error</h1>;

  console.log("data : ", data, "\n\nerror : ", error);
  return (
    <>
      <h1>Member by (CSR)</h1>
      {data && <div>{`${data.firstName} ${data.lastName}`}</div>}
    </>
  );
}
