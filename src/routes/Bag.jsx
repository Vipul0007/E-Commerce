import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bag = useSelector((store) => store.bag);

  const finalItems = items.filter((item) => bag.indexOf(item.id) >= 0);
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
