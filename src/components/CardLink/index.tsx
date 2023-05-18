import Image from "next/image"
import Link from "next/link";
import imgCard from "../../../public/img/card.png"

const CardLink = ({ dados }) => {
    console.log(dados.url)
    return (
        <div>
            {dados.map((card) => (
                <Link

                    href={card.href}
                >
                    {
                        card.url && (
                            <Image
                                src={card.url}
                                alt={card.alt}
                                width={100}
                                height={100}
                                className=""
                            />
                        )
                    }

                </Link>
            ))}
        </div>
    );
};

export default CardLink;