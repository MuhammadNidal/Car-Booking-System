import CarCard from "../CarCard";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { className, onClick } = props;
  const customClasses = className
    .replace("slick-prev", "right-0")
    .replace("slick-next", "right-0");
  return (
    <div
      className={`${customClasses} absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-gray-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;

  const customClasses = className
    .replace("slick-prev", "left-0")
    .replace("slick-next", "left-0");
  return (
    <div
      className={`${customClasses} absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-gray-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};

const carDetails = [
  {
    title: "Corolla Altis - 2023",
    specsSubtitle: "1.6L CVT | 5 Seats | Sedan",
    mileage: "15,000 Miles",
    fuelType: "Petrol",
    transmission: "CVT",
    price: 45000,
    detailsUrl: "/car/corolla-altis",
    imageUrl: "https://toyota-central.com/Assets/images/Altis.png",
    badgeText: "Great Price",
  },
  {
    title: "Hyundai Tucson - 2023",
    specsSubtitle: "2.0L FWD | 5 Seats | SUV",
    mileage: "9,000 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    price: 67000,
    detailsUrl: "/car/hyundai-tucson",
    imageUrl:
      "https://cache3.pakwheels.com/system/car_generation_pictures/8720/original/Cover.jpg?1745488440",
    badgeText: "Hot Deal",
  },

  {
    title: "Suzuki Swift - 2024",
    specsSubtitle: "1.2L | 5 Seats | Hatchback",
    mileage: "5,000 Miles",
    fuelType: "Petrol",
    transmission: "Manual",
    price: 28000,
    detailsUrl: "/car/suzuki-swift",
    imageUrl:
      "https://cache1.pakwheels.com/system/car_generation_pictures/7441/original/SWIFT.jpg?1677750438",
    badgeText: "New Arrival",
  },

  {
    title: "Kia Sportage - 2023",
    specsSubtitle: "2.0L AWD | 5 Seats | SUV",
    mileage: "12,000 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    price: 68000,
    detailsUrl: "/car/kia-sportage",
    imageUrl:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter-31.png?isig=0&q=80  ",
    badgeText: "Featured",
  },
  {
    title: "Honda Civic - 2022",
    specsSubtitle: "1.5L Turbo | 5 Seats | Sedan",
    mileage: "22,000 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    price: 52000,
    detailsUrl: "/car/honda-civic",
    imageUrl: "https://ccarprice.com/products/Honda_Civic_Sedan_2022_1.jpg",
    badgeText: "Top Rated",
  },
  {
    title: "MG HS - 2023",
    specsSubtitle: "1.5L Turbo | 5 Seats | SUV",
    mileage: "11,000 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    price: 65000,
    detailsUrl: "/car/mg-hs",
    imageUrl:
      "https://cache4.pakwheels.com/system/car_generation_pictures/9075/original/Cover_%287%29.jpg?1753359389",
    badgeText: "Popular",
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white relative">
      {" "}
      <div className="max-w-6xl mx-auto px-10">
        <Slider {...settings}>
          {carDetails.map((car, index) => (
            <div key={index} className="px-6">
              {" "}
              <CarCard {...car} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderComponent;
