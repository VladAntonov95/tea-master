// import arrow back
import { IoIosArrowBack } from "react-icons/io";

// import next Image
import Image from "next/image";

// import button component
import Button from "@/components/Button/Button";

// import teas data
import { teas } from "../Tea/teas";

// create DatailedTea component
const DetailedTea = ({ onBack }) => {
  return (
    <section className="h-[100%] mx-auto max-w-[280px] bigMobile:max-w-[400px] tablet:max-w-[768px] bigMobile:p-2 tablet:p-4 laptop:max-w-[1024px] my-8">
      <section className="flex border-b-2 border-b-dark-text border-t-2 border-t-dark-text py-5">
        <button onClick={onBack}>
          <IoIosArrowBack className="w-10 h-10" />
        </button>
        <h2 className="text-2xl font-bold align-middle mx-auto">Наявні Чаї</h2>
      </section>
      <section>
        {teas.map((tea) => (
          <article className="border-b-2 border-b-dark-text py-5 text-center">
            <h3 className="text-lg my-4 text-center">{tea.name}</h3>
            <Image
              src={tea.imageUrl}
              alt={`tea ${tea.name}`}
              priority={true}
              width={500}
              height={400}
              className="h-[400px] w-[500px] mx-auto rounded-[12px]"
            />
            <p className="text-m mt-2 text-center">{tea.bigDescription}</p>
            <Button
              className="w-[50%] h-[50px] font-semibold text-m mt-8"
              title="Зробити замовленя чаю"
            >
              {`Замовити ${tea.name}`}
            </Button>
          </article>
        ))}
      </section>
    </section>
  );
};

export default DetailedTea;
