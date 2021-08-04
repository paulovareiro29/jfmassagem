import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, database, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL || !email) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email,
        });
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid, email } = result.user;

      if (!displayName || !photoURL || !email) {
        throw new Error("Missing information from Google Account.");
      }

      // Check if exists in firestore
      let userRef = await database.collection("users").doc(uid).get();

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email: email,
      });

      //  If doesn't exist, create
      if (!userRef.exists) {
        database.collection("users").doc(uid).set({
          name: displayName,
          avatar: photoURL,
          email: email,
        });
      }
    }
  };

  const signOut = async () => {
    firebase
      .auth()
      .signOut()
      .then((result) => {
        setUser(undefined);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
