import { Mail, Phone, Instagram, Facebook } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full bg-dark text-white p-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Larê</h2>
          <p className="mb-1">Recife - PE</p>
          <p>CEP: 01234-567</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contato</h3>
          <div className="flex items-center gap-1 mb-1">
            <Phone size={16} />
            <span>Telefone: (81) 98765-4321</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} />
            <span>Email: contato@lare.com.br</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Redes Sociais</h3>
          <div className="flex items-center gap-1 mb-1">
            <Instagram size={16} />
            <span>Instagram: @lareoficial</span>
          </div>
          <div className="flex items-center gap-1">
            <Facebook size={16} />
            <span>Facebook: /lareoficial</span>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Larê. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
