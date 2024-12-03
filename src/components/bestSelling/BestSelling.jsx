import React, { useContext, useEffect, useState } from 'react'
import { PiBeerBottleBold } from "react-icons/pi";
import { RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import burgerImg from '../../assets/bestSelling/burger.svg'
import cupcackImg from '../../assets/bestSelling/cupCack.svg'
import pizzaImg from '../../assets/bestSelling/pizza.svg'
import icecreamImg from '../../assets/bestSelling/iceCream.svg'
import lineImg from '../../assets/bestSelling/lineimg.svg'
import { CartContext } from '../context/ContextApi';
import { LuSandwich } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function BestSelling() {
  const {addToCart} =useContext(CartContext)
//   console.log("context addtocart",addToCart)
  const api = {
      burgers: [
          { id: 101, mealName: "Chicken Burger", Price: 200, dec: "Juicy chicken patty with lettuce and mayo", image: "https://media.istockphoto.com/id/1224537929/photo/image-of-sesame-seed-bun-chicken-burger-with-chicken-patty-onion-rings-tomato-slices-cucumber.webp?a=1&b=1&s=612x612&w=0&k=20&c=GlJRkLJwzagjDzCjvJCn-w7OrHdSUa76V7428UwjP-Y=" },
          { id: 102, mealName: "Veg Burger", Price: 100, dec: "Delicious veggie patty with fresh vegetables", image: "https://media.istockphoto.com/id/1489417428/photo/crispy-aloo-tikki-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=FCi1GDnS38NCrQfEBx3nxRTuoITPesueZFkMkvhlyBI=" },
          { id: 103, mealName: "Cheese Burger", Price: 250, dec: "Cheesy goodness with a beef patty", image: "https://media.istockphoto.com/id/511484502/photo/double-cheese-and-bacon-cheeseburger.webp?a=1&b=1&s=612x612&w=0&k=20&c=Us0joN2d51ced9vo3zcDjJLID_p_INwtS2rTa-SLWZQ=" },
          { id: 104, mealName: "Bacon Burger", Price: 300, dec: "Beef patty topped with crispy bacon", image: "https://media.istockphoto.com/id/520215281/photo/bacon-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=vLxLg1wCGErxdG6w3yZBoGtVUnEY6tJl-gpJyYIMjUg=" },
          { id: 105, mealName: "Spicy Chicken Burger", Price: 220, dec: "Spicy chicken patty with jalapeños", image: "https://media.istockphoto.com/id/1400488896/photo/spicy-country-fried-chicken-sandwich-on-a-white-background.jpg?s=612x612&w=0&k=20&c=VAjcNxJuEZ13eCD-bT-Z6xleZiI2VgefwGCKxsh2_68=" },
          { id: 106, mealName: "Double Decker Burger", Price: 400, dec: "Two patties with all the toppings", image: "https://media.istockphoto.com/id/504317151/photo/double-decker-burger-made-from-vegetables-and-beef.jpg?s=612x612&w=0&k=20&c=phDHXkP5gXqRXka12jeXnxzSNZg2BV0uQ7s8wB9aF7Q=" },
          { id: 107, mealName: "Mushroom Burger", Price: 230, dec: "Grilled mushrooms with a beef patty", image: "https://media.istockphoto.com/id/1217723774/photo/burger-with-mushrooms-fried-onions-and-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=8sJ4Lw9nHzDE7nBpUavLmdb_SQI6v8w6KYlpaRFEWwc=" }
      ],
      pizzas: [
          { id: 108, mealName: "Margherita Pizza", Price: 300, dec: "Classic pizza with fresh mozzarella", image: "https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?a=1&b=1&s=612x612&w=0&k=20&c=qO_TA5oZTY4d1e14l6noMYmAB26sSoE8L0m_VYl2bcU=" },
          { id: 109, mealName: "Pepperoni Pizza", Price: 350, dec: "Loaded with pepperoni slices", image: "https://media.istockphoto.com/id/1387688651/photo/cheese-capsicum-onion-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=6B3mdpvOVBmRPK_X5_Viec2OqozAXBekjFs2V6Yd6xI=" },
          { id: 110, mealName: "BBQ Chicken Pizza", Price: 400, dec: "BBQ sauce with chicken and onions", image: "https://media.istockphoto.com/id/484811667/photo/homemade-barbecue-chicken-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rzt7Ysq1qjueDwUG01g-ibGCbL5aNxEHipOfhUXzNy0=" },
          { id: 111, mealName: "Vegetarian Pizza", Price: 280, dec: "Topped with fresh vegetables", image: "https://media.istockphoto.com/id/1412292873/photo/vegetable-lover-pizza-with-tomato-onion-chili-powder-garlic-and-black-pepper-isolated-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uyb1Y7Dlp3_SkCA-e6kQt1Ze0aHN5Kb6j9wIEq2loWk=" },
          { id: 112, mealName: "Hawaiian Pizza", Price: 320, dec: "Ham and pineapple toppings", image: "https://media.istockphoto.com/id/182873678/photo/pizza-ham-pineapple-on-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=u_bxRBq7XZmgLAoO8drHq5hEoc-SRF3RsXrx-7TL3vg=" },
         //  { id: 6, mealName: "Meat Lovers Pizza", Price: 450, dec: "Loaded with various meats", image: "https://example.com/images/meat_lovers_pizza.jpg" },
         //  { id: 7, mealName: "Four Cheese Pizza", Price: 380, dec: "A mix of four cheeses", image: "https://example.com/images/four_cheese_pizza.jpg" }
      ],
      cupcakes: [
          { id: 113, mealName: "Chocolate Cupcake", Price: 100, dec: "Rich chocolate flavor with frosting", image: "https://media.istockphoto.com/id/183060524/photo/three-cupcakes.webp?a=1&b=1&s=612x612&w=0&k=20&c=rjqSlefBiIcsttvQkEp6VK4UDI3TcU3AK_-N3ZEXq00=" },
          { id: 114, mealName: "Vanilla Cupcake", Price: 80, dec: "Classic vanilla flavor", image: "https://media.istockphoto.com/id/1182508676/photo/colorful-cupcakes-with-candy-sprinkles.webp?a=1&b=1&s=612x612&w=0&k=20&c=C6lFdl6Q_INT9qHDUVkveWxi-K2pCzRgdzH_wgWm60w=" },
          { id: 115, mealName: "Red Velvet Cupcake", Price: 120, dec: "Delicious red velvet with cream cheese frosting", image: "https://media.istockphoto.com/id/1298128663/photo/red-velvet-cupcakes-with-decorations-and-one-chocolate-cupcake-in-front.webp?a=1&b=1&s=612x612&w=0&k=20&c=zr5nZ1rehj_vLU-qMe_-1cc0C3O1e5hECEnuKy-0Lg0=" },
          { id: 116, mealName: "Lemon Cupcake", Price: 90, dec: "Refreshing lemon flavor", image: "https://media.istockphoto.com/id/1346736166/photo/lemon-and-poppy-cupcakes.webp?a=1&b=1&s=612x612&w=0&k=20&c=buCnbCPChrzCQoTZZkmThQjhWpVbBpO_ToTAg-99NUs=" },
          { id: 117, mealName: "Carrot Cupcake", Price: 110, dec: "Moist carrot cupcake with walnuts", image: "https://media.istockphoto.com/id/1340508604/photo/carrot-cupcakes.webp?a=1&b=1&s=612x612&w=0&k=20&c=bZnmKQde3fjnW_2tAjxzCVZ-t6SsDGn1BYNXOhQJFwY=" },
         //  { id: 6, mealName: "Cookies and Cream Cupcake", Price: 130, dec: "Chocolate cupcake with cookie pieces", image: "https://example.com/images/cookies_and_cream_cupcake.jpg" },
         //  { id: 7 , mealName: "Strawberry Cupcake", Price: 115, dec: "Light and fluffy with fresh strawberries", image: "https://example.com/images/strawberry_cupcake.jpg" }
      ],
      icecreams: [
          { id: 118, mealName: "Vanilla Ice Cream", Price: 50, dec: "Classic vanilla flavor", image: "https://media.istockphoto.com/id/165206308/photo/ice-cream.jpg?s=612x612&w=0&k=20&c=T34LOeNXw11AX8r_bKf4hstIv9T85HXUtM9_VocZldg=" },
          { id: 119, mealName: "Chocolate Ice Cream", Price: 60, dec: "Rich chocolate flavor", image: "https://media.istockphoto.com/id/153560334/photo/delicious-gourmet-chocolate-ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=32NM0sW1pZs4Wd-p0UET6h8jqn20EJ5SW8VX8WzexLw=" },
          { id: 120, mealName: "Strawberry Ice Cream", Price: 55, dec: "Fresh strawberry flavor", image: "https://media.istockphoto.com/id/1264447431/photo/strawberry-ice-cream-with-fresh-strawberries.webp?a=1&b=1&s=612x612&w=0&k=20&c=TQlJ25fS9sbdrkSLwNwPRdQDHbM4ATXHVrRvLVZ-zmw=" },
          { id: 121, mealName: "Mint Chocolate Chip", Price: 65, dec: "Minty ice cream with chocolate chips", image: "https://media.istockphoto.com/id/477694264/photo/chocolate-chip-mint-ice-cream-cookie-sandwiches.webp?a=1&b=1&s=612x612&w=0&k=20&c=FUJWw-GLKJdR19j4I1b559xJdK0sjASRUW-pZROnldU=" },
          { id: 122, mealName: "Cookies and Cream", Price: 70, dec: "Creamy ice cream with cookie pieces", image: "https://media.istockphoto.com/id/1207824644/photo/biscuits-filled-with-chocolate-cream-chocolate-cream-cookies-brown-chocolate-biscuits-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=sgrBAXt71xCSglKfQJl8Tqw6lmfrUln2WRLLTfB_FuA=" },
         //  { id: 6, mealName: "Mango Ice Cream", Price: 75, dec: "Tropical mango flavor", image: "https://example.com/images/mango_ice_cream.jpg" },
         //  { id: 7, mealName: "Coffee Ice Cream", Price: 80, dec: "Rich coffee flavor", image: "https://example.com/images/coffee_ice_cream.jpg" }
      ],
      coldDrinks: [
          { id: 123, mealName: "Coca Cola", Price: 30, dec: "Classic cola flavor", image: "https://media.istockphoto.com/id/1282672553/photo/glass-of-cold-cola-soft-drink-with-ice-on-wooden-background.jpg?s=612x612&w=0&k=20&c=k_MYEz-7-Jo3oDMQ6HgayqkskTKFtMaegQDe8EYLlLo=" },
          { id: 124, mealName: "Sprite", Price: 30, dec: "Lemon-lime flavored soda", image: "https://media.istockphoto.com/id/524153833/photo/glass-of-cola-fanta-sprite-isolated-with-clipping-path.jpg?s=612x612&w=0&k=20&c=tG8ACEU0nLb1cvphC3wBTZ3VAi_3m8Jb8fpayUd0IIE=" },
          { id: 125, mealName: "Fanta", Price: 30, dec: "Orange flavored soda", image: "https://media.istockphoto.com/id/472233426/photo/fanta.jpg?s=612x612&w=0&k=20&c=-6PSSAJhpOdOcxvmSGQ9I2ImPbk1xAg-n8lhllGauKs=" },
          { id: 126, mealName: "Iced Tea", Price: 40, dec: "Refreshing iced tea", image: "https://media.istockphoto.com/id/1403759730/photo/orange-thai-iced-condensed-milk-tea-in-transparent-plastic-glass-with-straw-isolated-on-white.jpg?s=612x612&w=0&k=20&c=M749fjxokrKEzGg1_J9TlTuUCTVCK7xXVdKnui005ro=" },
          { id: 127, mealName: "Lemonade", Price: 35, dec: "Freshly squeezed lemonade", image: "https://media.istockphoto.com/id/2148353470/photo/soaking-raw-cumin-seeds-drinks-or-cumin-powder-drinks-called-jal-jeera-in-india-for-healthy.jpg?s=612x612&w=0&k=20&c=lx2XI_f8gvV2Pikj4-6dGJD-Qh16ScOb5jdMHnqgmqU=" },
        
      ],
      sandwiches: [
          { id: 128, mealName: "Club Sandwich", Price: 250, dec: "Triple-layer sandwich with turkey, bacon, and lettuce", image: "https://media.istockphoto.com/id/182251744/photo/toasted-club-sandwich.jpg?s=612x612&w=0&k=20&c=9tZpEKsQt8RnKsBo20JRCaFON4umBhlYLCl23SG7mbE=" },
          { id: 129, mealName: "BLT Sandwich", Price: 200, dec: "Bacon, lettuce, and tomato sandwich on toasted bread", image: "https://media.istockphoto.com/id/1393795222/photo/bacon-lettuce-and-tomato-sandwich-cut-in-half.jpg?s=612x612&w=0&k=20&c=dOcyaIzKxA_t4QM9Yq6DoA0qN6S1ihQbeI4IWzOynqA=" },
          { id: 130, mealName: "Grilled Cheese Sandwich", Price: 150, dec: "Classic grilled cheese with melted cheddar", image: "https://media.istockphoto.com/id/1155217098/photo/croque-monsieur-grilled-cheese-sandwich-with-black-forest-ham-gruyere-and-bechamel-sauce.jpg?s=612x612&w=0&k=20&c=UJGhtVB82_0leKzSCbGiXQ3u1pyeBtmKIK3WDEzma40=" },
          { id: 131, mealName: "Chicken Caesar Sandwich", Price: 300, dec: "Grilled chicken with Caesar dressing and romaine", image: "https://media.istockphoto.com/id/2150926931/photo/merguez-burger-on-decorated-plate-on-wooden-textured-table.jpg?s=612x612&w=0&k=20&c=POYaRmGY1vC-eS-mEy5PL9i6salAJ93cxAFywOr1JGY=" },
          { id: 132, mealName: "Veggie Sandwich", Price: 180, dec: "Fresh vegetables with hummus on whole grain bread", image: "https://media.istockphoto.com/id/516957550/photo/sprouts-avocado-tomato-spinach-chickpeas-burger-rye-sandwich.jpg?s=612x612&w=0&k=20&c=aTv5VagLwEb8niNP_DyTsJlrTPnd71IgdTxmTWIXTuE=" },
      ],
      desserts: [
          { id: 133, mealName: "Chocolate Cake", Price: 250, dec: "Rich and moist chocolate cake with chocolate frosting", image: "https://media.istockphoto.com/id/135706779/photo/layered-chocolate-cake-with-frosting-raspberries-sauce-and-mint.jpg?s=612x612&w=0&k=20&c=wtEI-B_AmAIFK6ZwncroEaFzcgpEuUnp8MPsO7wphJI=" },
          { id: 134, mealName: "Cheesecake", Price: 300, dec: "Creamy cheesecake with a graham cracker crust", image: "https://media.istockphoto.com/id/1410017515/photo/delicious-no-bake-cheesecake-with-fresh-blueberry.jpg?s=612x612&w=0&k=20&c=FNtSGLosO4IxRH2X64Poa4JdPV2Hgd0dTu8yVfQfXbw=" },
          { id: 135, mealName: "Apple Pie", Price: 200, dec: "Classic apple pie with a flaky crust and cinnamon", image: "https://media.istockphoto.com/id/986635116/photo/homemade-apple-pie.jpg?s=612x612&w=0&k=20&c=YaOMnR9fQCPGUc03u19lYs_oZS4N5SY5Q18Lr7Powho=" },
          { id: 136, mealName: "Tiramisu", Price: 350, dec: "Layered dessert with coffee-soaked ladyfingers and mascarpone", image: "https://media.istockphoto.com/id/1134778606/photo/fresh-tiramisu-cake-white-background.jpg?s=612x612&w=0&k=20&c=wjVGkyFr0yTwPwCvctVkHHf3YEd71nM7IKusbDceR8E=" },
          { id: 137, mealName: "Brownie", Price: 150, dec: "Fudgy brownie topped with chocolate ganache", image: "https://media.istockphoto.com/id/155598375/photo/dessert-chocolate-cake.jpg?s=612x612&w=0&k=20&c=DbBk025te405Suf8zNBdgp67y3iJB9LsyXERPQMTAqY=" },
      ],
     
  };



 const [data,setData] =useState(api.pizzas)

 const [showActive,setShowActive] = useState('pizza')         


 const showBurger=()=>{
  setData(api.burgers)
  setShowActive('burger')
 }
 const showPizza=()=>{
  setData(api.pizzas)
  setShowActive('pizza')
 }
 const showCupCack=()=>{
  setData(api.cupcakes)
  setShowActive('cupcack')
 }                                              
 const showIceCream=()=>{
  setData(api.icecreams)
  setShowActive('icecream')
 }
 const showColdDrink=()=>{
  setData(api.coldDrinks)
  setShowActive('colddrink')
 }
 const showSandwich=()=>{
  setData(api.sandwiches)
  setShowActive('sandwich')
 }
 const showdessert=()=>{
  setData(api.desserts)
  setShowActive('dessert')
 }



 

 var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

return (
  <div className='  relative  w-[100vw]  lg:w-full h-fit lg:h-[600px] flex flex-col justify-center items-center
   overflow-x-hidden mt-[80px]  space-y-7 '>
   
          <p className=' self-start ml-[70px] font-bold text-[#EB5757] text-[1.4rem]'> Our Junk Food Menu</p>
         <h2 className=' self-auto md:self-start text-cente lg:text-start ml-[0px] md:ml-[70px] w-[90vw]
         md:w-[532px] lg:w-[532px]
         leading-[50px] font-bold text-balance text-[1.8rem] lg:text-[2.7rem] text-[#333]'>Menu That Always Makes You Fall In Love</h2>

      <div className='w-[95vw]  lg:w-[1250px]  mx-auto flex flex-col
       md:flex-row  lg:flex-row gap-y-20 justify-between'>


          <div className=' 
           font-medium text-[#000000] text-[1.5rem]
            space-y-8 w-[95vw]  md:w-[40vw] lg:w-[25%]
           h-[407px] scrollable'  > 
              <div  className={`flex gap-x-10  
              ${showActive==='burger'?
                  " w-[254px] h-[85px] rounded-full bg-[#EB5757] items-center text-[#F2F2F2]"
                  :"w-fit h-fit rounded-none bg-transparent text-[#000000] "}
              `}>
                   <div className={`${showActive ?
                      '  ml-3 w-[48px] h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center '
                      :'ml-0 w-fit h-fit bg-transparent rounded-none flex-none '}`}> 
                  <img src={burgerImg} alt="" />
                  </div>
                  <button onClick={()=>showBurger()} className='outline-none'>  burger</button>
                 
              </div>
              <div className={` flex items-center   gap-x-10
               ${showActive==='pizza'?
                  " w-[254px] h-[85px] rounded-full bg-[#EB5757] items-center text-[#F2F2F2]"
                  :"w-fit h-fit rounded-none bg-transparent text-[#000000] "}
               `}>
                  
                   <div className={`${showActive ?
                      '  ml-3 w-[48px] h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center '
                      :'ml-0 w-fit h-fit bg-transparent rounded-none flex-none '}`}>    
                  <img src={pizzaImg} alt="" className='w-[30px] h-[30px]' />
                  </div>
                  <button onClick={()=>showPizza()} className='outline-none'>pizza</button>
                  
              </div>
              <div className={`flex gap-x-10 ${showActive==='cupcack'?
                  " w-[254px] h-[85px] rounded-full bg-[#EB5757] items-center text-[#F2F2F2]"
                  :"w-fit h-fit rounded-none bg-transparent text-[#000000] "}`}>
                   <div className={`${showActive ?
                      '  ml-3 w-[48px] h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center '
                      :'ml-0 w-fit h-fit bg-transparent rounded-none flex-none '}`}>    
                  <img src={cupcackImg} alt="" className='w-[30px] h-[30px] ' />
                  </div>
                  <button onClick={()=>showCupCack()} className='outline-none'>Cupcack</button>
              </div>
              <div className={`flex  gap-x-10 ${showActive==='icecream' ?
                   ' w-[254px] h-[85px] rounded-full bg-[#EB5757] items-center text-[#F2F2F2]'
                   :'w-fit h-fit rounded-none bg-transparent text-[#000000]'} `}>
                  <div className={`${showActive ?
                      '  ml-3 w-[48px] h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center '
                      :'ml-0 w-fit h-fit bg-transparent rounded-none flex-none '}`}>  
                  <img src={icecreamImg} alt="" className='w-[35px] h-[35px]' />
                  </div>
                  <button onClick={()=>showIceCream()} className='outline-none'>icecream</button>
              </div>
              <div className={`text-green-700 text-[1.9rem]
              flex gap-x-10 w-[260px]
               ${showActive==='colddrink' ?
                   ' w-[254px] h-[85px] rounded-full bg-[#EB5757] items-center text-[#F2F2F2]'
                   :'w-fit h-fit rounded-none bg-transparent text-[#000000]'} `}>
                  <div className={` ${showActive ?
                      '  ml-3 w-[48px] h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center '
                      :'ml-0 w-fit h-fit bg-transparent rounded-none flex-none '}`}>     
                  <PiBeerBottleBold/>
                  </div>
                  <button onClick={()=>showColdDrink()}
                   className=' text-[1re] text-[1.4rem] text-black  outline-none '   >cold drinks</button>
              </div>

              <div className={` flex gap-x-10  
              ${showActive==='sandwich'?
                  " w-[254px] h-[85px] rounded-full bg-[#EB5757] items-center text-[#F2F2F2]"
                  :"w-fit h-fit rounded-none bg-transparent text-[#000000] "}
              `}>
                   <div className={`${showActive ?
                      '  ml-3 w-[48px] h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center '
                      :'ml-0 w-fit h-fit bg-transparent rounded-none flex-none '}`}> 
                  <img src={burgerImg} alt="" />
                  </div>
                  <button onClick={()=>showSandwich()} className='outline-none'> Sandwichs</button>
                 
              </div>
              <div className={`flex gap-x-10  
              ${showActive==='dessert'?
                  " w-[254px] h-[85px] rounded-full bg-[#EB5757] items-center text-[#F2F2F2]"
                  :"w-fit h-fit rounded-none bg-transparent text-[#000000] "}
              `}>
                   <div className={`${showActive ?
                      '  ml-3 w-[48px] h-[48px] bg-[#FFFFFF] rounded-full flex justify-center items-center '
                      :'ml-0 w-fit h-fit bg-transparent rounded-none flex-none '}`}> 
                  {/* <img src={burgerImg} alt="" /> */}
                  <LuSandwich className='text-red-600'></LuSandwich>
                  </div>
                  <button onClick={()=>showdessert()} className='outline-none'> Desserts</button>
                 
              </div>

              



          </div>

          {/* <div className='w-[2px] h-[400px] shadow-2xl bg-gray-400 rotate-180' ></div> */}
           {/* <img src={lineImg} alt="" className='h-[400px] hidden  lg:block' /> */}

          <div className=' w-[100vw]  ouitline-none p-1 md:p-0  md:w-[50%] lg:p-0 lg:w-[70%] rounded-3xl '>
          <Slider {...settings}>
              {data.map((item,index)=>{
                  return(
                      <div key={item.id} className=' outline-none  relative '>
                          <div className='h-[400px]'>
                          <img src={item.image} alt="" 
                          className='md:w-[] h-full rounded-3xl cursor-pointer filter brightness-50 '/>
                      
                          </div>
                          <div className='absolute bottom-5 ml-10 space-y-4'>
                              <div>
                                  <p className='text-[#ffffff] text-[2rem]'>{item.mealName}</p>
                                  <p className='text-[#ffff] font-bold text-[1.9rem]'>
                                      <span className='text-[#F2C94C] text-[1.3rem] font-bold'>₹ </span>
                                      {item.Price}</p>
                              </div>

                              <div className=' w-[150px] h-[50px] flex justify-center items-center font-bold gap-x-3
                               text-white text-[2rem] hover:borde
                             hover:bg-red-600
                              hover:borde  rounded-3xl  '>
                              <button onClick={()=>addToCart(item)} className='  font-medium
                               text-[1.3rem] text-white outline-none   '> Order Now</button>
                               
                               <RiArrowRightSLine className=''/>

                               </div>
                          </div>

                          
                      </div>
                  )
              })}
          </Slider>
          </div>
          </div>
      </div>

)
}

export default BestSelling

