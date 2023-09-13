import "./App.css";
import Guarantee from "./components/Guarantee";

function App() {
  return (
    <div className="App">
      <div className="guarantee-container">
        <Guarantee
          imgUrl="./assets/f-delivery.png"
          title="Free Shipping"
          description="Enjoy hassle-free shopping with no additional costs for delivery, bringing savings straight to your door."
        />

        <Guarantee
          imgUrl="./assets/coin.png"
          title="100% Money back"
          description="Experience risk-free shopping with our straightforward return process, guaranteeing a full refund if you're not satisfied."
        />

        <Guarantee
          imgUrl="./assets/chat.png"
          title="Online support 24/7"
          description="Our expert team is available anytime, day or night, to offer guidance and solutions when you need them most."
        />
      </div>
    </div>
  );
}

export default App;
