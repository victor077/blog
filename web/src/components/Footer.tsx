import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-200 w-full absolute bottom-0">
      <div className="flex flex-col items-center justify-center py-14 gap-2">
        <p>© 2023Victor Angelo. Todos os direitos reservados.</p>
        <ul className="flex gap-4 items-center">
          <li className="">
            <a href="https://twitter.com/vitinhoazz">
              <TwitterIcon className="hover:text-blue-400 hover:animate-bounce" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/vitinho_dev/">
              <InstagramIcon className="hover:text-pink-600 hover:animate-bounce ease-out " />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/victor-de-angelo-souza-/">
              <LinkedinIcon className="hover:text-blue-600 hover:animate-bounce" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
