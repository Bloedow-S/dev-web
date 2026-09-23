import { useState } from 'react';
import Navbar from './components/Navbar';
import ProdutoCard from './components/ProdutoCard';
import Carrinho from './components/Carrinho';
import produtos from './data/produtos.json';

function App() {
    const [carrinho, setCarrinho] = useState([]);
    const [toast, setToast] = useState(null);

    function adicionar(produto) {
        setCarrinho([...carrinho, produto]);
        setToast(`${produto.nome} adicionado`);
        setTimeout(() => setToast(null), 2000);
    }

    function removerItem(index) {
        setCarrinho(carrinho.filter((_, i) => i !== index));
    }

    const totalItens = carrinho.length;
    const totalPreco = carrinho.reduce((soma, item) => soma + item.preco, 0);

    return (
        <>
            <Navbar contador={totalItens} />
            <main className="container my-4">
                <div className="row">
                    <section className="col-md-8">
                        <div className="row g-4">
                            {produtos.map((produto) => (
                                <ProdutoCard
                                    key={produto.id}
                                    produto={produto}
                                    onAdicionar={() => adicionar(produto)}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="col-md-4">
                        <Carrinho itens={carrinho} total={totalPreco} onRemover={removerItem}/>
                    </section>
                </div>
            </main>

            {toast && (
                <div className="toast show position-fixed bottom-0 end-0 m-3 bg-success text-white">
                    <div className="toast-body">{toast}</div>
                </div>
            )}
        </>
    );
}

export default App;