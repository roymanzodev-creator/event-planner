import { login } from "@/lib/auth-actions";
import { FaGithub } from "react-icons/fa";


export function GithubSignInButton() {
  return (
    <button 
    onClick={login}
    className="w-full flex  bg-gray-900 text-foreground items-center justify-center gap-3 font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
      <FaGithub /> Continue with GitHub
    </button>
  );
}
