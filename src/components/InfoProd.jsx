import Cube from "./Cube";
import { Container } from "./StyleProd";

function Prod() {
    const prodList = [
        {
            id: 0,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description: "Lore Ipsum",
        },
        {
            id: 1,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Doente.png",
            description: "Lore Ipsum",
        },
        {
            id: 2,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description: "Lore Ipsum",
        },
        {
            id: 3,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description: "Lore Ipsum",
        },
        {
            id: 4,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description: "Lore Ipsum",
        },
        {
            id: 5,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description: "Lore Ipsum",
        },
        {
            id: 6,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description: "Lore Ipsum",
        },
        {
            id: 7,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description: "Lore Ipsum",
        },
        {
            id: 8,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description: "Lore Ipsum",
        },
        {
            id: 9,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description: "Lore Ipsum",
        },
    ];

    return (
        <>
            <Container>
                {prodList.map((aqui1) => (
                    <Cube key={aqui1.id} aqui1={aqui1} />
                ))}
            </Container>
        </>
    );
}

export default Prod;
