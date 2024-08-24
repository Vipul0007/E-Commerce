import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoBagAddSharp } from "react-icons/io5";
import { IoBagRemoveSharp } from "react-icons/io5";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const foundElement = bag.indexOf(item.id) >= 0;

  const addToCart = () => {
    dispatch(bagActions.addItemsToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeItemsFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!foundElement ? (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={addToCart}
        >
          <IoBagAddSharp />
          Add to Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <IoBagRemoveSharp />
          Remove
        </button>
      )}
    </div>
  );
};

export default HomeItem;
