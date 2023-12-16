import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { MdOutlineWorkOutline } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import SkillBar from 'react-skillbars';
import './sobre.css';


export default function Sobre() {

  const skills = [
    { type: 'HTML', level: 100 },
    { type: 'CSS', level: 100 },
    { type: 'Javascript', level: 100 },
    { type: 'React', level: 80 },
    { type: 'MySQL', level: 50 },
    { type: 'Node', level: 40 }
  ];

  const colors = {
    bar: "#96C5B0",
    
      title: {
      text: "#ADF1D2",
      background: "#553555"
    },
    
  };


  return (
    <>
      <div className="experience">
        <VerticalTimeline lineColor="#553555">
          <VerticalTimelineElement

            className="vertical-timeline-element--education"
            contentStyle={{ background: '#553555', boxShadow: 'none', color: '#ADF1D2', fontWeight: '900' }}
            contentArrowStyle={{ borderRight: '10px solid  #553555' }}
            iconStyle={{ background: '#553555', color: '#ADF1D2', boxShadow: "0px 0px 30px 5px rgba(173, 241, 210, 1)" }}
            icon={<IoIosSchool />}
            date="Dezembro - 2012"
            dateClassName='dateStyle'
          >
            <h3 className="vertical-timeline-element-title text-center">Formação colegial</h3>
            <hr />
            <h5 className="vertical-timeline-element-subtitle text-center">Ensino médio completo</h5>
            <hr />
            <p className="text-center">
              Escola Celus - AM
            </p>


          </VerticalTimelineElement>

          <VerticalTimelineElement

            className="vertical-timeline-element--education"
            contentStyle={{ background: '#553555', color: '#ADF1D2', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '10px solid  #553555' }}
            date="Setembro - 2016"
            dateClassName="dateStyle"
            iconStyle={{ background: '#553555', color: '#ADF1D2', boxShadow: "0px 0px 30px 5px rgba(173, 241, 210, 1)" }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title text-center">Formação Técnica</h3>
            <hr />
            <h5 className="vertical-timeline-element-subtitle text-center">Técnico em Manutenção de Computadores e Notebooks</h5>
            <hr />
            <p className="text-center">
              Centro de Educação Tecnológica do Amazonas - CETAM
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement

            className="vertical-timeline-element--education"
            contentStyle={{ background: '#553555', color: '#ADF1D2', boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '10px solid  #553555' }}
            date="Junho - 2019"
            dateClassName="dateStyle"
            iconStyle={{ background: '#553555', color: '#ADF1D2', boxShadow: "0px 0px 30px 5px rgba(173, 241, 210, 1)" }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title text-center">Formação Superior</h3>
            <hr />
            <h5 className="vertical-timeline-element-subtitle text-center">Tecnólogo em Segurança da Informação</h5>
            <hr />
            <p className="text-center">
              Faculdade Martha Falcão - Wyden
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement

            className="vertical-timeline-element--education"
            contentStyle={{ background: '#553555', boxShadow: 'none', color: '#ADF1D2', fontWeight: '900' }}
            contentArrowStyle={{ borderRight: '10px solid  #553555' }}
            iconStyle={{ background: '#553555', color: '#ADF1D2', boxShadow: "0px 0px 30px 5px rgba(173, 241, 210, 1)" }}
            date="2015 - 2016"
            dateClassName="dateStyle"
            icon={<MdOutlineSupportAgent />}
          >
            <h3 className="vertical-timeline-element-title text-center">Estágio TRE</h3>
            <hr />
            <h5 className="vertical-timeline-element-subtitle text-center">Estagiário de Suporte em TI</h5>
            <hr />
            <p className="text-center">
              Estágio do curso: Técnico em Manutenção de Computadores e Notebooks.
            </p>
            <hr />
            <p className="text-center">
              Tribunal Regional Eleitoral - AMAZONAS.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement

            className="vertical-timeline-element--education"
            contentStyle={{ background: '#553555', boxShadow: 'none', color: '#ADF1D2', fontWeight: '900' }}
            contentArrowStyle={{ borderRight: '10px solid  #553555' }}
            iconStyle={{ background: '#553555', color: '#ADF1D2', boxShadow: "0px 0px 30px 5px rgba(173, 241, 210, 1)" }}
            date="2018 - 2019"
            dateClassName="dateStyle"
            icon={<MdOutlineSupportAgent />}
          >
            <h3 className="vertical-timeline-element-title text-center">Estágio VISTEON</h3>
            <hr />
            <h5 className="vertical-timeline-element-subtitle text-center">Estagiário Analista de Redes</h5>
            <hr />
            <p className="text-center">
              Estágio do curso: Tecnologia em Segurança da Informação.
            </p>
            <hr />
            <p className="text-center">
              Empresa: VISTEON AMAZONAS
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement

            className="vertical-timeline-element--education"
            contentStyle={{ background: '#553555', boxShadow: 'none', color: '#ADF1D2', fontWeight: '900' }}
            contentArrowStyle={{ borderRight: '10px solid  #553555' }}
            iconStyle={{ background: '#553555', color: '#ADF1D2', boxShadow: "0px 0px 30px 5px rgba(173, 241, 210, 1)" }}
            date="Janeiro 2020 - Julho 2020"
            dateClassName="dateStyle"
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title text-center">Trabalho Técnico de TI</h3>
            <hr />
            <h5 className="vertical-timeline-element-subtitle text-center">BIOPLUS COMÉRCIO E REPRESENTAÇÕES</h5>
            <hr />
            <p className="text-center">
              Manutenção em computadores, suporte técnico aos usuários e fornecer treinamentos sobre o sistema da empresa.
            </p>
            <p className="text-center">
              GRUPO BRINGEL
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement

            className="vertical-timeline-element--education"
            contentStyle={{ background: '#553555', boxShadow: 'none', color: '#ADF1D2', fontWeight: '900' }}
            contentArrowStyle={{ borderRight: '10px solid  #553555' }}
            iconStyle={{ background: '#553555', color: '#ADF1D2', boxShadow: "0px 0px 30px 5px rgba(173, 241, 210, 1)" }}
            date="Julho 2020 - Janeiro 2023"
            dateClassName="dateStyle"
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title text-center">Trabalho Analista de Suporte de TI</h3>
            <hr />
            <h5 className="vertical-timeline-element-subtitle text-center">AÇO MANAUS INDÚSTRIA E COMÉRCIO DE FERRO E AÇO LTDA</h5>
            <hr />
            <p className="text-center">
              Administração de Firewall, Suporte aos usuários, Análise no sistema da empresa, Infra de redes.

            </p>

          </VerticalTimelineElement>

        </VerticalTimeline>
        <hr style={{ background: '#553555', height: '3px', opacity: '1' }} />

      </div >





      <div className='cursoSobre'>


        <h1 className='sobreH1'> CURSOS

        </h1>



        <ul className='gap-5'>
          <li><h3>Manutenção de computadores e notebooks - <span>SENAC</span></h3></li>
          <li><h3>Especialista em Redes de Computadores - <span>SENAC</span></h3></li>
          <li><h3>Linux I: conhecendo e utilizando o terminal - <span>ALURA</span></h3></li>
          <li><h3>Linux II: programas, processos e pacotes - <span>ALURA</span></h3></li>
          <li><h3>HTML5 e CSS3 - <span>ALURA</span></h3></li>
          <li><h3>JavaScript: explorando a linguagem - <span>ALURA</span></h3></li>
          <li><h3>SQL com MySQL: manipule e consulte dados - <span>ALURA</span></h3></li>
          <li><h3>Consultas SQL: avançando no SQL com MySQL - <span>ALURA</span></h3></li>
          <li><h3>Python: começando com a linguagem - <span>ALURA</span></h3></li>
          <li><h3>Python: avançando na linguagem - <span>ALURA</span></h3></li>

        </ul>

      </div>
      <hr style={{ background: '#553555', height: '3px', opacity: '1', width: '100%' }} />

      <div className='skills'>

        <h1 className='sobreH1'> HABILIDADES PROGRAMAÇÃO

        </h1>
       





        <SkillBar skills={skills} animationDuration={2000} height={'5vh'} colors={colors} symbol='%' symbolColor='#553555' />



      </div>
    </>
  )
};
