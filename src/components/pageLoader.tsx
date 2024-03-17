import Image from "next/image";
import React from "react";

import "./pageLoader.css";

interface LoaderProps {
  divStyle?: string;
  message?: string
}
const PageLoader = (props: LoaderProps) => {
  return (
    <div
      className={` flex relative items-center flex-col justify-center w-full bg-[#0030AD] h-full ${props.divStyle}`}
    >
      <div className="absolute max-w-[863px] w-full h-[410px] bg-[#5F8CFF] blur-3xl"></div>
      <div className=" z-40">
      <svg
        aria-hidden="true"
        className={`w-[120px] h-[120px]  mr-2 text-white  absolute  animate-spin`}
        viewBox="0 0 129 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M91 2000C28.4152 300 20 1433.5848 4 61C2 30.4152 28.4152 2 61 1"
          stroke="url(#paint0_linear_467_823)"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
      <div className=" z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          width="129"
          height="122"
          viewBox="0 0 129 122"
          fill="none"
        >
          <circle cx="61" cy="61" r="52" fill="white" />
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            filter="url(#filter0_f_467_823)"
          >
            <circle cx="77.7429" cy="63.4041" r="11.0911" fill="#FDFFB3" />
          </g>
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            filter="url(#filter1_f_467_823)"
          >
            <circle
              cx="51.5838"
              cy="61.5837"
              r="11.0911"
              transform="rotate(15 51.5838 61.5837)"
              fill="#FDFFB3"
            />
          </g>
          <g filter="url(#filter2_iii_467_823)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M73.9261 75.9988C70.5809 78.9825 66.1346 80.8014 61.2548 80.8014C56.1465 80.8014 51.5133 78.8082 48.121 75.5721C45.4472 80.095 44.6578 85.4416 44.6578 85.4416C44.6578 85.4416 41.7835 70.6065 42.3343 61.0568C42.9048 51.1647 47.7665 36.2642 47.7665 36.2642C47.7665 36.2642 47.7665 42.3807 50.1583 47.4417C53.2702 45.214 57.1058 43.8991 61.2548 43.8991C65.4172 43.8991 69.2642 45.2225 72.3814 47.4634C74.7835 42.3981 74.7835 36.2642 74.7835 36.2642C74.7835 36.2642 79.6702 49.8355 80.2059 58.9098C80.8426 69.6946 76.0497 86.2642 76.0497 86.2642C76.0497 86.2642 75.9844 80.8359 73.9261 75.9988ZM48.6672 65.1232C50.7031 60.7148 60.517 70.0541 60.517 70.0541C60.517 70.0541 54.8356 72.9172 51.5891 71.4855C49.0535 70.3672 47.3675 67.9375 48.6672 65.1232ZM61.8532 70.0541C61.8532 70.0541 71.6672 60.7148 73.7031 65.1232C75.0028 67.9375 73.3167 70.3672 70.7811 71.4855C67.5346 72.9172 61.8532 70.0541 61.8532 70.0541Z"
              fill="#0030AD"
            />
            <path
              d="M62.6649 48.671L58.9313 50.1025L58.6067 57.8965L60.5546 57.1012V64.7362L63.6388 53.7609L61.5286 54.3972L62.6649 48.671Z"
              fill="#0030AD"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_467_823"
              x="26.8519"
              y="12.513"
              width="101.782"
              height="101.782"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="19.9"
                result="effect1_foregroundBlur_467_823"
              />
            </filter>
            <filter
              id="filter1_f_467_823"
              x="0.689747"
              y="10.6897"
              width="101.788"
              height="101.788"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="19.9"
                result="effect1_foregroundBlur_467_823"
              />
            </filter>
            <filter
              id="filter2_iii_467_823"
              x="42.2642"
              y="36.2642"
              width="38"
              height="54"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3.29237" />
              <feGaussianBlur stdDeviation="20.2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.52 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_467_823"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="1.85" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.6425 0 0 0 0 0.747776 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_467_823"
                result="effect2_innerShadow_467_823"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="35.85" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.189961 0 0 0 0 0.678431 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_467_823"
                result="effect3_innerShadow_467_823"
              />
            </filter>
            <linearGradient
              id="paint0_linear_467_823"
              x1="31.5"
              y1="2"
              x2="31.5"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.671806" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      </div>
    
      <p className=" z-40 text-white">{props.message}</p>

    </div>
  );
};

export default PageLoader;
