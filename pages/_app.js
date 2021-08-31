import "tailwindcss/tailwind.css";

console.log(process.env.NEXT_PUBLIC_value);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
