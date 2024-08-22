import { Container, Image, Title, Description } from "./StyleCube";

function Cube(props) {
    const { aqui1 } = props;

    return (
        <>
            if ((aqui1.id % 2) != 0)
            {
                <Container>
                    <Image src={aqui1.image} />
                    <div>
                        <Title>{aqui1.title}</Title>
                        <Description>{aqui1.description}</Description>
                    </div>
                </Container>
            }
            else
            {
                <Container>
                    <Image1 src={aqui1.image} />
                    <div>
                        <Title>{aqui1.title}</Title>
                        <Description>{aqui1.description}</Description>
                    </div>
                </Container>
            }
        </>
    );
}

export default Cube;
