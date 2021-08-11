const Header = ({ logout }: any) => {
  return (
    <nav className="navbar navbar-light bg-light border p-1">
      <a className="navbar-brand text-muted">G Notes</a>
      <span onClick={logout} className="btn">
        <img src="../../logout.png" alt="logout" width="20"></img>
      </span>
    </nav>
  );
};

export default Header;
