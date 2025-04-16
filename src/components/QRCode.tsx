import { Card } from "@/components/ui/card";

const QRCode = () => {
  return (
    <Card className="p-4 text-center">
      <h3 className="text-sm font-medium mb-2">Ваш QR-код</h3>
      <div className="w-full aspect-square bg-white border border-gray-200 relative">
        {/* QR код паттерн (упрощенный) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4/5 h-4/5 grid grid-cols-5 grid-rows-5 gap-0.5">
            {/* Углы QR-кода */}
            <div className="col-span-1 row-span-1 bg-black rounded-tl-md"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1 bg-black rounded-tr-md"></div>
            
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1 bg-black"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1 bg-black"></div>
            <div className="col-span-1 row-span-1"></div>
            
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1 bg-black"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1"></div>
            
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1 bg-black"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1 bg-black"></div>
            <div className="col-span-1 row-span-1"></div>
            
            <div className="col-span-1 row-span-1 bg-black rounded-bl-md"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1 bg-black"></div>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2">Сканируйте для связи</div>
    </Card>
  );
};

export default QRCode;
