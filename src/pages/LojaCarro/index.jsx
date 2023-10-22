import './index.scss';
import Cabecalho from '../cabecalho/index';
import Carro from '../assets/images/carro.png'
import { useState } from 'react';


export default function LojaCarro(){
    const [preco, setPreco] = useState('');
    const [parcela, setParcela] = useState('');
    const [juros, setJuros] = useState('');
    const [valorT, setValorT] = useState('')
    const [valorP, setValorP] = useState('')

    const Calcular = () =>{
        let x = preco * ( 1 + juros/100) ** parcela;
        let y = x / parcela;

        setValorT(new Intl.NumberFormat('pt-BR' , {style: 'currency', currency: 'BRL'}).format(x.toFixed(2)));
        setValorP(new Intl.NumberFormat('pt-BR', {style: 'currency' , currency: 'BRL'}).format(y.toFixed(2)));

        setParcela('');
        setJuros('');
        setPreco('');
    }
    return(
        <>
        <Cabecalho />
            <div className='container-carro'> 
            <h1>Simulador de Compra Veículo</h1> 
            
                <div className='conteudo-carro'>
                 <div className='carro'>
                     <img src={Carro} />
                </div>
                <div className='compra-carro'> 
                    <div>
                        <h1>Valor Total</h1>
                        <input type='number' value={preco}  onChange={e => setPreco(e.target.value)}/>
                    </div>
                    <div className='parcela-juros'>
                        <div >
                            <h1>Parcelas</h1>
                            <input type='number' value={parcela} onChange={e => setParcela(e.target.value)}/>
                        </div>
                        <div>
                            <h1>Juros Mensal%</h1>
                            <input type='number' value={juros} onChange={e => setJuros(e.target.value)}/>
                        </div>
                    </div>
                    <div className='total-carro'>
                        <button onClick={Calcular}>Calcular</button>
                        <div>
                            <p>Parcela: {valorP}</p>
                            <p>Valor Total:{valorT}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
}