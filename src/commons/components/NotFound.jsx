import { BiSearch } from "react-icons/bi";
import BackButton from "./BackButton";
import { Container } from "./Container";

export default function NotFound() {
  return (
    <>
      <Container>
        <BackButton />
        <div className="w-full mt-40 flex flex-col gap-5 items-center justify-center">
          <BiSearch size="70px"></BiSearch>
          <h1 className=" text-xl font-bold text-neutral-800">
            Halaman yang anda cari tidak ada
          </h1>
        </div>
      </Container>
    </>
  );
}
