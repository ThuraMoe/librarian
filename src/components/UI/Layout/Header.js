import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.title}>Librarian</div>
      <nav className={style.menu}>
        <ul>
          <li>Book Shelfs</li>
          <li>My List</li>
          <li>Wish List</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
