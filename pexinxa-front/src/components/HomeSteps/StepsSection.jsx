const search = "/search.png";
const porcent = "/porcent.png";
const bag = "/bag.png";

export const StepsSection = () => {
  const steps = [
    {
      image: search, 
      title: "1° Busque Produtos",
      description: "Escolha os produtos que você quer comprar e adicione à sua lista de comparações.",
    },
    {
      image: porcent, 
      title: "2° Compare Preços",
      description: "Veja a comparação de preços entre diferentes mercados que você selecionou.",
    },
    {
      image: bag, 
      title: "3° Economize já!",
      description: "Com sua lista em mãos, vá às compras e aproveite a economia que você fez!",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8 font-montserrat">
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-white border-2 border-orange-300 rounded-md p-6 w-72 text-center shadow-md  "
        >
          <img
            src={step.image} 
            alt={step.title} 
            className="w-16 h-16 mx-auto mb-4 transition-all hover:-translate-y-2"
          />
          <h3 className="text-orange-500 font-bold text-lg mb-2 font-montserrat">{step.title}</h3>
          <p className="text-gray-500">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StepsSection;
