import FlexItem from "../atoms/FlexItem";
import "../../assets/styles/FlexBox.css";

function FlexBox() {
  const flexItem = [1, 2, 3, 4, 5,6];

  return (
    <div className="flex-container">
      {flexItem.map((item) => (
        <FlexItem key={item} itemId={item} />
      ))}
    </div>
  );
}

export default FlexBox;
