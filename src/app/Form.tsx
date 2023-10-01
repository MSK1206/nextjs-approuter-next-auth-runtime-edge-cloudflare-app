"use client";

import {signIn} from "next-auth/react";

export default function From() {
  return (
    <form className="flex flex-col gap-2 p-5 max-w-xs w-full bg-white shadow-lg rounded-lg">
      <div>
        <h3 className="head text-center">サインインが必要です。</h3>
      </div>
      <button
        onClick={() => signIn("github")}
        type="button"
        className="bg-slate-800 my-4 text-white p-3 rounded-lg">
        Sign in with Github
      </button>
    </form>
  );
}
