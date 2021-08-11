const ProtectedRoute = ({ router, children }) => {
  console.log("test router ---->", router);
  //Identify authenticated user
  //   const { user } = useAuthContext();
  //   const isAuthenticated = user.isLoggedIn;

  let unprotectedRoutes = ["/addNote"];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (pathIsProtected) {
    router.push("/");
  }
  return children;
};
export default ProtectedRoute;
