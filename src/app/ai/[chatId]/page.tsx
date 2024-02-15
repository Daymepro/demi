"use client";
import AiSideBar from "@/components/aiSideBar";
import { useTheme } from "next-themes";
import UserIcon from "@/components/userIcon";
import React from "react";
import { ClipboardCheck, RotateCwIcon } from "lucide-react";

const suggestions = [
  {
    title: "Compare marketing strategies",
    subtitle: "for sunglasses for gen Z and millenials",
  },
  {
    title: "Compare marketing strategies",
    subtitle: "for sunglasses for gen Z and millenials",
  },
  {
    title: "Compare marketing strategies",
    subtitle: "for sunglasses for gen Z and millenials",
  },
  {
    title: "Compare marketing strategies",
    subtitle: "for sunglasses for gen Z and millenials",
  },
];
const AiChat = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const resp = true;
  return (
    <main className=" bg-white h-screen flex  py-2 dark:bg-[rgb(30,30,30)]">
      <AiSideBar />
      <div className=" flex flex-col w-full justify-between py-12 px-[158px]  items-center">
        <div className=" flex items-center self-end gap-[40px]">
          <svg
            onClick={toggleTheme}
            className=" cursor-pointer"
            width="15.507812"
            height="15.507080"
            viewBox="0 0 15.5078 15.5071"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M6.84375 0.359863C7.35547 -0.119934 8.15234 -0.119934 8.66406 0.359863L10.2148 1.81097L12.3359 1.88116C13.0391 1.90436 13.6016 2.4679 13.625 3.16968L13.6953 5.29205L15.1484 6.84241C15.6289 7.3551 15.6289 8.15204 15.1484 8.66467L13.6953 10.2151L13.625 12.3374C13.6016 13.0392 13.0391 13.6027 12.3359 13.626L10.2148 13.6962L8.66406 15.1472C8.15234 15.6271 7.35547 15.6271 6.84375 15.1472L5.29297 13.6962L3.16797 13.626C2.46875 13.6027 1.90625 13.0392 1.88281 12.3374L1.8125 10.2151L0.359375 8.66467C-0.121094 8.15204 -0.121094 7.3551 0.359375 6.84241L1.8125 5.29205L1.88281 3.16968C1.90625 2.4679 2.46875 1.90436 3.16797 1.88116L5.29297 1.81097L6.84375 0.359863ZM5.47656 3.51038C6.06641 3.23822 6.72656 3.08691 7.41797 3.08691C9.99609 3.08691 12.0859 5.17621 12.0859 7.75354C12.0859 10.3309 9.99609 12.4202 7.41797 12.4202C6.72656 12.4202 6.06641 12.2688 5.47656 11.9968C5.23828 11.8881 5.08594 11.6514 5.08594 11.3909C5.08594 11.1303 5.23828 10.8936 5.47656 10.785C6.625 10.2576 7.41797 9.09784 7.41797 7.75354C7.41797 6.4093 6.625 5.24951 5.47656 4.72217C5.23828 4.61346 5.08594 4.37677 5.08594 4.11627C5.08594 3.85571 5.23828 3.61902 5.47656 3.51038Z"
              fill="#0030AD"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>
          <div className=" px-6 py-4 rounded-[8px] border-[2px] border-[#1455FF] text-ai-button-blue dark:text-white font-semibold bg-transparent text-sm">
            Back to home
          </div>
        </div>
        <div className=" flex flex-col justify-between items-center max-w-[860px] py-2 overflow-scroll remove-scrollbar w-full max-h-[587px] h-full ">
          {!resp  ? (
            <>
              <div className=" flex flex-col gap-4 items-center ">
                <div className=" bg-ai-button-blue dark:bg-[rgb(32,32,34)] rounded-full p-[10px]">
                  <svg
                    width="19.636719"
                    height="22.898254"
                    viewBox="0 0 19.6367 22.8983"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs>
                      <filter
                        id="filter_1109_220_dd"
                        x="0.000000"
                        y="0.000000"
                        width="19.636719"
                        height="22.898254"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
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
                        <feOffset dx="0" dy="0.323251" />
                        <feGaussianBlur stdDeviation="1.32218" />
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
                          result="effect_innerShadow_1"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0" dy="0.294545" />
                        <feGaussianBlur stdDeviation="0.121091" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.80392 0 0 0 0 0.81176 0 0 0 0 1 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect_innerShadow_1"
                          result="effect_innerShadow_2"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0" dy="0.392727" />
                        <feGaussianBlur stdDeviation="2.34655" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.11373 0 0 0 0 0.12941 0 0 0 0 0.16078 0 0 0 0 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect_innerShadow_2"
                          result="effect_innerShadow_3"
                        />
                      </filter>
                    </defs>
                    <g filter="url(#filter_1109_220_dd)">
                      <path
                        id="Vector"
                        d="M16.5156 19.6546C16.4414 19.4654 16.2031 19.4117 16.0469 19.5404C14.3594 20.9323 12.1875 21.7701 9.8125 21.7701C7.30859 21.7701 5.02344 20.8362 3.30078 19.3022C3.16016 19.1757 2.93359 19.2067 2.84375 19.3741C2.25781 20.4539 1.86719 21.5915 1.61719 22.4891C1.52734 22.8088 0.992188 22.8025 0.9375 22.475C0.519531 19.9164 -0.164062 15.0159 0.0351562 11.4957C0.242188 7.87714 1.54688 2.9707 2.30078 0.375244C2.39453 0.0530701 2.94531 0.118896 2.98828 0.451508C3.12891 1.49426 3.40234 2.83411 3.93359 4.08667C4.00781 4.25641 4.21875 4.31091 4.37109 4.20853C5.92578 3.17245 7.79688 2.56744 9.8125 2.56744C11.8359 2.56744 13.7148 3.17657 15.2695 4.21909C15.4258 4.32181 15.6367 4.26764 15.707 4.0979C16.2734 2.77527 16.5469 1.35397 16.6797 0.28714C16.7188 -0.0408325 17.2422 -0.112701 17.3438 0.201996C18.1016 2.564 19.4102 7.05191 19.6055 10.3784C19.8398 14.3423 18.6719 19.8079 17.9648 22.6763C17.8828 23.0057 17.3203 22.9536 17.2695 22.6183C17.1367 21.7463 16.9062 20.6881 16.5156 19.6546ZM3.30859 13.6117C4.20703 11.6568 8.01953 14.897 9.12891 15.8977C9.28125 16.0338 9.24219 16.2708 9.05469 16.3521C8.21094 16.7219 6.12891 17.5046 4.82031 16.9224C3.50781 16.3405 2.63672 15.0761 3.30859 13.6117ZM10.5 16.3521C10.3125 16.2708 10.2734 16.0338 10.4258 15.8977C11.5352 14.897 15.3477 11.6568 16.2461 13.6117C16.918 15.0761 16.0469 16.3405 14.7344 16.9224C13.4258 17.5046 11.3438 16.7219 10.5 16.3521Z"
                        fill="#006DFF"
                        fill-opacity="0.290000"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Vector"
                        d="M10.4375 5.57468C10.4844 5.34714 10.2617 5.15942 10.043 5.24295L8.79297 5.72586C8.68359 5.76813 8.60938 5.87128 8.60547 5.98846L8.46484 9.39172C8.45312 9.60638 8.67188 9.75803 8.87109 9.67633L9.04688 9.60449C9.23828 9.52478 9.45312 9.66733 9.45312 9.87689L9.45312 11.259C9.45312 11.6016 9.9375 11.6682 10.0312 11.3382L10.9023 8.21609C10.9648 7.99219 10.7539 7.78754 10.5312 7.85507L10.4258 7.88773C10.2109 7.9523 10.0078 7.76703 10.0508 7.54895L10.4375 5.57468Z"
                        fill="#FFFFFF"
                        fill-opacity="1.000000"
                        fill-rule="nonzero"
                      />
                    </g>
                  </svg>
                </div>

                <p className=" font-bold dark:text-white text-[20px]">
                  How can i help you today ?
                </p>
              </div>
              <div className=" flex flex-col gap-[114px] w-full">
                <div className=" grid grid-cols-2 w-full  gap-3 flex-wrap">
                  {suggestions.map((s, i) => (
                    <div
                      key={i}
                      className=" bg-transparent py-4 px-[26px] border rounded-[11px] border-[@d7d7d7]"
                    >
                      <p className=" font-semibold text-[#000103] text-[13px] dark:text-white">
                        {s.title}
                      </p>
                      <p className=" text-[10px] dark:text-white">
                        {s.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className=" flex flex-col gap-5">
                <div className=" flex flex-col">
                  <div className=" flex items-center gap-4">
                    <UserIcon imageClass=" p-2" />
                    <span className=" text-base font-black text-[#000103] dark:text-white ">
                      You
                    </span>
                  </div>
                  <p className=" ml-[40px] font-normal  text-black dark:text-white">
                    What is a noun
                  </p>
                </div>
                <div className=" flex flex-col">
                  <div className=" flex items-center gap-4">
                    <div className=" rounded-full p-2 bg-[#0030AD]">
                      <svg
                        width="13.500000"
                        height="15.742554"
                        viewBox="0 0 13.5 15.7426"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs>
                          <filter
                            id="filter_1113_330_dd"
                            x="0.000000"
                            y="0.000000"
                            width="13.500000"
                            height="15.742554"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                            <feOffset dx="0" dy="0.222235" />
                            <feGaussianBlur stdDeviation="0.909" />
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
                              result="effect_innerShadow_1"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="0" dy="0.2025" />
                            <feGaussianBlur stdDeviation="0.08325" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.80392 0 0 0 0 0.81176 0 0 0 0 1 0 0 0 1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="effect_innerShadow_1"
                              result="effect_innerShadow_2"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dx="0" dy="0.27" />
                            <feGaussianBlur stdDeviation="1.61325" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.11373 0 0 0 0 0.12941 0 0 0 0 0.16078 0 0 0 0 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="effect_innerShadow_2"
                              result="effect_innerShadow_3"
                            />
                          </filter>
                        </defs>
                        <g filter="url(#filter_1113_330_dd)">
                          <path
                            id="Vector"
                            d="M11.3555 13.5125C11.3047 13.3824 11.1406 13.3455 11.0312 13.434C9.87109 14.391 8.37891 14.9669 6.74609 14.9669C5.02344 14.9669 3.45312 14.3249 2.26953 13.2703C2.17188 13.1833 2.01562 13.2046 1.95312 13.3196C1.55078 14.062 1.28125 14.8441 1.10938 15.4612C1.05078 15.681 0.683594 15.6767 0.644531 15.4515C0.359375 13.6925 -0.113281 10.3234 0.0234375 7.90326C0.167969 5.41553 1.0625 2.04236 1.58203 0.257935C1.64844 0.036438 2.02344 0.0817261 2.05469 0.310425C2.15234 1.02728 2.33984 1.94843 2.70312 2.80957C2.75391 2.92627 2.89844 2.96375 3.00391 2.89337C4.07422 2.18103 5.35938 1.76508 6.74609 1.76508C8.13672 1.76508 9.42969 2.1839 10.5 2.90063C10.6055 2.97119 10.75 2.93396 10.8008 2.81732C11.1875 1.90802 11.375 0.930847 11.4688 0.197388C11.4961 -0.0280762 11.8555 -0.0775146 11.9219 0.138855C12.4453 1.76276 13.3438 4.84814 13.4805 7.13519C13.6406 9.86029 12.8359 13.6179 12.3516 15.59C12.2969 15.8164 11.9102 15.7806 11.8711 15.55C11.7812 14.9506 11.6211 14.223 11.3555 13.5125ZM2.27344 9.35797C2.89062 8.01404 5.51562 10.2417 6.27734 10.9297C6.37891 11.0232 6.35156 11.1862 6.22656 11.2421C5.64453 11.4963 4.21484 12.0344 3.3125 11.6341C2.41016 11.2341 1.8125 10.3648 2.27344 9.35797ZM7.21875 11.2421C7.08984 11.1862 7.0625 11.0232 7.16797 10.9297C7.92969 10.2417 10.5508 8.01404 11.168 9.35797C11.6289 10.3648 11.0312 11.2341 10.1328 11.6341C9.23047 12.0344 7.80078 11.4963 7.21875 11.2421Z"
                            fill="#006DFF"
                            fill-opacity="0.290000"
                            fill-rule="evenodd"
                          />
                          <path
                            id="Vector"
                            d="M7.17578 3.83258C7.20703 3.67615 7.05469 3.54706 6.90625 3.60449L6.04688 3.93652C5.96875 3.96558 5.91797 4.0365 5.91406 4.11707L5.82031 6.45679C5.8125 6.60437 5.96094 6.70862 6.09766 6.65247L6.21875 6.60309C6.35156 6.54828 6.49609 6.64624 6.49609 6.79034L6.49609 7.74054C6.49609 7.97607 6.83203 8.02185 6.89453 7.79498L7.49609 5.64856C7.53906 5.49463 7.39453 5.35394 7.24219 5.40033L7.16797 5.42279C7.01953 5.46716 6.87891 5.33978 6.91016 5.18988L7.17578 3.83258Z"
                            fill="#FFFFFF"
                            fill-opacity="1.000000"
                            fill-rule="nonzero"
                          />
                        </g>
                      </svg>
                    </div>
                    <span className="  font-semibold text-black dark:text-white">
                      AI Web Hero AI
                    </span>
                  </div>
                  <div className="ml-[40px] flex flex-col gap-1">
                    <p className="  font-normal  text-black dark:text-white ">
                      Lorem ipsum dolor sit amet consectetur. Curabitur ornare
                      pharetra mattis velit in et cursus neque ut. Sem congue
                      elit amet id enim nisl ut. Sem magna sed augue
                      sollicitudin mauris malesuada condimentum leo. Ornare nibh
                      posuere sagittis sed ullamcorper viverra orci. Massa
                      dignissim mauris ipsum aliquet odio duis lectus turpis.
                      Odio sed nec aenean vel odio. Scelerisque nunc id pharetra
                      eu vel. Sit non malesuada libero ac interdum vulputate
                      erat fringilla. Gravida a vitae quam pellentesque.
                      Pellentesque ultrices nullam habitant nunc erat
                      pellentesque id ante enim. Ullamcorper mauris diam etiam
                      eget aliquam viverra sit sagittis.
                    </p>
                    <div className=" flex items-center gap-1 rounded-[6px] p-2 max-w-[45px]  text-ai-button-blue dark:text-white bg-[#0030AD12]">
                      <ClipboardCheck className=" w-3 h-3 cursor-pointer" />
                      <RotateCwIcon className=" w-3 h-3 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex w-full border-[2px] max-w-[860px] sticky bottom-0 py-2 rounded-[9px] border-[#84A7FF] items-center px-[18px]">
          <input
            type="text"
            className=" shadow-none outline-none w-full h-full bg-transparent"
          />
          <div className=" bg-ai-button-blue  px-6 py-[12px] rounded-[8px]">
            <svg
              width="6.964844"
              height="10.857758"
              viewBox="0 0 6.96484 10.8578"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="flash"
                d="M2.75 6.48592L0.351562 6.48592C0.269531 6.48592 0.191406 6.45781 0.128906 6.40634C-0.0195312 6.28323 -0.0429688 6.06142 0.078125 5.91093L4.80859 0.12915C4.89844 0.0184174 5.05078 -0.0264893 5.1875 0.015564C5.37109 0.0727081 5.47656 0.269699 5.41797 0.455551L4.21484 4.37285L6.61328 4.37285C6.69531 4.37285 6.77344 4.40097 6.83594 4.45245C6.98438 4.57559 7.00781 4.79739 6.88281 4.94788L2.15234 10.7286C2.0625 10.8394 1.91406 10.8842 1.77734 10.8422C1.59375 10.785 1.48828 10.588 1.54688 10.4022L2.75 6.48592Z"
                fill="#FFFFFF"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AiChat;
