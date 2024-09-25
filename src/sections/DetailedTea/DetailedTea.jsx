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
    <section className="container m-auto max-w-[280px] bigMobile:max-w-[400px] tablet:max-w-[768px] laptop:max-w-[1024px]">
      <section className="flex py-8">
        <button onClick={onBack}>
          <IoIosArrowBack className="h-10 w-10 text-wood" />
        </button>
        <h2 className="mx-auto text-2xl font-bold">Наявні Чаї</h2>
      </section>
      <section>
        {teas.map((tea) => (
          <article
            className="mb-8 flex rounded-3xl p-8 shadow-custom"
            key={tea.id}
          >
            <Image
              src={tea.imageUrl}
              alt={`tea ${tea.name}`}
              priority={true}
              width={400}
              height={300}
              className="h-[300px] w-[400px] rounded-[12px]"
            />
            <section className="ml-8 max-w-[500px]">
              <h3 className="my-8 text-lg">{tea.name}</h3>
              <p className="text-m">{tea.bigDescription}</p>
              <Button
                className="mt-8 h-[50px] w-[50%] text-m font-semibold"
                title="Зробити замовленя чаю"
              >
                {`Замовити`}
              </Button>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};

export default DetailedTea;
