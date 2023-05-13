import Image from "next/image";
export default function Home() {

    return (
        <>
            <main>
                <div className="flex justify-center">
                    <div className="my-6">
                        <Image
                        src={"/../public/img/agatha.jpeg"}
                        alt="agatha"
                        width={200}
                        height={10}
                        className="rounded-full"
                    />
                    </div>
                </div>
                <div className="mb-6 text-center">
                        <h1>Agatha Regis</h1>
                        <p>sldkjalsdjalksjdlkajslk</p>
                    </div>
            </main>
        </>
    );
}

