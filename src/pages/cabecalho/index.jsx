import './index.scss';
import Logo from '../assets/images/logo.png'

export default function Cabecalho(){
    return(
        <div className="Cabecalho">
            <div>
                <img src={Logo}/>
                <p>Portifolho.me</p>
            </div>
        </div>
    );
}
