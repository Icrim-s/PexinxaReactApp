import { useCart } from "../../context/CartContext";
import PropTypes from "prop-types";
import jsPDF from "jspdf";
import "jspdf-autotable"; 


const EmptyCartImage = "/Sacolinha.png";

export const ShoppingCart = ({ isOpen, onClose }) => {
  const { items, addItem, removeItem, subtotal } = useCart();
  const comparison = 20.0;

  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.text("Sua Lista de Compras", 10, 10);

    const tableData = items.map((item, index) => [
      index + 1,
      item.name,
      item.quantity,
      `R$ ${item.price.toFixed(2)}`,
    ]);

    doc.autoTable({
      head: [["#", "Nome", "Quantidade", "Preço"]],
      body: tableData,
    });

    doc.text(`Subtotal: R$ ${subtotal.toFixed(2)}`, 10, doc.lastAutoTable.finalY + 10);
    doc.text(`Comparação: +R$ ${comparison.toFixed(2)}`, 10, doc.lastAutoTable.finalY + 20);
    doc.text(`Total: R$ ${(subtotal + comparison).toFixed(2)}`, 10, doc.lastAutoTable.finalY + 30);

    doc.save("lista_de_compras.pdf");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
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
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-sm text-gray-500 font-semibold mb-2">
                  Sua lista em
                </h2>
                <p className="font-bold mb-6 text-gray-800 text-xl">
                  Amarelão Supermercados
                </p>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b py-4"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{item.name}</p>
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
              </div>
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 text-sm">Subtotal:</span>
                  <span className="font-medium text-sm">
                    R$ {subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 text-sm">Comparação:</span>
                  <span className="text-orange-500 font-medium text-sm">
                    + R$ {comparison.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-bold text-gray-800">
                    R$ {(subtotal + comparison).toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={exportToPDF}
                  className="w-full bg-blue-500 text-white py-3 mt-4 rounded-lg hover:bg-blue-600 transition text-sm font-bold"
                >
                  Exportar para PDF
                </button>
                <button className="w-full bg-orange-500 text-white py-3 mt-4 rounded-lg hover:bg-orange-600 transition text-sm font-bold">
                  Comparar Preços
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ShoppingCart;