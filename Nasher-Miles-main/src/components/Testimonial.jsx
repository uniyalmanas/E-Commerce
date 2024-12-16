import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GrServices } from "react-icons/gr";

const Testimonial = () => {
  return (
    <div className="bg-gray-100 lg:h-[300px] mt-8">
      <p className="lg:text-4xl text-2xl font-semibold text-center lg:pt-10 pt-4">
        4 REASONS TO BUY FROM
      </p>
      <p className="underline text-center text-sm py-4">Nasher Miles</p>

      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-2 lg:mx-24 lg:mt-4 lg:mb-0 mb-4">
        <div>
          <LiaShippingFastSolid className="text-[50px] mx-auto" />
          <p className="text-center font-semibold text-xl py-2">
            Free Shipping
          </p>
          <p className="text-center lg:text-sm text-xs text-black/70">
            Free shipping for order above ₹500 <br /> across India.
          </p>
        </div>
        <div>
          <TbTruckReturn className="text-[50px] mx-auto" />
          <p className="text-center font-semibold text-xl py-2">RETURNS</p>
          <p className="text-center lg:text-sm text-xs text-black/70">
            Hassle free 7 days return.{" "}
          </p>
        </div>
        <div>
          <RiCustomerServiceLine className="text-[50px] mx-auto" />
          <p className="text-center font-semibold text-xl py-2">
            ASSURED QUALITY & VALUE
          </p>
          <p className="text-center lg:text-sm text-xs text-black/70 line-clamp-2">
            Our efficient supply chain brings you <br /> value without
            compromising on quality.{" "}
          </p>
        </div>
        <div>
          <GrServices className="text-[50px] mx-auto" />
          <p className="text-center font-semibold text-xl py-2">
            CUSTOMER SERVICE
          </p>
          <p className="text-center lg:text-sm text-xs text-black/70 line-clamp-2">
            A customer first service culture is core to <br /> our company
            values.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
