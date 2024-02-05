import Link from "next/link";
import style from "../../../styles/User.module.css";

export default function Users(props) {
  // static site rendering - it convert the code into html and css on build command
  return (
    <>
      <h1>Members by (SSG)</h1>
      {props.data.users &&
        props.data.users.map((user) => {
          return (
            <Link href={`/static/users/${user.id}/`} key={user.id}>
              <div className={style.mleft}>{user.firstName}</div>
            </Link>
          );
        })}
    </>
  );
}

// for static site generation we have to export the following f()

export async function getStaticProps(ctx) {
  const data = await (await fetch("https://dummyjson.com/users/")).json();

  return {
    props: {
      data,
    },
  };
}
