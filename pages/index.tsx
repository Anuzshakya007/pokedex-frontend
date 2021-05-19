import Head from "next/head";
import Home from "./dashboard";

const Index = () => {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            <Home/>
        </>
    )
}

export default Index
