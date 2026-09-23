
function Carrinho({ itens, total, onRemover }) {
    return (
        <div className="card p-3">
            <h5>Carrinho</h5>
            {itens.length === 0 ? (
                <p className="text-muted">Nenhum item adicionado.</p>
            ) : (
                <ul className="list-group mb-3">
                    {itens.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between">
                            <span>{item.nome}</span>
                            <span>R$ {item.preco.toFixed(2)}</span>
                            <button onClick={() => onRemover(index)} className="btn btn-sm btn-outline-danger">
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <p className="fw-bold">
                Total: R$ {total.toFixed(2)}
            </p>
        </div>
    );
}

export default Carrinho;