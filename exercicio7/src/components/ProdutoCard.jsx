import { useState } from 'react';

function ProdutoCard({produto, onAdicionar}) {
    const [favorito, setFavorito] = useState(false);
    const semEstoque = produto.estoque === 0;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
                <div className="card-body">
                    <div style={{ fontSize: '2rem' }}>{produto.icone}</div>
                    <h5 className="card-title">{produto.nome}</h5>
                    <p className="text-muted small">{produto.categoria}</p>
                    <p className="card-text">{produto.descricao}</p>
                    <p className="card-text fw-bold">
                        R$ {produto.preco.toFixed(2)}
                    </p>
                    <p className={produto.estoque !== 0 ? 'text-success' : 'text-danger'}>
                        Estoque: {produto.estoque}
                    </p>
                    <div className="d-flex gap-2">
                        <button onClick={() => setFavorito(!favorito)} className={`btn ${favorito ? 'btn-danger' : 'btn-outline-secondary'}`}>
                            {favorito ? '♥' : '♡'}
                        </button>
                        <button onClick={onAdicionar} className="btn btn-primary" disabled={semEstoque}>
                            {semEstoque ? 'Sem estoque' : 'Adicionar'}
                        </button>
                    </div>
                </div>      
            </div>
        </div>
    );
}

export default ProdutoCard;