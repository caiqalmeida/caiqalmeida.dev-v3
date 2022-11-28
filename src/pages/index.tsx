import { Container } from "../components";

export default function Home() {
  return (
    <Container>
      <h1 className="font-bold text-white text-5xl tracking-tight mb-8">
        Oi, eu sou o <span className="text-gradient">Caíque</span>
      </h1>

      <h2 className="mb-1">
        Web developer na{" "}
        <a
          className="link text-white font-bold"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.samisaude.com.br/"
        >
          SamiSaúde
        </a>
      </h2>

      <h3>Estou sempre aprendendo e tentando compartilhar a respeito .</h3>
    </Container>
  );
}
