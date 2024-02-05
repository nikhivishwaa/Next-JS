import Link from "next/link";

export default function Users(props) {
  // static site rendering - it convert the code into html and css on build command
  return (
    <>
      <h1>Members by (SSG)</h1>
      {props.data && <div>{props.data.firstName}</div>}
    </>
  );
}

// for static site generation of dynamic route we have to pass static paths

export async function getStaticPaths() {
  const data = await (await fetch("https://dummyjson.com/users/")).json();
  const allUser = data.users.map((user) => ({
    params: {
      id: `${user.id}`
    }
  }));
  console.log(allUser)
  return {
    paths: allUser,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const id = ctx.params.id;
  const data = await (await fetch("https://dummyjson.com/users/" + id)).json();

  return {
    props: {
      data,
    },
  };
}
