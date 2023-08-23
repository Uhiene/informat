import "./globals.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title key="title">NextJS News App</title>
        <meta
          name="description"
          key="description"
          content="NextJS crash course by Coding in Flow"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add the Inter font link */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
