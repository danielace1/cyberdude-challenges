import Card from "../components/Cards/Card";
import HorizontalCard from "../components/Cards/HorizontalCard";

const CardsPage = () => {
  return (
    <section className="mx-28 my-10">
      <h1 className="text-3xl font-semibold">Cards</h1>
      <p className="text-lg mt-2 tracking-wide">
        Cards provide a flexible and extensible content container with multiple
        variants and options.
      </p>

      <div className="flex space-x-10  border px-10 py-8 rounded mt-5">
        <Card
          image="https://via.placeholder.com/640x360"
          title="Card Title"
          body="Some quick example text to build on the card title and make up the bulk of the card's content."
          btn="Go Somewhere"
        />

        <HorizontalCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiMsDqEHQ9O-Ykumr0GTzxcBz3-t-m4WVtCZTUFsDK5AdXZxTVv-R81gfmgxtuQHWnh0&usqp=CAU"
          title="Card Title"
          body="Some quick example text to build on the card title and make up the bulk of the card's content."
          smallText="Last updated 3 mins ago"
        />
      </div>
    </section>
  );
};

export default CardsPage;
