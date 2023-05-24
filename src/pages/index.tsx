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
      href: "https://wa.me/+5544998596467?text=Oi%20Agatha%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20corporal",
      alt: "agendar",
      src: agendarHr,
    },
    {
      href: "https://wa.me/+5544998596467?text=Gostaria%20de%20receber%20o%20pdf%20de%20informa%C3%A7%C3%B5es%20do%20curso%20%20presencial%20",
      alt: "curso presencial",
      src: cursoPresencial,
    },
    {
      href: "https://wa.me/+5544998596467?text=Gostaria%20de%20receber%20o%20pdf%20de%20informa%C3%A7%C3%B5es%20do%20curso%20online%20",
      alt: "curso online",
      src: cursoOnline,
    },
  ];

  return (
    <>
      <main>
        <Image
          className="bgImage bg-repeat"
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
