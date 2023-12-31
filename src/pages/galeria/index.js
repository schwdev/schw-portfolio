import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
//imagens
import helpDesk from '../../assets/images/services/helpDesk.png';
import infraRedes from '../../assets/images/services/infraRedes.png';
import security from '../../assets/images/services/security.png';
import webDesigner from '../../assets/images/services/webDesigner.png';
//styles
import './galeria.css';

export default function Galeria() {

    const [showHelpDesk, setShowHelpDesk] = useState(false);
    const helpClose = () => setShowHelpDesk(false);
    const helpShow = () => setShowHelpDesk(true);

    const [showCabeamento, setShowCabeamento] = useState(false);
    const cabeamentoClose = () => setShowCabeamento(false);
    const cabeamentoShow = () => setShowCabeamento(true);

    const [showSecurity, setShowSecurity] = useState(false);
    const securityClose = () => setShowSecurity(false);
    const securityShow = () => setShowSecurity(true);

    const [showWebDesign, setShowWebDesign] = useState(false);
    const webDesignerClose = () => setShowWebDesign(false);
    const webDesignerShow = () => setShowWebDesign(true);


    return (
        <div className='servico-content'>
            <h1 style={{ color: "#ADF1D2" }}>SERVIÇOS</h1>
            <div className='cards-content'>
                <Card className='gap-1' style={{ maxWidth: '24rem', minHeight: '34rem', backgroundColor: "#553555", color: "#ADF1D2", boxShadow: "0px 0px 15px 3px rgba(173, 241, 210, 1)" }}>
                    <Card.Img variant="top" src={helpDesk} />
                    <Card.Body className='d-flex flex-column' style={{ gap: '20px' }}>
                        <Card.Title>Help Desk TI</Card.Title>
                        <Card.Text className="cardText">
                            O Help Desk de TI é uma equipe ou serviço responsável por fornecer suporte técnico aos usuários internos ou externos de uma organização. <br /><br />Ele visa resolver problemas, responder a perguntas e oferecer assistência relacionada a tecnologia.
                        </Card.Text>
                        {/* <Button className='buttonCard' onClick={helpShow} style={{ width: '100%' }}>Vantagens sobre o serviço</Button> */}
                    </Card.Body>
                </Card>

                <Card className='gap-1' style={{ maxWidth: '24rem', minHeight: '34rem', backgroundColor: "#553555", color: "#ADF1D2", boxShadow: "0px 0px 15px 3px rgba(173, 241, 210, 1)" }}>
                    <Card.Img variant="top" src={infraRedes} />
                    <Card.Body className='d-flex flex-column' style={{ gap: '40px' }}>
                        <Card.Title>Infraestrutura de redes </Card.Title>
                        <Card.Text className="cardText">
                            A infraestrutura de redes refere-se à fundação técnica que suporta a comunicação de dados entre dispositivos, permitindo a troca de informações e o acesso a recursos compartilhados.                        </Card.Text>
                        {/* <Button className='buttonCard' onClick={cabeamentoShow}>Go somewhere</Button> */}
                    </Card.Body>
                </Card>

                <Card className='gap-1' style={{ maxWidth: '24rem', minHeight: '34rem', backgroundColor: "#553555", color: "#ADF1D2", boxShadow: "0px 0px 15px 3px rgba(173, 241, 210, 1)" }}>
                    <Card.Img variant="top" src={security} />
                    <Card.Body className='d-flex flex-column' style={{ gap: '20px' }}>
                        <Card.Title>Segurança empresarial de redes</Card.Title>
                        <Card.Text className="cardText">
                            A segurança empresarial de redes é uma área crítica para garantir a proteção de dados, informações e sistemas de uma organização. <br /><br /> À medida que as redes empresariais se tornam mais complexas e interconectadas, os desafios de segurança também aumentam.
                        </Card.Text>
                        {/* <Button className='buttonCard' onClick={securityShow}>Go somewhere</Button> */}

                    </Card.Body>
                </Card>

                <Card className='gap-1' style={{ maxWidth: '24rem', minHeight: '34rem', backgroundColor: "#553555", color: "#ADF1D2", boxShadow: "0px 0px 15px 3px rgba(173, 241, 210, 1)" }}>
                    <Card.Img variant="top" src={webDesigner} />
                    <Card.Body className='d-flex flex-column' style={{ gap: '20px' }}>
                        <Card.Title>Criação de WebSite</Card.Title>
                        <Card.Text className="cardText">
                            A criação de sites é uma disciplina que envolve o desenvolvimento e a implementação de conteúdo online acessível através da internet. <br /><br />
                            Ao criar um site, diversos elementos, como design, usabilidade, funcionalidades e otimização para motores de busca, devem ser considerados.
                        </Card.Text>
                        {/* <Button className='buttonCard' onClick={webDesignerShow}>Go somewhere</Button> */}
                    </Card.Body>
                </Card>

            </div>




            <>

                <Modal
                    show={showHelpDesk}
                    onHide={helpClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Vantagens HELP DESK TI</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ol>
                            <li><b>Resolução Rápida de Problemas:</b></li>
                                <ul><li>O Help Desk proporciona uma abordagem eficiente para a resolução rápida de problemas técnicos. Isso minimiza o tempo de inatividade dos usuários e ajuda a manter a produtividade.</li></ul>
                            <li><b>Aumento da Produtividade:</b></li>
                            <ul><li>Ao fornecer suporte técnico eficaz, o Help Desk contribui para a produtividade geral dos funcionários. Os problemas podem ser resolvidos de maneira rápida, permitindo que os usuários se concentrem em suas tarefas principais.</li></ul>
                            <li><b>Base de Conhecimento:</b></li>
                            <ul><li>A criação e manutenção de uma base de conhecimento é uma prática comum em um Help Desk. Isso permite o armazenamento de soluções para problemas recorrentes, facilitando o acesso rápido a informações úteis.</li></ul>
                            <li><b>Melhoria da Experiência do Usuário:</b></li>
                            <ul><li>Oferecer um suporte técnico eficaz contribui para uma experiência do usuário positiva. Isso aumenta a satisfação dos usuários e cria um ambiente de trabalho mais harmonioso.</li></ul>
                            <li><b>Monitoramento Proativo:</b></li>
                            <ul><li>Muitos sistemas de Help Desk incluem recursos de monitoramento proativo que permitem identificar e resolver problemas antes que impactem significativamente os usuários ou as operações.</li></ul>
                            <li><b>Gestão Eficiente de Recursos:</b></li>
                            <ul><li>O Help Desk ajuda na alocação eficiente de recursos de TI. Os técnicos podem identificar padrões de problemas e sugerir melhorias que ajudem a otimizar o ambiente tecnológico.</li></ul>
                            <li><b>Segurança da Informação:</b></li>
                            <ul><li>Um Help Desk bem gerenciado pode desempenhar um papel crucial na segurança da informação, identificando e respondendo a potenciais ameaças de segurança.</li></ul>
                            <li><b>Redução de Custos:</b></li>
                            <ul><li>A resolução remota de problemas e a prevenção de recorrências significam menos interrupções físicas no local de trabalho. Isso pode levar a uma redução nos custos relacionados a viagens e tempos de inatividade.</li></ul>
                            <li><b>Gestão de Mudanças Eficaz:</b></li>
                            <ul><li>O Help Desk facilita a comunicação com os usuários sobre mudanças planejadas no ambiente de TI. Isso minimiza surpresas desagradáveis e ajuda na adaptação suave a novas tecnologias.</li></ul>
                            <li><b>Aprimoramento Contínuo:</b></li>
                            <ul><li>Com base nos dados e no feedback coletados, as equipes de Help Desk podem implementar melhorias contínuas nos processos, procedimentos e na prestação de serviços.</li></ul>
                        </ol>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={helpClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={helpClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={showCabeamento}
                    onHide={cabeamentoClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">HELP DESK TI</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={cabeamentoClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={cabeamentoClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={showSecurity}
                    onHide={securityClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">HELP DESK TI</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={securityClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={securityClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={showWebDesign}
                    onHide={webDesignerClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">HELP DESK TI</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={webDesignerClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={webDesignerClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


            </>



        </div>
    )
};
