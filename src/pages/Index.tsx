import Menu from "@/components/Menu";
import Profile from "@/components/Profile";
import DialogWindow from "@/components/DialogWindow";
import FacesGallery from "@/components/FacesGallery";

const Index = () => {
  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="flex-1 flex">
        {/* Левое меню */}
        <Menu />
        
        {/* Центральная часть с диалоговым окном */}
        <DialogWindow />
        
        {/* Правая часть с профилем */}
        <Profile />
      </div>
      
      {/* Нижняя часть с чередующимися счастливыми лицами */}
      <FacesGallery />
    </div>
  );
};

export default Index;
