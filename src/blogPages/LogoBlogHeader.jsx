import BlogHeaderLogo from "../assets/logos/BlogLogo.svg"
import styled from "styled-components"

const LogoBlogHeader = () => {
    return (
    <>
        <LogoBlogHeaderComp src={BlogHeaderLogo} alt="Blog background" />
    </>
    )
}
export default LogoBlogHeader

const LogoBlogHeaderComp = styled.img`
    position: absolute;
    top: 0;
    right: -80px;
    width: 500px;
    z-index: 0;
    pointer-events: none;

    @media (max-width: 768px) {
        width: 300px;
    }
`