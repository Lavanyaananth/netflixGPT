import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, AVATAR } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    console.log("signedout");
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }; //setting up for once hence using useEffefct with []
  //whenever there is a change in auth (user signsin and signsout) this will be executed once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        //dispatching adduser action and adding it to store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen p-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="logo" className="w-44"></img>
      {user && (
        <div className="flex p-2">
          <img src={AVATAR} alt="user" className="w-12 h-12  pr-2"></img>
          <h3 className="pt-4">Hi, {user?.displayName}</h3>
          <button className="pl-4" onClick={handleSignout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
