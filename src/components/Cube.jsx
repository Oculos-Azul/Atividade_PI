import { Container, Image, Title, Description } from "./StyleCube";

function Cube(props) {
    const { aqui1 } = props;
    const ID = aqui1.id % 2 !== 0;

    return (
        <>
            <Container>
                <Image src={aqui1.image} ID={ID} />
                <div>
                    <Title>{aqui1.title}</Title>
                    <Description>{aqui1.description}</Description>
                </div>
            </Container>
        </>
    );
}

export default Cube;
