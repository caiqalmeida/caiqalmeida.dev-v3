import Image from "next/image";

export function Logo() {
  return (
    <Image src="/images/logo.svg" alt="caique logo" width={40} height={40} />
  );
}
