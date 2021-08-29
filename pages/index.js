import Head from "next/head";

const ImageContainer = () => {
  return (
    <img
      className="w-48 h-48 bg-red-200 rounded-full object-cover md:w-80 md:h-80"
      src="/assets/images/me.jpg"
      alt="Lucas Mesquita"
    />
  );
};

const Title = () => {
  return (
    <div>
      <h1 className="py-5 font-serif text-4xl">Hi, I&apos;m Lucas Mesquita</h1>
    </div>
  );
};

const SubTitle = () => {
  return (
    <div>
      <h1 className="py-5 text-gray-400 font-serif text-2xl">
        I&apos;m a software developer, focused in front-end using React
      </h1>
    </div>
  );
};

const Link = ({ children, href }) => (
  <a
    className="text-left underline"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const Contacts = () => {
  return (
    <div className="self-start">
      <ul className="list-disc">
        <li>
          <Link href="https://www.linkedin.com/in/lucas-de-oliveira-mesquita/">
            Linkedin
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Luccasoli">GitHub</Link>
        </li>
      </ul>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2 h-screen min-h-screen bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center px-10 text-center xl:px-20 xl:w-1/2">
        <ImageContainer />
        <Title />
        <SubTitle />
        <Contacts />
      </main>
    </div>
  );
}
