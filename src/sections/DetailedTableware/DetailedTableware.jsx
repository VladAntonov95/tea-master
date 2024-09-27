// import arrow back
import { IoIosArrowBack } from "react-icons/io";

// import next Image
import Image from "next/image";

// import button component
import Button from "@/components/Button/Button";

// import tableware data
import { tablewares } from "./tableware";

// create details tableware component
const DetailedTableware = ({ onBack }) => {
  return (
    <section className="container m-auto">
      <section className="flex py-8">
        <button onClick={onBack}>
          <IoIosArrowBack className="h-10 w-10 text-wood" />
        </button>
        <h2 className="mx-auto text-2xl font-bold">Наявний посуд</h2>
      </section>
      <section className="mx-auto max-w-[700px] laptop:max-w-[1024px]">
        {tablewares.map((tableware) => (
          <article
            className="mb-4 flex flex-col rounded-3xl p-4 text-center shadow-custom tablet:mb-8 tablet:flex-row tablet:p-8"
            key={tableware.id}
          >
            <Image
              src={tableware.imageUrl}
              alt={`tableware ${tableware.name}`}
              priority={true}
              width={500}
              height={500}
              className="h-[100%] w-[400px] rounded-[12px] tablet:mr-8 tablet:min-w-[256px]"
            />
            <section className="flex max-w-[500px] flex-col justify-between">
              <h3 className="my-4 text-l tablet:my-8 tablet:text-lg">
                {tableware.name}
              </h3>
              <p className="text-m">{tableware.description}</p>
              <Button
                className="mx-auto mt-4 px-[72px] py-2 text-md font-semibold tablet:mt-auto"
                title="Зробити замовленя посуду"
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

export default DetailedTableware;
