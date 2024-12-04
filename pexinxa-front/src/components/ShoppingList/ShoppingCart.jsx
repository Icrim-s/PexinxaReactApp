import { useCart } from "../../context/CartContext";
import PropTypes from "prop-types";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useMemo } from "react";
import { useState } from "react";

const EmptyCartImage = "/Sacolinha.png";

export const ShoppingCart = ({ isOpen, onClose }) => {
  const { items, addItem, removeItem, subtotal } = useCart();
  const [showCard, setShowCard] = useState(false);

  const handleButtonAboveClick = () => {
    setShowCard(true);
    setTimeout(() => setShowCard(false), 3000);
  };

  const groupedItems = useMemo(() => {
    return items.reduce((groups, item) => {
      const marketName = item.market.name;
      if (!groups[marketName]) {
        groups[marketName] = { items: [], subtotal: 0 };
      }
      groups[marketName].items.push(item);
      groups[marketName].subtotal += item.price * item.quantity;
      return groups;
    }, {});
  }, [items]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Sua Lista de Compras", 10, 10);

    let currentY = 20;

    Object.entries(groupedItems).forEach(([marketName, group]) => {
      doc.setTextColor(255, 117, 24);
      doc.setFontSize(12);
      doc.text(marketName, 10, currentY);
      currentY += 10;
      
      const tableData = group.items.map((item, index) => [
        index + 1,
        item.name,
        item.quantity,
        `R$ ${item.price.toFixed(2)}`,
        `R$ ${(item.price * item.quantity).toFixed(2)}`,
      ]);
      doc.setTextColor(0,0,0),
      
      doc.autoTable({
        
        startY: currentY,
        head: [["#", "Produto", "Quantidade", "Preço Unitário", "Total", "Valor Real"]],
        body: tableData,
      });
      
      currentY = doc.lastAutoTable.finalY + 10;
    
      doc.setFontSize(10);
      doc.text(`Subtotal: R$ ${group.subtotal.toFixed(2)}`, 10, currentY);
      currentY += 10;
    });

    currentY += 2;
    doc.setFontSize(12);
    doc.setTextColor(255, 117, 24);
    currentY += 2;
    doc.setFontSize(16);
    doc.text(`Total: R$ ${(subtotal).toFixed(2)}`, 10, currentY);

    return doc.output("blob");
  };

  const exportToPDF = () => {
    const blob = generatePDF();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lista_de_compras.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };

  const shareOnWhatsApp = () => {
    const blob = generatePDF();

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const base64PDF = fileReader.result.split(",")[1];
      const pdfLink = `data:application/pdf;base64,${base64PDF}`;

      if (navigator.share) {
        navigator
          .share({
            title: "Lista de Compras",
            text: "Confira minha lista de compras do Amarelão Supermercados!",
            files: [
              new File([blob], "lista_de_compras.pdf", {
                type: "application/pdf",
              }),
            ],
          })
          .catch((err) => console.error("Erro ao compartilhar:", err));
        window.open(
          `https://wa.me/?text=${encodeURIComponent(
            "Confira minha lista de compras do Amarelão Supermercados! Clique no link para baixar o PDF: " +
              pdfLink
          )}`
        );
      }
    };
    fileReader.readAsDataURL(blob);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 `fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? "
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:max-w-sm bg-white shadow-lg transition-transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-orange-500 hover:text-orange-600 text-xl font-bold"
        >
          ✕
        </button>

        <div className="p-6 pt-16 flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center space-y-4">
              <img
                src={EmptyCartImage}
                alt="Sacola vazia"
                className="w-42 h-auto"
              />
              <p className="text-gray-600 text-xl font-medium">
                Sua Lista está vazia
              </p>
              <p className="text-gray-500 text-sm">Adicione itens</p>
            </div>
          ) : (
            <div className="flex flex-col justify-between overflow-y-auto flex-1">
              <div className="flex-1 overflow-y-auto pr-2 ">
                {Object.entries(groupedItems).map(([marketName, group]) => (
                  <div key={marketName} className="mb-6">
                    <h2 className="text-sm text-gray-500 font-semibold mb-2">
                      Sua lista em
                    </h2>
                    <p className="font-bold text-gray-800 text-xl">
                      {marketName}
                    </p>

                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center border-b py-4"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            R$ {item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 bg-gray-100 rounded-full text-gray-600 text-center font-bold"
                          >
                            -
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            onClick={() => addItem(item)}
                            className="w-8 h-8 bg-gray-100 rounded-full text-gray-600 text-center font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-600 text-sm">Subtotal:</span>
                      <span className="font-medium text-sm">
                        R$ {group.subtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex justify-between mb-4">
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-bold text-gray-800">
                    R$ {(subtotal).toFixed(2)}
                  </span>
                </div>
                <div className="mt-6">
                <button
                  onClick={() => handleButtonAboveClick()}
                  className="w-full bg-blue-500 text-white py-3 mb-4 rounded-lg hover:bg-gray-600 transition text-sm font-bold"
                >
                  Definir Rotas
                </button>
                <div className="flex justify-between space-x-4">
                <button
                  onClick={exportToPDF}
                  className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition text-sm font-bold"
                >
                  Exportar para PDF
                </button>
                <button
                  onClick={shareOnWhatsApp}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition text-sm font-bold"
                >
                  Compartilhar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
          )}
        </div>
        {showCard && (
          <div className="absolute bottom-8 left-4 right-4 bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-lg text-center">
            <p className="text-gray-700 font-medium">
              Esta funcionalidade será implementada no futuro!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ShoppingCart;
