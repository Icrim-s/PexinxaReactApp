export const formatarPreco = (valor) => `R$ ${valor.toFixed(2)}`;

export const calcularListaMaisBarata = (listas) => {
  if (!listas.length) return null;

  return listas.reduce((maisBarata, listaAtual) => {
    const totalAtual = listaAtual.reduce((total, item) => total + item.preco, 0);
    const totalMaisBarata = maisBarata.reduce((total, item) => total + item.preco, 0);

    return totalAtual < totalMaisBarata ? listaAtual : maisBarata;
  });
};
