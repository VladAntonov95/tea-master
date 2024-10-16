// import arrow back
import { IoIosArrowBack } from "react-icons/io";

// import next Image
import Image from "next/image";

// import button component
import Button from "@/components/Button/Button";

// import teas data
import { teas } from "../Tea/teas";

// create DatailedTea component
const DetailedTea = ({ onBack, selectedTea, onSelectTea, addToCart }) => {
  const handleTeaSelect = (tea) => {
    onSelectTea(tea);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToList = () => {
    onSelectTea(null);
  };

  return (
    <section className="container m-auto min-h-[65vh]">
      {!selectedTea ? (
        <>
          <section className="relative flex items-center py-4">
            <button onClick={onBack} className="mr-4 self-start">
              <IoIosArrowBack className="h-10 w-10 text-dark-green hover:text-hover-color" />
            </button>
            <h2 className="absolute left-1/2 -translate-x-1/2 transform text-center font-merriweather text-lg font-bold bigMobile:text-xl tablet:text-lg">
              Наявні Чаї
            </h2>
          </section>
          <section className="mx-auto max-w-[700px] laptop:max-w-[1024px]">
            {teas.map((tea) => (
              <article
                className="relative mb-4 flex flex-col rounded-3xl p-4 text-center shadow-custom tablet:mb-8 tablet:flex-row tablet:p-8"
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
                <section className="flex max-w-[500px] flex-col laptop:max-h-[350px]">
                  <h3 className="my-4 font-merriweather text-l tablet:mb-8 tablet:mt-0 tablet:text-lg">
                    {tea.name}
                  </h3>
                  <p className="font-roboto text-m">{tea.bigDescription}</p>
                  <p className="p-4 font-roboto text-m">{`Вартість: ${tea.price}грн`}</p>
                  <div className="bottom-8 flex flex-col tablet:absolute tablet:left-[55%] laptop:left-[63%]">
                    <Button
                      className="mx-auto px-[72px] py-2 font-roboto text-sm font-semibold"
                      title="Детальніше про чай"
                      onClick={() => handleTeaSelect(tea)}
                    >
                      {`Детальніше`}
                    </Button>
                    <Button
                      className="mx-auto mt-4 px-[72px] py-2 font-roboto text-sm font-semibold"
                      title="Зробити замовленя чаю"
                      onClick={() => addToCart(tea)}
                    >
                      {`Замовити`}
                    </Button>
                  </div>
                </section>
              </article>
            ))}
          </section>
        </>
      ) : (
        <>
          <section className="flex pt-4 laptop:pt-8">
            <button onClick={handleBackToList}>
              <IoIosArrowBack className="h-10 w-10 text-dark-green hover:text-hover-color" />
            </button>
            <h2 className="mx-auto font-merriweather text-lg font-bold bigMobile:text-xl tablet:text-lg">
              {selectedTea.name}
            </h2>
          </section>
          <section className="flex flex-col px-4 py-5 mobile:py-6 tablet:py-8 laptop:flex-row laptop:p-8">
            <Image
              src={selectedTea.imageUrl}
              alt={`tea ${selectedTea.name}`}
              priority={true}
              width={1200}
              height={1200}
              className="mx-auto h-full min-h-[348px] w-[400px] rounded-[12px] tablet:max-h-[400px] tablet:min-w-[700px] laptop:max-h-[350px] laptop:min-h-[348px] laptop:min-w-[450px]"
            />
            <section className="flex flex-col justify-between laptop:max-h-[350px] laptop:p-8">
              <p className="py-4 text-center font-roboto text-m">
                {selectedTea.pageDescription}
              </p>
              <p className="text-center font-roboto text-m">{`Вартість: ${selectedTea.price}грн`}</p>
              <Button
                className="mx-auto mt-4 px-[72px] py-2 font-roboto text-sm font-semibold"
                title="Зробити замовленя чаю"
                onClick={() => addToCart(selectedTea)}
              >
                {`Замовити`}
              </Button>
            </section>
          </section>
        </>
      )}
    </section>
  );
};

export default DetailedTea;
