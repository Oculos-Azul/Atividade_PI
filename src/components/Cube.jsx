import { Container, Image, Title, Description } from "./StyleCube";

function Cube(props) {
    const { aqui1 } = props;

    return (
        <>
            <Container>
                <Image src={aqui1.image} />
                <div>
                    <Title>{aqui1.title}</Title>
                    <Description>{aqui1.description}</Description>
                </div>
            </Container>
        </>
    );
}

export default Cube;
