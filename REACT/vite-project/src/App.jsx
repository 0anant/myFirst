import UserStatus from "./UserStatus/UserStatus";
import Weather from "./Weather/Weather";


const App = () => {
  return (
    <section>
    <Weather />
    <UserStatus isLoggedIn = {true} isAdmin = {true} />
   </section>
  );
};


export default App;