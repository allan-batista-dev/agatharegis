import Image from "next/image";
import Head from "next/head";
import agathaImage from "../../public/img/agatha.jpeg"
import bgImage from "../../public/img/bg1.png"

export default function Home() {
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
				<div>

				</div>
			</main>
		</>
	);
}

