import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import chefImg from "../../assets/customerReviews/chef-picture.svg";
import rectangleImg from "../../assets/customerReviews/Rectangle 4.svg";
import firstGirlImg from "../../assets/customerReviews/firstgirl.svg";
import secondGirlImg from "../../assets/customerReviews/secondgirl.svg";
import thirdGirlImg from "../../assets/customerReviews/thirdgirl.svg";
import gingerImg from "../../assets/customerReviews/ginger.svg";
import onionImg from "../../assets/customerReviews/onion.svg";
import onion2Img from "../../assets/customerReviews/onion2.svg";
import leaf1Img from "../../assets/customerReviews/firstleaf.svg";
import leaf2Img from "../../assets/customerReviews/secondleaf.svg";

function CustomerReviews() {
  const reviews = {
    firstReview: [
      {
        id: 1,
        firstHeading: "WHAT THEY SAY",
        secondHeading: "What Our Customers Say About Us",
        para: "Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you”.",
        image: firstGirlImg,
        imageJoint1: "Theresa Jordan",
        imageJoint2: "Food Enthusiast",
        star: 4,
        starRating: "4.8",
      },
    ],

    secondReview: [
      {
        id: 2,
        firstHeading: "WHAT THEY SAY",
        secondHeading: "What Our Customers Say About Us",
        para: "I had an amazing experience at Fudo! The flavors were incredible, and the presentation of the dishes was beautiful. The staff was friendly and attentive. I can’t wait to come back for more!",
        image: secondGirlImg,
        imageJoint1: "Michael Smith",
        imageJoint2: "Culinary Explorer",
        star: 5,
        starRating: "5.0",
      },
    ],

    thirdReview: [
      {
        id: 3,
        firstHeading: "WHAT THEY SAY",
        secondHeading: "What Our Customers Say About Us",
        para: "Fudo exceeded my expectations! The variety of dishes available is impressive, and everything I tried was bursting with flavor. Plus, the ambiance is perfect for a nice dinner out.",
        image: thirdGirlImg,
        imageJoint1: "Jessica Lee",
        imageJoint2: "Gourmet Lover",
        star: 4,
        starRating: "4.7",
      },
    ],
  };
  const [data, setData] = useState(reviews.firstReview);
  const firstData = () => {
    setData(reviews.firstReview);
  };
  const secondData = () => {
    setData(reviews.secondReview);
  };
  const thirdData = () => {
    setData(reviews.thirdReview);
  };

  return (
    <section className=" mt-[130px] lg:mt-[300px]   font-poppins">
      <div
        className="relative w-[90vw] md:w-[95vw] lg:w-[1250px] mx-auto
        flex flex-col gap-y-10 md:flex-row justify-between"
      >
        {/* left */}
        <div className="  lg:w-fit md:w-[50%] ">
          <div className="">
            <div className="relative lg:static">
            <img src={rectangleImg} alt="" className="w-full " />
            <img
              src={chefImg}
              alt=""
              className="absolute  lg:bottom-0
                lg:left-[-100px]  bottom-0  "
            />
            </div>
            <div
              className=" absolute top-[250px] md:left-[200px]
               md:top-[320px] lg:top-[400px] right-[-10px]  lg:left-[300px]
              w-[200px] h-[80px]  lg:w-[263px] lg:h-[161px] bg-[#ffff]
             flex justify-center items-center shadow-[0_2px_5px_rgba(0,0,0,0.2)]
              rounded-3xl "
            >
              <div className="space-y-3">
                <p className="font-semibold text-[1.3rem] text-[#000000] leading-[22px]">
                  Our Reviewers
                </p>
                <div className="flex ">
                  <img
                    src={firstGirlImg}
                    alt=""
                    onMouseEnter={() => firstData()}
                    className="firstimg cursor-pointer w-[40px] h-[40px] lg:w-fit lg:h-fit"
                  />
                  <img
                    src={secondGirlImg}
                    alt=""
                    onMouseEnter={() => secondData()}
                    className="secondimg ml-[-10px] lg:ml-[-20px] cursor-pointer w-[40px] h-[40px] lg:w-fit lg:h-fit"
                  />
                  <img
                    src={thirdGirlImg}
                    alt=""
                    onMouseEnter={() => thirdData()}
                    className="thirdimg ml-[-10px] lg:ml-[-20px] cursor-pointer w-[40px] h-[40px] lg:w-fit lg:h-fit"
                  />
                  <div
                    className="firstimg ml-[-10px] lg:ml-[-20px] bg-[#EB5757] w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] rounded-full flex justify-center
                        items-center "
                  >
                    <p className="text-white">12k +</p>
                  </div>
                </div>
              </div>
            </div>
            <img src={gingerImg} alt="" className=" hidden md:block absolute bottom-[230px] md:left-[-50px] lg:left-[-70px]" />
            <img src={onionImg} alt="" className="md:hidden lg:block absolute bottom-[470px] left-[-5px] z-10" />
            <img src={onion2Img} alt="" className="md:hidden lg:block absolute bottom-[500px] left-[-25px] z-0 " />
            <img src={leaf1Img} alt="" className="hidden lg:block absolute left-[350px] top-[-200px]" />
            <img src={leaf2Img} alt="" className="hidden lg:block absolute left-[320px] top-[-200px]" />
          </div>
        </div>

        {/* right */}
        <div className="  lg:absolute right-0 top-[-60px] w-[90vw] 
        md:w-[45%] lg:w-[532px] 
         h-[400px] lg:h-[462px] ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[400px] lg:h-[462px] flex flex-col justify-between "
              >
                <p className="font-semibold text-[1.2rem] text-[#EB5757]">
                  what {item.imageJoint1} say
                </p>
                <h3
                  className="font-bold text-[1.9rem] lg:text-[2.9rem]
                        text-[#333333] leading-[40px] lg:leading-[60px]"
                >
                  {item.secondHeading}
                </h3>
                <p
                  className="w-[90vw]md:w-[45%] lg:w-[505px] lg:h-[128px  font-medium leading-[30px] text-[#333333]
                       text-[1rem] md:text-[1.2rem]   lg:text-[1.3rem]"
                >
                  {" "}
                  "{item.para}{" "}
                </p>

                <div className="flex items-center gap-x-3">
                  <img src={item.image} alt="" className="" />
                  <div className="">
                    <p
                      className="font-medium text-[1.3rem] leading-[30px]
                                text-[#000000]"
                    >
                      {item.imageJoint1}
                    </p>
                    <p
                      className="font-medium text-[1rem]
                                text-[#828282]"
                    >
                      {item.imageJoint2}
                    </p>
                  </div>
                </div>
                <div className="flex  items-center gap-x-4">
                  <ReactStars
                    count={5}
                    onChange={2}
                    value={item.starRating}
                    size={30}
                    activeColor="#ffd700"
                  />
                  <p
                    className="font-semibold text-[1rem] text-[#000000]
                            "
                  >
                    {item.starRating}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
