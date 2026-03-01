import styled from "styled-components";
import Title from "./Title";
import Colasistencia from "../assets/logos/logoColasistencia.png"
import Cortolima from "../assets/logos/logoCortolima.png"
import Escnna from "../assets/logos/logoESCNN.png"

const CertificateSection = () => {
    return <Container>
        <Title color="black">
            Seguro y certificado
        </Title>
        <Parrafo>
            Contamos con seguro de viaje a través de Colasistencia y tenemos certificado de sello Verde a traves de Cortolima
        </Parrafo>
        <LogoCont>
            <Logo src={Colasistencia} alt="logo colasistencia" />
            <Logo2 src={Cortolima} alt="logo cortolima"/>
            <Logo3 src={Escnna} alt="logo Escnna"/>
        </LogoCont>


    </Container>
}

export default CertificateSection

const Logo = styled.img`
  height: 80px;        /* mismo alto para todos */
  width: auto;         /* mantiene proporción */
  object-fit: contain; /* evita deformación */
  @media (max-width: 768px) {
        height: 50px;
    }
`;
const Logo2 = styled.img`
  height: 80px;        /* mismo alto para todos */
  width: auto;         /* mantiene proporción */
  object-fit: contain; /* evita deformación */

  @media (max-width: 768px) {
        height: 150px;
    }
`;
const Logo3 = styled.img`
  height: 80px;        /* mismo alto para todos */
  width: auto;         /* mantiene proporción */
  object-fit: contain; /* evita deformación */

  @media (max-width: 768px) {
        height: 100px;
    }
`;


const Parrafo = styled.p`
    font-size: 1.5rem;
    margin: 2rem 0;
    width: 60%;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        width: 80%;
    }
`
const LogoCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px; /* espacio uniforme entre logos */
    flex-wrap: wrap; /* por si en mobile se bajan */
`;

const Container = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 0;
`

