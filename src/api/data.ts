import { Bed, Sofa } from "../assets";
import type { ProductProps } from "../types";

export const products: ProductProps[] = [
  {
    id: 1,
    title: "Cama Box Com Colchão Queen",
    image: Bed,
    price: 1290.9,
    description:
      "Cama box tamanho queen com colchão incluso, ideal para conforto e praticidade no quarto. Estrutura reforçada, tecido de alta qualidade e acabamento premium garantem durabilidade e elegância. O colchão possui tecnologia de molas ensacadas, proporcionando noites de sono tranquilas e suporte adequado para a coluna. Fácil de montar e perfeita para quem busca otimizar o espaço sem abrir mão do conforto.",
  },
  {
    id: 2,
    title: "Sofá Retrátil 3 Lugares",
    image: Sofa,
    price: 1899.99,
    description:
      "Sofá retrátil para 3 pessoas, perfeito para salas de estar modernas e aconchegantes. Possui assentos extensíveis e encostos reclináveis, permitindo diferentes configurações para relaxar ou receber visitas. O revestimento em tecido resistente e fácil de limpar, aliado à espuma de alta densidade, oferece conforto e praticidade no dia a dia. Design contemporâneo que valoriza qualquer ambiente.",
  },
  {
    id: 3,
    title: "Cama Solteiro Madeira Maciça",
    image: Bed,
    price: 799.5,
    description:
      "Cama de solteiro feita em madeira maciça, resistente e com design clássico. Ideal para quartos infantis, juvenis ou de hóspedes, combina robustez com um visual atemporal. O acabamento em verniz realça a beleza natural da madeira, enquanto a estrutura reforçada garante estabilidade e longa vida útil. Fácil de montar e compatível com diversos tipos de colchão.",
  },
  {
    id: 4,
    title: "Cama Casal Estofada",
    image: Bed,
    price: 999.0,
    description:
      "Cama de casal com estrutura estofada, proporcionando conforto e elegância ao ambiente. O estofamento em tecido macio e resistente oferece um toque sofisticado, enquanto a cabeceira alta garante apoio extra para leitura ou descanso. Estrutura interna de madeira de reflorestamento, sustentável e durável. Ideal para quem busca unir estilo e funcionalidade no quarto.",
  },
  {
    id: 5,
    title: "Sofá 2 Lugares Compacto",
    image: Sofa,
    price: 1290.0,
    description:
      "Sofá compacto para 2 lugares, ideal para ambientes pequenos e funcionais. Seu design minimalista se adapta facilmente a diferentes estilos de decoração, enquanto o assento e encosto acolchoados garantem conforto mesmo em espaços reduzidos. Estrutura leve, fácil de transportar e montar, perfeito para apartamentos, escritórios ou quartos.",
  },
  {
    id: 6,
    title: "Sofá Canto Modular",
    image: Sofa,
    price: 2490.0,
    description:
      "Sofá de canto modular, versátil e perfeito para acomodar toda a família. Com módulos independentes, permite diversas configurações para se adaptar ao seu espaço. Revestimento em tecido de alta resistência, fácil de limpar, e almofadas macias para máximo conforto. Ideal para salas amplas, áreas de convivência ou home theaters.",
  },
  {
    id: 7,
    title: "Sofá Chaise Longue",
    image: Sofa,
    price: 2090.0,
    description:
      "Sofá com chaise longue, proporcionando conforto extra para relaxar. O design elegante e contemporâneo valoriza qualquer sala de estar, enquanto a chaise permite esticar as pernas e aproveitar momentos de descanso. Estrutura robusta, espuma de alta densidade e tecido agradável ao toque garantem durabilidade e bem-estar. Perfeito para quem busca sofisticação e funcionalidade.",
  },
];

export const cart: ProductProps[] = [];
