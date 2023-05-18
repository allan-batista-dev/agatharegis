import { useRouter } from "next/router";

const WhatsAppButton = () => {
    const router = useRouter();
  
    const handleClick = () => {
      // Redirecionar para o número do WhatsApp
      window.location.href = 'https://api.whatsapp.com/send?phone=5544999692039';
    };
  
    return (
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Ir para o WhatsApp</button>
    );
  };
  
  export default WhatsAppButton;