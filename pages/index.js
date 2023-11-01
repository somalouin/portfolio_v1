export default function Home() {
  return (
    <>
      <div className="flex justify-center py-8 bg-slate-200 dark:bg-zinc-900 font-lato font-bold text-lg text-slate-700 dark:text-zinc-400">
        <div className="md:w-4/5 lg:w-2/5 xl:1/2 min-h-screen max-h-full">
          <div id="me" className="grid grid-cols-8 py-8">
            <div className="col-start-1 col-end-6 text-2xl px-5 pb-6">
              <p>Serge-Olivier Malouin</p>
              <p className="text-base py-4"> back-end developer</p>
            </div>
            <div className="col-start-8">
              <button
                id="theme-toggle"
                type="button"
                className="dark:bg-slate-200 bg-zinc-400 dark:hover:bg-slate-400 hover:bg-zinc-500 rounded-lg px-2 py-2"
              >
                <img id="theme-icon" width={18} height={18} />
              </button>
            </div>
          </div>
          <div id="content">
            <div
              id="about"
              className="grid grid-cols-1 place-content-evenly py-10"
            >
              <div className="px-5">
                <p className="underline py-2">about</p>
                <p className="text-base">
                  I am currently studying in software engineering at École de 
                  technologie supérieure in Montreal. I have more than
                  a year of work experiencein web and software developement
                  with various technologies.
                </p>
              </div>
            </div>

            <div
              id="skills"
              className="grid grid-cols-1 place-content-evenly py-10"
            >
              <div className="px-5">
                <p className="underline py-2">skills</p>
                <p className="text-base">
                  I have experience with these technologies :
                </p>
                <div className="pt-4 gap-4 grid grid-cols-8 place-content-evenly">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" />
                </div>
              </div>
            </div>

            {/* <div
              id="projects"
              className="grid grid-cols-1 place-content-evenly py-10"
            >
              <div className="px-5">
                <p className="underline py-2">projects </p>
                <p className="text-base">
                  here is a list of my past projects :
                </p>
              </div>
            </div> */}

            <div
              id="contact"
              className="grid grid-cols-1 place-content-evenly py-10"
            >
              <div className="px-5">
                <p className="underline py-2">contact me</p>
                <div className="flex grid-cols-2 gap-4 py-2">
                  <a href="https://github.com/somalouin" target="_blank">
                    <img src="icons/github.png" width={35} height={35} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/serge-olivier-malouin-5a89a1193/"
                    target="_blank"
                  >
                    <img src="icons/linkedin.png" width={35} height={35} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
