import React from 'react';
import Menu from '../../components/Menu';

import hand from '../../assets/hand.svg'

export default function Home() {
    return (
        <>
        <Menu>
            <div>
                <img src={hand} alt="redhand" />
                <h1>Siga essas dicas</h1>
                <h3>Ajude a combater o coronavírus</h3>
                <div>
                    <ol>
                        <li>
                            <p>Lavar as mãos frequentemente</p>
                        </li>
                        <li>
                            <p>Usar os cotovelos para cobrir a tosse</p>
                        </li>
                        <li>
                            <p>Não tocar o rosto</p>
                        </li>
                        <li>
                            <p>Manter distância segura</p>
                        </li>
                        <li>
                            <p>Só sair de casa em caso real de necessidade</p>
                        </li>
                        <li>
                            <p>Ao sair de casa, use máscara</p>
                        </li>
                        <li>
                            <p>Siga as instruções de sua autoridade local</p>
                        </li>
                        <li>
                            <p>Evite ir desnecessáriamente a clínicas ou hospitais para permitir que o sistema de saúde opere com mais eficiência, protegendo você e as outras pessoas</p>
                        </li>
                        <li>
                            <p>Nunca se automedique</p>
                        </li>
                        <li>
                            <p>Não caia em FAKE NEWS. Em caso de dúvidas entre em contato com a autoriade em saúde</p>
                        </li>
                    </ol>
                </div>
            </div>
        </Menu>
        </>
    )
};