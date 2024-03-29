import React from 'react'
import {Routes,Route} from "react-router-dom";
import { HashRouter as BrowserRouter} from "react-router-dom"

//pages
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";
import Cart from '../Pages/Cart';


//Admin-auth
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import CreateProduct from '../Pages/Admin/CreateProduct';
import Products from "../Pages/Admin/AdminProducts";
import Users from '../Pages/Admin/Users';



//auth
import Register from '../Authentication/Register';
import Login from '../Authentication/Login'
import Dashboard from '../Pages/User/Dashboard';



//component
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import BottomMenu from '../Layout/BottomMenu';
import MobileMune from "../Layout/MobileMenu";
import { categories } from '../Component/Categories';



//Router
import PrivateUserRouter from './PrivateUserRouter';
import PrivateAdminRouter from './PrivateAdminRouter';
import UpdateProduct from '../Pages/Admin/UpdateProduct';
import TopHeader from '../Layout/TopHeader';
import ConfirmOrderPage from '../Pages/ConfirmOrderPage';
import CC from '../CC';
import Complete_Order from '../Pages/Complete_Order';




// Import your components dynamically
const dynamicComponents = {
  
  //menu pages
  computer_items : React.lazy(()=>import('../Pages/MenuPages/Computer_Items')),
  mobile_accessories : React.lazy(()=>import('../Pages/MenuPages/Mobile_Accessories')),
  headphone_items : React.lazy(()=>import('../Pages/MenuPages/Headphone_Items')),
  light_lamp : React.lazy(()=>import('../Pages/MenuPages/Light_Lapms')),
  routers_collection : React.lazy(()=>import('../Pages/MenuPages/Routers_Collection')),
  other_items : React.lazy(()=>import('../Pages/MenuPages/Other_Items')),
  home_appliances : React.lazy(()=>import('../Pages/MenuPages/Home_Appliances')),
  voucher : React.lazy(()=>import('../Pages/MenuPages/Home_Appliances')),
  speaker_microphone : React.lazy(()=>import('../Pages/MenuPages/Speaker_Microphone')),
  trimmer_shaver : React.lazy(()=>import('../Pages/MenuPages/Trimmer_Shaver')),
  smart_watches :  React.lazy(()=>import('../Pages/MenuPages/Smart_Watches')),
  books : React.lazy(()=>import('../Pages/MenuPages/Books')),

  //compute_items subpages  
  mouse: React.lazy(() => import('../Pages/SubMenuPages/Computer_Items/Mouse')),
  keyboard : React.lazy(()=> import('../Pages/SubMenuPages/Computer_Items/Keyboard')),
  mouse_pad : React.lazy(()=>import('../Pages/SubMenuPages/Computer_Items/Mouse_pad')),
  computer_glass : React.lazy(()=>import('../Pages/SubMenuPages/Computer_Items/ComputerGlass')),
  gaming_controller : React.lazy(()=>import('../Pages/SubMenuPages/Computer_Items/GamingContrller')),
  laptop_stands : React.lazy(()=>import('../Pages/SubMenuPages/Computer_Items/LaptopStand')),
  laptop_table : React.lazy(()=>import('../Pages/SubMenuPages/Computer_Items/LaptopTable')),
  pend_drive : React.lazy(()=>import('../Pages/SubMenuPages/Computer_Items/PenDrive')),

  //mobile accessories subpages
  charger : React.lazy(()=>import('../Pages/SubMenuPages/Mobile_Accessories/Charger')),
  wireless_charger : React.lazy(()=>import('../Pages/SubMenuPages/Mobile_Accessories/Wireless_charger')),
  memory_card : React.lazy(()=>import('../Pages/SubMenuPages/Mobile_Accessories/Memory_Card')),
  mobile_holder : React.lazy(()=>import('../Pages/SubMenuPages/Mobile_Accessories/Mobile_Holder')),
  ring_light : React.lazy(()=>import('../Pages/SubMenuPages/Mobile_Accessories/Ring_Light')),
  selfie_stick : React.lazy(()=>import('../Pages/SubMenuPages/Mobile_Accessories/Selfie_Stick')),
  battery : React.lazy(()=> import("../Pages/SubMenuPages/Mobile_Accessories/Battery")),
  power_bank : React.lazy(()=> import("../Pages/SubMenuPages/Mobile_Accessories/Power_Bank")),
  power_charger : React.lazy(()=> import("../Pages/SubMenuPages/Mobile_Accessories/Power_Charger")),
 
 //Trimmer & Shaver subpages
 electric_trimmer : React.lazy(()=> import("../Pages/SubMenuPages/Trimmer_Shaver/Electric_Trimmer")),
 electric_shaver : React.lazy(()=> import("../Pages/SubMenuPages/Trimmer_Shaver/Electric_Shaver")),
 
 //speaker & microphone subpages
 speaker : React.lazy(()=>import('../Pages/SubMenuPages/Speaker_Microphone/Speaker')),
 bluetooth_speaker : React.lazy(()=>import('../Pages/SubMenuPages/Speaker_Microphone/Bluethooth_Speaker')),
 microphone : React.lazy(()=>import('../Pages/SubMenuPages/Speaker_Microphone/Microphone')),
 karaoke_speaker : React.lazy(()=>import('../Pages/SubMenuPages/Speaker_Microphone/Karoke_Speaker')),
  
 //light & lamp subpages
 rgb_light : React.lazy(()=>import("../Pages/SubMenuPages/Light_Lamps/RGB_Light")),
 led_light : React.lazy(()=>import("../Pages/SubMenuPages/Light_Lamps/LED_Light")),
 emergency_light : React.lazy(()=>import("../Pages/SubMenuPages/Light_Lamps/Emergency_Light")),
 torch_light : React.lazy(()=>import("../Pages/SubMenuPages/Light_Lamps/Torch_Light")),
 
 //other items subpages
 calculator : React.lazy(()=>import('../Pages/SubMenuPages/Other_Item/Calculator')),
 toothbrush : React.lazy(()=>import('../Pages/SubMenuPages/Other_Item/ToothBrush')),
 bag_luggage : React.lazy(()=>import('../Pages/SubMenuPages/Other_Item/Bag_Luggage')),
 toy : React.lazy(()=>import('../Pages/SubMenuPages/Other_Item/Toy')),

 //home appliances subpages
 dry_iron : React.lazy(()=>import("../Pages/SubMenuPages/Home_Appliances/Dry_Iron")),
 water_heater : React.lazy(()=>import("../Pages/SubMenuPages/Home_Appliances/Water_Heater")),
 room_heater : React.lazy(()=>import("../Pages/SubMenuPages/Home_Appliances/Room_Heater")),
 electric_kettle : React.lazy(()=>import("../Pages/SubMenuPages/Home_Appliances/Electric_Kettle")),
 juicer : React.lazy(()=>import("../Pages/SubMenuPages/Home_Appliances/Juicer")),
 vacuum_cleaner : React.lazy(()=>import("../Pages/SubMenuPages/Home_Appliances/Vaccum_Cleaner")),
 vacuum_flask : React.lazy(()=>import("../Pages/SubMenuPages/Home_Appliances/Vaccum_Flask")),
 rechargeablefan : React.lazy(()=>import("../Pages/SubMenuPages/Home_Appliances/Rechargeable_Fan")),

 //smart watche subpages
 smart_watch : React.lazy(()=>import("../Pages/SubMenuPages/Smart_Watches/Smart_Watch")),
 watch_strap : React.lazy(()=>import("../Pages/SubMenuPages/Smart_Watches/Watch_Strap")),

 //headphone subpages
 gaming_headphone : React.lazy(()=>import('../Pages/SubMenuPages/Headphone_Items/Gaming_Headphone')),
 bluetooth_headphone : React.lazy(()=>import('../Pages/SubMenuPages/Headphone_Items/Bluthooth_Headphone')),
 in_ear_headphone : React.lazy(()=>import('../Pages/SubMenuPages/Headphone_Items/In_Ear_Headphone')),
 earbuds : React.lazy(()=>import('../Pages/SubMenuPages/Headphone_Items/Earbuds')),
 neckbands : React.lazy(()=>import('../Pages/SubMenuPages/Headphone_Items/Neckbands')),

 //routers collection subpages
 wifi_router: React.lazy(()=>import('../Pages/SubMenuPages/Routers_Collection/Wifi_Router')),
 router_stand: React.lazy(()=>import('../Pages/SubMenuPages/Routers_Collection/Router_Stand')),
 pocket_router: React.lazy(()=>import('../Pages/SubMenuPages/Routers_Collection/Pocket_Router')),

 //books subpages
 self_motivation : React.lazy(()=>import('../Pages/SubMenuPages/Books/Self_Motivation')),
 academic_book : React.lazy(()=>import('../Pages/SubMenuPages/Books/Academic_Book')),
 islamic_book : React.lazy(()=>import('../Pages/SubMenuPages/Books/Islamic_Book')),

 //voucher subpages
 gift_voucher : React.lazy(()=>import('../Pages/SubMenuPages/Voucher/Gift_Voucher')),
 wedding_voucher : React.lazy(()=>import('../Pages/SubMenuPages/Voucher/Weeding_Voucher')),
 love_voucher : React.lazy(()=>import('../Pages/SubMenuPages/Voucher/Love_Voucher')),
};

