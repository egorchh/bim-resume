import ErrorMessage from "../../component/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ErrorMessage />
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 24,
          marginTop: 30,
        }}
      >
        Такой страницы не существует... =(
      </p>
      <Link
        style={{
          color: 'inherit',
          textDecoration: 'none',
          display: "block",
          textAlign: "center",
          fontWeight: 400,
          fontSize: 20,
          marginBottom: 60,
        }}
        to="/"
      >
        Вернуться на главную страницу
      </Link>
    </div>
  );
};

export default Page404;
