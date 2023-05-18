import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';
import Head from "next/head";
import agathaImage from "../../public/img/agatha.jpeg"
import bgImage from "../../public/img/bg1.png"
import WhatsAppButton from "@/components/WhatsAppButton";
import imgcard from "../../public/img/card.png"
import Link from "next/link";
import { stringify } from 'querystring';

export default function Home() {
    const dados = [
        {
            href: "https://google.com",
            alt: "as",
            src : {imgcard} 
        },
       
    ];
    return (
        <>
            <main>
                <Image
                    className="bgImage"
                    src={bgImage}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                />
                <Head>
                    <title>Agatha Regis | Estética Personalizada</title>
                </Head>
                <div className="flex justify-center">
                    <div className="my-6">
                        <Image
                            src={agathaImage}
                            alt="agatha"
                            priority
                            width={200}
                            height={10}
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div className="mb-6 text-center">
                    <h1 className="text-4xl mb-2">Agatha Regis</h1>
                    <p className="text-1xl">Estética Personalizada</p>
                </div>
                <div className="flex justify-center mb-6">
                    <ul>
                        {dados.map((card) => (
                            <li>
                                {
                                    card.src && (
                                        <Link
                                    href={card.href}
                                >
                                        <Image
                                            src={imgcard}
                                            alt={card.alt}
                                            width={200}
                                            height={200}
                                        />
                                </Link>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center">
                    <WhatsAppButton />
                </div>
            </main>
        </>
    );
}

