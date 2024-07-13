import Header from '@/components/Header';
import Image from '@/components/PAGE1_Image';
import Buttons from '@/components/PAGE1_Buttons';
import "@/components/components.css"; 

function Home() {
  return (
    <div className="page1_div1">
      <Header  />
      <Image  />
      <Buttons  />
    </div>
  );
}

export default Home;
