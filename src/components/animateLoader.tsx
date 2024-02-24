import React from 'react'

const animateLoader = () => {
  return (
    <svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
                <g>
                    <rect width="104" height="104" x="12" y="12" rx="52" fill="#FFFFFF"></rect>
                </g>
                <foreignObject width="100%" height="100%">
                    {/* <div style="clip-path: url(#white_spinner);width: 128px; height: 128px;">
                        <div style="width: 100%; height: 100%; border-radius: 360px;background-image: conic-gradient(transparent, rgba(255,255,255, 0.4)); animation: spin 1200ms linear infinite;"></div>
                    </div> */}
                </foreignObject>
                <foreignObject width="100%" height="100%">
                    {/* <div style="width: 128px; height: 128px; clip-path: url(#purple_spinner)">
                        <div style="width: 100%; height: 100%; border-radius: 360px;background-image: conic-gradient(#DAD4FF, #4C35DE);animation: spin 1600ms linear infinite;"></div>
                    </div> */}
                </foreignObject>
                <defs>
                    <clipPath id="white_spinner">
                        <path d="M64 2.37013C98.0371 2.37013 125.63 29.9627 125.63 63.9998C125.63 98.0369 98.0371 125.629 64 125.629C29.9629 125.629 2.37036 98.0369 2.37036 63.9998C2.37036 29.9627 29.9629 2.37013 64 2.37013ZM64 123.164C96.6756 123.164 123.164 96.6754 123.164 63.9998C123.164 31.3241 96.6756 4.83532 64 4.83532C31.3244 4.83532 4.83554 31.3241 4.83555 63.9998C4.83555 96.6754 31.3244 123.164 64 123.164Z"></path>
                    </clipPath>
                    <clipPath id="purple_spinner">
                        <path d="M64.7186 73.8573C64.3241 74.2841 63.9945 74.6269 63.9945 74.6269L63.9976 74.6286C63.9918 74.6264 63.6674 74.9722 63.2735 75.3982L59.6861 79.2788C59.2915 79.7056 59.2915 80.4032 59.6861 80.8299L63.2846 84.7225C63.6792 85.1493 64.3241 85.1493 64.7186 84.7225L89.1509 58.289C89.5455 57.8622 89.5455 57.1646 89.1509 56.7378L77.1669 43.7747C76.7724 43.3479 75.9928 43 75.435 43L52.554 43.0103C51.9962 43.0103 51.2166 43.3599 50.8221 43.7867L38.8491 56.7395C38.4546 57.1663 38.4546 57.8639 38.8491 58.2907L53.2274 73.8436C53.622 74.2704 54.2669 74.2704 54.6614 73.8436L58.2489 69.9631C58.6434 69.5363 58.6434 68.8387 58.2489 68.4119L48.8921 58.2907C48.4975 57.8639 48.4975 57.1663 48.8921 56.7395L53.7662 51.4689C54.1607 51.0421 54.9403 50.6925 55.4981 50.6925L72.4956 50.6839C73.0534 50.6822 73.833 51.0319 74.2276 51.4586L79.1096 56.7395C79.5041 57.1663 79.5041 57.8639 79.1096 58.2907L64.7186 73.8573Z"></path>
                    </clipPath>
                </defs>
            </svg>
    </svg>
  )
}

export default animateLoader