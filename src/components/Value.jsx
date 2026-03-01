import styled from "styled-components";
import Prueba2 from "../assets/Backgrounds/prueba2.png"
import OkICON from "../assets/Icons/okIC.svg"
import { device } from "../breakpoints/breakpoints";


const Value = () => {

    const valuesData = [
        {
            id:1,
            title:"Turismo Responsable y Ético",
            description:"Operamos bajo principios de respeto, legalidad y protección integral, cumpliendo con la certificación ESCNNA, garantizando cero tolerancia a la explotación comercial de niñas, niños y adolescentes."
        },
        {
            id:2,
            title:"Seguridad y Respaldo Garantizado",    
            description:"Contamos con cobertura de seguro Colasistencia, brindando tranquilidad y acompañamiento ante cualquier eventualidad durante la experiencia."
        },
        {
            id:3,   
            title:"Profesionalismo Certificado",
            description:"Nuestro equipo está capacitado y comprometido con estándares formales de calidad, seguridad y atención al cliente."
        },
        {
            id:4,
            title:"Compromiso con el Turismo Sostenible",    
            description:"Promovemos prácticas responsables que protegen el entorno natural y cultural de cada destino."
        },
        {
            id:5,   
            title:"Experiencias Confiables y Transparencia Operativa",
            description:"Ofrecemos procesos claros, comunicación honesta y servicios organizados que generan confianza en cada viajero.."
        }
    ]   

    return (<>

    <GlobalContainer>
            <Card>

                <CardText>
                    <h2 style={{fontWeight:"500"}}>¿Por qué elegir Espeletia Trips es lo mejor?</h2>
                    <Separator />
                    <p>Ofrecemos experiencias únicas, personalizadas e inolvidables en cada viaje que ofrecemos.</p>
                </CardText>
                <CardImg src={Prueba2} alt="Imagen de valor" />
                

            </Card>

            <ValueColumn>
                {valuesData.map(value => (
                    <InlineBlock key={value.id}>
                        <img src={OkICON} alt="Icono de aprobación" style={{width:"50px", height:"auto"}} />
                        <ValueTitles>{value.title}</ValueTitles>
                    </InlineBlock>
                ))}
            </ValueColumn>

        </GlobalContainer>
    
    </>)
}

export default Value

const Separator = styled.hr`
    border: 0;
    height: 1px;
    background: #fff;
    margin: 1rem 0;
    width: 80%;
    border-radius: 5px;
    @media ${device.mobile} {
        margin: 1.5rem 0;
    }
`
const GlobalContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    max-width: 1000px;
    max-height: 300px;
    gap: 3rem;
    @media ${device.mobile} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
const Card = styled.div`
    width: 600px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg,rgba(84, 85, 37, 1) 1%,
                             rgba(42, 123, 155, 1) 26%, 
                             rgba(87, 199, 133, 1) 59%, 
                             rgba(239, 227, 24, 1) 100%);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
              rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
              rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 15px;
    color: #fff;

    @media ${device.mobile} {
        width: 360px;
    }
`
const CardImg = styled.img`
    width: 55%;
    height: 350px;
    @media ${device.mobile} {
        display: none;
    }
`
const CardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    max-width: 40%;
    margin: 3rem;

    @media ${device.mobile} {
        width: 100%;
    }
      
`
const ValueColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 40%;
    height: 100%;
    @media ${device.mobile} {
        width: 100%;
    }
`
const InlineBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1rem;
    padding-bottom: 2rem;
    cursor: pointer;
    @media ${device.mobile} {
        padding-bottom: 1.5rem;
    }

`
const ValueTitles = styled.h3`
    font-weight: 500;

    @media ${device.mobile} {
        font-size: 1.2rem;
    }
`