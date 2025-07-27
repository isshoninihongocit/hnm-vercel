import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function logout() {
  return signOut(auth);
}
