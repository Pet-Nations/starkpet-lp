import "@/app/assets/styles/strategic/production.scss";

import Image from "next/image";
export default function Production() {
    return (
        <div className="production">
            <Image src={productionImg} alt="productionImg" />
            <div className="production-content">
                <span>Production diversify</span>
                <p></p>
            </div>
        </div>
    );
}
