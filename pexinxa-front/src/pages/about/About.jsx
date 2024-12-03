import { Navbar } from "../../components/Navbar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
const persona1 = "/persona1.png";
const persona2 = "/persona2.png";
const icaro = "/Icaro.jpg";
const mateus = "/Mateus.jpg";
const fatec = "/Fatec.jpg";
const brainstorm = "/brainstorm.jpg";

export const About = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="relative bg-sky-50 min-h-[300px] overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 transform -translate-x-8 z-10"></div>
        <div className="container mx-auto px-4 py-12 relative z-20">
          <div className="max-w-2xl mx-auto text-center mt-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Conheça a
              <br />
              Cultura Pexinxa
            </h1>
            <p className="text-lg mb-8 font-montserrat font-semibold">
              E descubra se você dá match com a gente!
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/4 z-10"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-orange-400 rounded-full transform translate-x-1/3 translate-y-1/4 z-10"></div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">
                  Cultura <span className="text-orange-600">Pexinxa</span>
                </h2>
                <p className="text-gray-600 mb-4 font-montserrat font-medium">
                  Em um cenário onde os preços dos produtos variam
                  constantemente, economizar nas compras de supermercado é mais
                  desafiador do que nunca. É com grande entusiasmo que
                  apresentamos o Pexinxa, um aplicativo revolucionário criado
                  para tornar a economia nas suas compras uma tarefa simples e
                  eficaz.
                </p>
                <p className="text-gray-600 font-montserrat font-medium">
                  Nossa cultura é baseada em valores sólidos e princípios que
                  nos guiam em todas as nossas decisões e ações.
                </p>
              </div>
              <div className="flex-1 relative">
                <img
                  src={brainstorm}
                  alt="Cultura Pexinxa"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-orange-400 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
              Nossos valores e seus princípios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-orange-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 font-montserrat font-medium">
                  Foco no Cliente
                </h3>
                <p>
                  Facilitamos suas compras, ajudando você a economizar tempo e
                  dinheiro.
                </p>
              </div>
              <div className="bg-orange-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 font-montserrat font-medium">
                  Inovação
                </h3>
                <p>
                  Transformamos a forma de economizar no supermercado com
                  soluções práticas.
                </p>
              </div>
              <div className="bg-orange-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 font-montserrat font-medium">
                  Colaboração
                </h3>
                <p>
                  Unimos pessoas e tecnologia para criar uma experiência única e
                  eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 font-montserrat">
              Experiências de sucesso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <img
                    src={persona1}
                    alt="Colaborador"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Economia Transformadora
                    </h3>
                    <p className="text-gray-600">
                      Depois de usar o Pexinxa, consegui economizar mais de 30%
                      nas minhas compras semanais!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <img
                    src={persona2}
                    alt="Colaborador"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold mb-2">Praticidade Incrível</h3>
                    <p className="text-gray-600">
                      Agora, planejo minhas compras com facilidade e ainda
                      aproveito as melhores ofertas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Nossos Colaboradores
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { id: 1, name: "Icaro Bellem", photo: icaro },
                { id: 2, name: "Mateus Gonçalves", photo: mateus },
                { id: 3, name: "Fatec Matão", photo: fatec },
              ].map((collaborator) => (
                <div key={collaborator.id} className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500">
                    <img
                      src={collaborator.photo}
                      alt={`Foto de ${collaborator.name}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-8  rounded-full shadow-lg">
                    <p className="font-semibold text-orange-500">
                      {collaborator.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
      <Footer />
    </main>
  );
};

export default About;
