// import arrow back
import { IoIosArrowBack } from "react-icons/io";

// import next Image
import Image from "next/image";

// import button component
import Button from "@/components/Button/Button";

// import teas data
import { teas } from "../Tea/teas";

// create DatailedTea component
const DetailedTea = ({ onBack, selectedTea, onSelectTea }) => {
  const handleTeaSelect = (tea) => {
    onSelectTea(tea);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToList = () => {
    onSelectTea(null);
  };

  return (
    <section className="container m-auto">
      {!selectedTea ? (
        <>
          <section className="flex py-8">
            <button onClick={onBack}>
              <IoIosArrowBack className="text-dark-green hover:text-hover-color h-10 w-10" />
            </button>
            <h2 className="font-merriweather mx-auto text-lg font-bold">
              Наявні Чаї
            </h2>
          </section>
          <section className="mx-auto max-w-[700px] laptop:max-w-[1024px]">
            {teas.map((tea) => (
              <article
                className="mb-4 flex flex-col rounded-3xl p-4 text-center shadow-custom tablet:mb-8 tablet:flex-row tablet:p-8"
                key={tea.id}
              >
                <Image
                  src={tea.imageUrl}
                  alt={`tea ${tea.name}`}
                  priority={true}
                  width={500}
                  height={500}
                  className="h-full min-h-[348px] w-[400px] rounded-[12px] tablet:mr-8 tablet:min-h-[371px] tablet:min-w-[256px] laptop:max-h-[350px] laptop:min-h-[348px] laptop:min-w-[450px]"
                />
                <section className="flex max-w-[500px] flex-col justify-between laptop:max-h-[350px]">
                  <h3 className="font-merriweather my-4 text-l tablet:mb-8 tablet:mt-0 tablet:text-lg">
                    {tea.name}
                  </h3>
                  <p className="font-roboto text-m">{tea.bigDescription}</p>
                  <p className="p-4 font-roboto text-m">{`Вартість: ${tea.price}грн`}</p>
                  <Button
                    className="mx-auto mt-4 px-[72px] py-2 font-roboto text-sm font-semibold"
                    title="Детальніше про чай"
                    onClick={() => handleTeaSelect(tea)}
                  >
                    {`Детальніше`}
                  </Button>
                  <Button
                    className="mx-auto mt-4 px-[72px] py-2 font-roboto text-sm font-semibold"
                    title="Зробити замовленя чаю"
                  >
                    {`Замовити`}
                  </Button>
                </section>
              </article>
            ))}
          </section>
        </>
      ) : (
        <section>
          <section className="flex py-8">
            <button onClick={handleBackToList}>
              <IoIosArrowBack className="text-dark-green hover:text-hover-color h-10 w-10" />
            </button>
            <h2 className="font-merriweather mx-auto text-lg font-bold bigMobile:text-xl tablet:text-lg">
              {selectedTea.name}
            </h2>
          </section>
          <section className="mx-auto py-8">
            <Image
              src={selectedTea.imageUrl}
              alt={`tea ${selectedTea.name}`}
              priority={true}
              width={1200}
              height={1200}
              className="mx-auto h-full min-h-[348px] w-[400px] rounded-[12px] tablet:max-h-[400px] tablet:min-w-[700px] laptop:max-h-[350px] laptop:min-h-[348px] laptop:min-w-[450px]"
            />
            <section className="flex flex-col justify-between laptop:max-h-[350px]">
              <p className="py-4 text-center font-roboto text-m">
                {selectedTea.pageDescription}
              </p>
              <p className="text-center font-roboto text-m">{`Вартість: ${selectedTea.price}грн`}</p>
              <Button
                className="mx-auto mt-4 px-[72px] py-2 font-roboto text-sm font-semibold"
                title="Зробити замовленя чаю"
              >
                {`Замовити`}
              </Button>
            </section>
          </section>
        </section>
      )}
    </section>
  );
};

export default DetailedTea;
