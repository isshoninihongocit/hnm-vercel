"use client";

import { useAuth } from "../utils/useAuth";

export default function LoginButton() {
  const { user, signInWithGoogle, logout } = useAuth();

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <>
          <img
            src={user.photoURL ?? ""}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span>{user.displayName}</span>
          <button
            onClick={logout}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white uppercase text-xs"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white uppercase text-xs"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}
