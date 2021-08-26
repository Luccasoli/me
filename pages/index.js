import Head from "next/head";

const ImageContainer = () => {
  return (
    <div className="w-96 h-96 bg-red-200 rounded-full overflow-hidden">
      <img
        className="w-full bg-red-200"
        src="/assets/images/me.jpg"
        alt="Lucas Mesquita"
      />
    </div>
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

const Contacts = () => {
  return (
    <div className="self-start">
      <ul>
        <li>
          <a>Linkedin</a>
        </li>
      </ul>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center px-20 w-1/2 text-center">
        <ImageContainer />
        <Title />
        <SubTitle />
        <Contacts />
      </main>
    </div>
  );
}
