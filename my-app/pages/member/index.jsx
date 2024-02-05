import Link from "next/link";
import useSWR from "swr";

// useSWR hookfor data fetching
const fetchData = (...args) => fetch(...args).then((res) => res.json());

export default function Memeber() {
  // nextjs approach
  const { data, error } = useSWR("https://dummyjson.com/users/", fetchData);
  console.log(data);
  if (error) return <h1>Error!</h1>;
  else if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Members by (CSR)</h1>
      {data.users &&
        data.users.map((user) => {
          return (
            <Link href={`/member/${user.id}/`} key={user.id}>
              <div>{user.firstName}</div>
            </Link>
          );
        })}
    </>
  );
}
