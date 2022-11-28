import Image from "next/image";

import { Container, Timeline } from "../components";
import profile from "../../public/images/profile.jpeg";

export default function About() {
  return (
    <Container>
      <div className="flex mb-20">
        <div className="w-full max-w-[150px] mr-6">
          <Image
            className="rounded-md"
            src={profile}
            alt="Caique Almeida profile picture"
          />
        </div>

        <div>
          <h1 className="font-bold text-5xl tracking-tight mb-6 text-white text-gradient">
            Caíque Almeida
          </h1>
          <p className="leading-7">
            Descobri o poder da programação em 2018, e desde então meu principal
            foco é aprender cada vez mais sobre tecnologia e suas
            possibilidades.
          </p>
        </div>
      </div>

      <Timeline />
    </Container>
  );
}
