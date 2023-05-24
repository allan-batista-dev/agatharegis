import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import WhatsAppButton from "@/components/WhatsAppButton";

import bgImage from "../../public/img/bg1.png";
import agathaImage from "../../public/img/agatha.jpeg";
import cursoPresencial from "../../public/img/card-presencial.png";
import cursoOnline from "../../public/img/curso-on.png";
import agendarHr from "../../public/img/agendar.png";

export default function Home() {
  const dados = [
    {
      href: "https://google.com",
      alt: "as",
      src: cursoPresencial,
    },
    {
      href: "https://google.com",
      alt: "as",
      src: cursoOnline,
    },
    {
      href: "https://google.com",
      alt: "as",
      src: agendarHr,
    },
  ];

  return (
    <>
      <main >
        <Image
          className="bgImage"
          src={bgImage}
          alt="bg"
          layout="fill"
          objectFit="cover"
          priority
        />
        <Head>
          <title>Agatha Regis | Estética Personalizada</title>
        </Head>
        <div className="touch-auto">
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
          <div className="mb-12 text-center">
            <h1 className="text-5xl mb-2 font-medium">Agatha Regis</h1>
            <p className="text-2xl font-thin">Estética Personalizada</p>
          </div>
          <div className="flex justify-center mb-6">
            <ul>
              {dados.map((card, index) => (
                <li key={index} className="mb-4 px-6">
                  {card.src && (
                    <Link href={card.href}>
                      <Image
                        src={card.src}
                        alt={card.alt}
                        // layout="responsive"
                        className="rounded-md shadow-2xl shadow-gray-900"
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
