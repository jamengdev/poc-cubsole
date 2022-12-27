import Head from "next/head";
import Demo from "../components/Demo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>POC Cubsole</title>
        <meta name="description" content="POC Cubsole" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Demo />
    </div>
  );
}
