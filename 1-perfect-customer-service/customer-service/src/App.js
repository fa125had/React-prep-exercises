import "./App.css";
import Guarantee from "./components/Guarantee";

const guaranteeFeatures = [
  {
    id: 1,
    imgUrl: "./assets/f-delivery.png",
    title: "Free Shipping",
    description:
      "Enjoy hassle-free shopping with no additional costs for delivery, bringing savings straight to your door.",
  },
  {
    id: 2,
    imgUrl: "./assets/coin.png",
    title: "100% Money back",
    description:
      "Experience risk-free shopping with our straightforward return process, guaranteeing a full refund if you're not satisfied.",
  },
  {
    id: 3,
    imgUrl: "./assets/chat.png",
    title: "Online support 24/7",
    description:
      "Our expert team is available anytime, day or night, to offer guidance and solutions when you need them most.",
  },
];

function App() {
  return (
    <div className="App">
      <div className="guarantee-container">
        {guaranteeFeatures.map((feature) => {
          return (
            <Guarantee
              key={feature.id}
              imgUrl={feature.imgUrl}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
