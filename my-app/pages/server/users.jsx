import Link from "next/link";

export default function Users(props) {
  console.log("so client side");
  return (
    <>
      <h1>Members by (SSR)</h1>
      {props.data.users &&
        props.data.users.map((user) => {
          return (
            <Link href={`/member/${user.id}/`} key={user.id}>
              <div>{user.firstName}</div>
            </Link>
          );
        })}
    </>
  );
}

// we have to export following f() if we want server side rendering
export async function getServerSideProps(ctx) {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  console.log("so server side");

  return {
    props: {
      data,
    },
  };
}