const LazyComponent = ({ componentName }) => {
  const Component = dynamicComponents[componentName];

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {Component ? <Component /> : null}
    </React.Suspense>
  );
};


const Router = () => {

  return (
    <BrowserRouter>
    <TopHeader />
     <Header />
     <Routes>
    

     
     <Route path='/dashboard' element={<PrivateUserRouter /> } >
     <Route path='/dashboard' element={<Dashboard />} />
      </Route>
  
      <Route path='/admin/dashboard' element={<PrivateAdminRouter /> } >
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/dashboard' element={<CreateProduct />} />
        <Route path='/admin/dashboard' element={<Products />} />
        <Route path='/admin/dashboard' element={<Users />} />
      </Route>
      
      <Route path='/admin/dashboard/editproduct' element={< UpdateProduct/>} />

        <Route path='/' element={<Home />} />

        {Object.keys(categories).map((Item,i)=>{
          return <Route key={i} path={`/${Item}`} element={<LazyComponent componentName={Item} />} />
         })}

        {categories.computer_items.map((Item,i)=>{
        return <Route key={i} path={`/computer_items/${Item}`}  element={<LazyComponent componentName={Item} />}/>
        })}

        {categories.mobile_accessories.map((Item,i)=>{
          return <Route key={i} path={`/mobile_accessories/${Item}`} element={<LazyComponent componentName={Item}/>} />
        })}

        {categories.headphone_items.map((Item,i)=>{
          return <Route key={i} path={`/headphone_items/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}


       {categories.smart_watches.map((Item,i)=>{
          return <Route key={i} path={`/smart_watches/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

       {categories.routers_collection.map((Item,i)=>{
          return <Route key={i} path={`/routers_collection/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}
        
       {categories.light_lamp.map((Item,i)=>{
          return <Route key={i} path={`/light_lamp/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

       {categories.home_appliances.map((Item,i)=>{
          return <Route key={i} path={`/home_appliances/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

       {categories.trimmer_shaver.map((Item,i)=>{
          return <Route key={i} path={`/trimmer_shaver/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

      {categories.speaker_microphone.map((Item,i)=>{
          return <Route key={i} path={`/speaker_microphone/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

      {categories.books.map((Item,i)=>{
          return <Route key={i} path={`/books/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}  

      {categories.other_items.map((Item,i)=>{
          return <Route key={i} path={`/other_items/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}  

      
{categories.voucher.map((Item,i)=>{
          return <Route key={i} path={`/voucher/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}    


        <Route path='/SingleProduct/:slug' element={<SingleProduct />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/confirm-order' element={<ConfirmOrderPage />} />
        <Route path='/complete-order' element={<Complete_Order />} />

        <Route path='/mobile-menu' element={<MobileMune />} />
        <Route path='/admin/cc' element={<CC />} />


   
   
     </Routes>
   <BottomMenu />
   <Footer />
    </BrowserRouter>
  )
}

export default Router;



