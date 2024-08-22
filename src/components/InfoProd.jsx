import Cube from "./Cube";
import { Container } from "./StyleProd";

function Prod() {
    const prodList = [
        {
            id: 0,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description:
                "seu madrogas cortano cabelo do seo barriga muito loko vida lokaaaaaaaaaaaa",
        },
        {
            id: 1,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Doente.png",
            description:
                "seu madrogas vai descer o cacete no koichi agora to ate vendo slk",
        },
        {
            id: 2,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description:
                "seu madrogas cortano cabelo do seo barriga muito loko vida lokaaaaaaaaaaaa",
        },
        {
            id: 3,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description:
                "seu madrogas vai descer o cacete no koichi agora to ate vendo slk",
        },
        {
            id: 4,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description:
                "seu madrogas cortano cabelo do seo barriga muito loko vida lokaaaaaaaaaaaa",
        },
        {
            id: 5,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description:
                "seu madrogas vai descer o cacete no koichi agora to ate vendo slk",
        },
        {
            id: 6,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description:
                "Sherek Bugado cortano cabelo do seo barriga muito loko vida lokaaaaaaaaaaaa",
        },
        {
            id: 7,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description:
                "Sherek Bugado vai descer o cacete no koichi agora to ate vendo slk",
        },
        {
            id: 8,
            title: "Sherek Bugado",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description:
                "Sherek Bugado cortano cabelo do seo barriga muito loko vida lokaaaaaaaaaaaa",
        },
        {
            id: 9,
            title: "Sherek Mexicano",
            image: "../../public/Sherek_Face_Bugado.jpg",
            description:
                "Sherek Bugado cortano cabelo do seo barriga muito loko vida lokaaaaaaaaaaaa",
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
