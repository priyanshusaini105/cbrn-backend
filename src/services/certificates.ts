// generate certificate

import puppeteer from "puppeteer";
import { IUser } from "../app";
import UID from "uid-safe";
import { Certificate } from "../model/certificates";


export const generateCertificate =async (user:IUser)=>{
  const uid = UID.sync(6);
    const HTML_CERTIFICATE = `
    <div style=width:100%;height:100%;position:relative;background:#fff><div style=width:816.8px;height:789.72px;left:0;top:0;position:absolute><div style=width:816.8px;height:789.72px;left:0;top:0;position:absolute;background:#000></div><div style=width:816.8px;height:789.66px;left:0;top:0;position:absolute><div style=width:728.62px;height:789.66px;left:44.09px;top:0;position:absolute><div style="width:0;height:789.66px;left:0;top:0;position:absolute;border:.19px rgba(255,255,255,.186) solid"></div><div style="width:0;height:789.66px;left:242.87px;top:0;position:absolute;border:.19px rgba(255,255,255,.178) solid"></div><div style="width:0;height:789.66px;left:485.75px;top:0;position:absolute;border:.19px rgba(255,255,255,.181) solid"></div><div style="width:0;height:789.66px;left:728.63px;top:0;position:absolute;border:.19px rgba(255,255,255,.177) solid"></div></div><div style=width:816.8px;height:685.07px;left:0;top:53.82px;position:absolute><div style="width:816.8px;height:0;left:0;top:0;position:absolute;border:.19px rgba(255,255,255,.166) solid"></div><div style="width:816.8px;height:0;left:0;top:685.07px;position:absolute;border:.19px rgba(255,255,255,.185) solid"></div><div style="width:816.8px;height:0;left:0;top:456.72px;position:absolute;border:.19px rgba(255,255,255,.177) solid"></div><div style="width:816.8px;height:0;left:0;top:228.36px;position:absolute;border:.19px rgba(255,255,255,.185) solid"></div></div></div></div><div style="left:63px;top:452px;position:absolute;color:#fff;font-size:50.67px;font-family:Work Sans;font-weight:700;word-wrap:break-word">${user.name}</div><div style="width:250.37px;height:0;left:496.75px;top:919px;position:absolute;border:.38px #000 solid"></div><div style="left:55px;top:831px;position:absolute;color:#000;font-size:16px;font-family:Work Sans;font-weight:500;word-wrap:break-word">Officially issued by</div><img src=https://i.ibb.co/8r3PMRm/image.png style=position:absolute;top:54rem;width:6rem;left:4rem><div style="width:671px;left:63px;top:564px;position:absolute;color:#fff;font-size:20px;font-family:Work Sans;font-weight:500;word-wrap:break-word">For successfully completing the CBRN-e Training on VR Rescue-X<br>, a 2 weeks training program in association with NDRF on</div><div style="width:671px;left:63px;top:644px;position:absolute;color:#fff;font-size:20px;font-family:Work Sans;font-weight:700;word-wrap:break-word">Socre: ${user.training?.[0].score}</div><div style="width:671px;left:63px;top:2rem;position:absolute;color:#fff;font-size:12px;font-family:Work Sans;font-weight:700;word-wrap:break-word">Socre: ${uid}</div><div style=width:543.87px;height:111.89px;left:63.14px;top:124.27px;position:absolute><svg fill=none height=113 viewBox="0 0 544 113"width=544 xmlns=http://www.w3.org/2000/svg><path d="M40.1112 37.6724C37.7213 39.9826 35.1322 41.6556 32.344 42.6912C29.5956 43.687 26.5485 44.2048 23.2027 44.2446C19.8568 44.2446 16.7699 43.7666 13.9418 42.8107C11.1138 41.8547 8.68405 40.4407 6.65264 38.5686C4.62123 36.6567 3.02796 34.3465 1.87284 31.6379C0.717728 28.8895 0.14017 25.7627 0.14017 22.2576C0.100338 19.5888 0.538486 16.94 1.45461 14.3112C2.41057 11.6823 3.84451 9.3322 5.75643 7.26096C7.70817 5.14988 10.1379 3.45704 13.0456 2.18243C15.9533 0.907814 19.3788 0.270508 23.3222 0.270508C25.9909 0.270508 28.6198 0.708656 31.2088 1.58495C33.7979 2.46125 36.0484 3.85535 37.9603 5.76727V17.8362H27.9227L27.624 11.1445C26.8672 10.8657 26.1303 10.6865 25.4133 10.6068C24.6964 10.5271 23.9993 10.4873 23.3222 10.4873C21.4899 10.4873 19.8568 10.7861 18.4229 11.3835C16.9889 11.981 15.7741 12.8175 14.7783 13.8929C13.8223 14.9285 13.0854 16.1633 12.5676 17.5973C12.0897 19.0312 11.8507 20.5846 11.8507 22.2576C11.8507 24.0101 12.1096 25.6034 12.6274 27.0373C13.185 28.4713 13.9617 29.7061 14.9575 30.7417C15.9533 31.7773 17.1483 32.5939 18.5424 33.1913C19.9365 33.749 21.4899 34.0278 23.2027 34.0278C24.9553 34.0278 26.7079 33.7091 28.4604 33.0718C30.213 32.3947 31.7864 31.3392 33.1805 29.9052L40.1112 37.6724Z"fill=#F9C700 /><path d="M72.1363 29.009H81.0984V43.1692H43.6367V33.8486H48.2373V10.6068H43.6367V1.34596H80.3217V15.3866H71.3596L71.1206 11.2043H59.9478V17.657H69.9854V26.8581H59.9478V33.1913H71.8973L72.1363 29.009Z"fill=#F9C700 /><path d="M90.8335 10.6068H85.8147V1.34596H111.267C113.936 1.34596 116.286 1.74428 118.317 2.54091C120.349 3.33754 122.042 4.413 123.396 5.76727C124.75 7.08171 125.766 8.61523 126.443 10.3678C127.16 12.0806 127.518 13.873 127.518 15.7451C127.518 16.9799 127.399 18.1748 127.16 19.3299C126.921 20.4851 126.483 21.5804 125.845 22.616C125.248 23.6118 124.412 24.5678 123.336 25.4839C122.3 26.4 120.986 27.2365 119.393 27.9933L123.814 33.8486H129.251V43.1692H112.402V37.1347L107.204 29.6662H102.604V34.446L107.264 34.8045V43.1692H85.8147V33.8486H90.8335V10.6068ZM102.604 10.7861V20.8236H111.327C112.801 20.8236 113.916 20.3257 114.673 19.3299C115.429 18.3341 115.808 17.1591 115.808 15.8048C115.808 14.4506 115.429 13.2755 114.673 12.2797C113.956 11.2839 112.801 10.7861 111.207 10.7861H102.604Z"fill=#F9C700 /><path d="M172.034 1.34596V17.5375H162.056L161.698 11.3835H157.934V33.8486H162.833V43.1692H141.025V33.8486H145.984V11.3835H142.16L141.802 17.5375H131.824V1.34596H172.034Z"fill=#F9C700 /><path d="M176.082 10.6068V1.34596H197.83V10.6068H192.871V33.8486H197.83V43.1692H176.082V33.8486H180.981V10.6068H176.082Z"fill=#F9C700 /><path d="M224.965 33.8486V43.1692H203.158V33.8486H207.758V10.6068H203.158V1.34596H239.962V15.3866H231.06L230.761 11.2043H219.528V18.4935H230.343V28.1128H219.528V33.8486H224.965Z"fill=#F9C700 /><path d="M243.648 10.6068V1.34596H265.396V10.6068H260.437V33.8486H265.396V43.1692H243.648V33.8486H248.547V10.6068H243.648Z"fill=#F9C700 /><path d="M308.741 37.6724C306.351 39.9826 303.762 41.6556 300.974 42.6912C298.226 43.687 295.178 44.2048 291.833 44.2446C288.487 44.2446 285.4 43.7666 282.572 42.8107C279.744 41.8547 277.314 40.4407 275.283 38.5686C273.251 36.6567 271.658 34.3465 270.503 31.6379C269.348 28.8895 268.77 25.7627 268.77 22.2576C268.73 19.5888 269.168 16.94 270.085 14.3112C271.041 11.6823 272.474 9.3322 274.386 7.26096C276.338 5.14988 278.768 3.45704 281.676 2.18243C284.583 0.907814 288.009 0.270508 291.952 0.270508C294.621 0.270508 297.25 0.708656 299.839 1.58495C302.428 2.46125 304.678 3.85535 306.59 5.76727V17.8362H296.553L296.254 11.1445C295.497 10.8657 294.76 10.6865 294.043 10.6068C293.326 10.5271 292.629 10.4873 291.952 10.4873C290.12 10.4873 288.487 10.7861 287.053 11.3835C285.619 11.981 284.404 12.8175 283.408 13.8929C282.452 14.9285 281.715 16.1633 281.198 17.5973C280.72 19.0312 280.481 20.5846 280.481 22.2576C280.481 24.0101 280.74 25.6034 281.257 27.0373C281.815 28.4713 282.592 29.7061 283.587 30.7417C284.583 31.7773 285.778 32.5939 287.172 33.1913C288.566 33.749 290.12 34.0278 291.833 34.0278C293.585 34.0278 295.338 33.7091 297.09 33.0718C298.843 32.3947 300.416 31.3392 301.81 29.9052L308.741 37.6724Z"fill=#F9C700 /><path d="M341.125 43.1692V34.7448L344.829 34.3863L343.515 30.7417H328.697L327.383 34.446L331.326 34.7448V43.1692H310.355V33.8486H315.015L325.411 10.6068H320.691V1.34596H342.798L357.316 33.8486H361.917V43.1692H341.125ZM339.99 21.4808L336.046 11.3835L332.222 21.4808H339.99Z"fill=#F9C700 /><path d="M399.237 1.34596V17.5375H389.26L388.901 11.3835H385.137V33.8486H390.036V43.1692H368.229V33.8486H373.188V11.3835H369.364L369.005 17.5375H359.027V1.34596H399.237Z"fill=#F9C700 /><path d="M431.904 29.009H440.866V43.1692H403.405V33.8486H408.005V10.6068H403.405V1.34596H440.09V15.3866H431.128L430.889 11.2043H419.716V17.657H429.753V26.8581H419.716V33.1913H431.665L431.904 29.009Z"fill=#F9C700 /><path d="M503.423 22.2576C503.423 25.7627 502.845 28.8895 501.69 31.6379C500.575 34.3465 499.002 36.6368 496.97 38.5089C494.939 40.3411 492.489 41.7551 489.621 42.7509C486.793 43.7069 483.666 44.1849 480.241 44.1849C476.815 44.1849 473.669 43.7069 470.801 42.7509C467.973 41.7551 465.523 40.3411 463.452 38.5089C461.421 36.6368 459.827 34.3465 458.672 31.6379C457.557 28.8895 456.999 25.7627 456.999 22.2576C456.999 18.832 457.557 15.765 458.672 13.0565C459.827 10.3479 461.421 8.05759 463.452 6.1855C465.523 4.31342 467.973 2.87948 470.801 1.88369C473.669 0.887899 476.815 0.390005 480.241 0.390005C483.666 0.390005 486.793 0.887899 489.621 1.88369C492.489 2.83965 494.939 4.25367 496.97 6.12576C499.002 7.99784 500.575 10.2882 501.69 12.9967C502.845 15.7053 503.423 18.7922 503.423 22.2576ZM491.593 22.2576C491.593 20.4651 491.314 18.852 490.757 17.418C490.239 15.9442 489.482 14.7095 488.486 13.7137C487.53 12.6781 486.335 11.8814 484.901 11.3238C483.507 10.7661 481.954 10.4873 480.241 10.4873C478.568 10.4873 477.015 10.7861 475.581 11.3835C474.187 11.9412 472.992 12.7577 471.996 13.8332C471 14.8688 470.223 16.1036 469.666 17.5375C469.108 18.9715 468.829 20.5448 468.829 22.2576C468.829 24.0101 469.108 25.6233 469.666 27.0971C470.223 28.531 471 29.7658 471.996 30.8014C473.031 31.8371 474.246 32.6536 475.64 33.2511C477.034 33.8087 478.568 34.0875 480.241 34.0875C481.954 34.0875 483.507 33.8087 484.901 33.2511C486.335 32.6536 487.53 31.8371 488.486 30.8014C489.482 29.7658 490.239 28.531 490.757 27.0971C491.314 25.6233 491.593 24.0101 491.593 22.2576Z"fill=#F9C700 /><path d="M529.012 33.8486V43.1692H507.204V33.8486H511.805V10.6068H507.204V1.34596H544.009V15.3866H535.106L534.808 11.2043H523.575V18.4935H534.389V28.1128H523.575V33.8486H529.012Z"fill=#F9C700 /><path d="M40.1111 105.589C37.7212 107.9 35.1321 109.572 32.3439 110.608C29.5955 111.604 26.5484 112.122 23.2026 112.161C19.8567 112.161 16.7698 111.684 13.9417 110.728C11.1137 109.772 8.68394 108.358 6.65253 106.485C4.62112 104.574 3.02785 102.263 1.87274 99.5548C0.717621 96.8064 0.140063 93.6796 0.140063 90.1744C0.100231 87.5057 0.538379 84.8569 1.45451 82.228C2.41046 79.5992 3.8444 77.2491 5.75632 75.1778C7.70807 73.0668 10.1378 71.3739 13.0455 70.0993C15.9532 68.8247 19.3787 68.1874 23.3221 68.1874C25.9908 68.1874 28.6197 68.6255 31.2087 69.5018C33.7978 70.3781 36.0483 71.7722 37.9602 73.6842V85.7531H27.9226L27.6239 79.0614C26.8671 78.7826 26.1302 78.6034 25.4132 78.5237C24.6962 78.444 23.9992 78.4042 23.3221 78.4042C21.4898 78.4042 19.8567 78.7029 18.4228 79.3004C16.9888 79.8979 15.774 80.7344 14.7782 81.8098C13.8222 82.8454 13.0853 84.0802 12.5675 85.5142C12.0895 86.9481 11.8506 88.5015 11.8506 90.1744C11.8506 91.927 12.1095 93.5203 12.6273 94.9542C13.1849 96.3882 13.9616 97.623 14.9574 98.6586C15.9532 99.6942 17.1482 100.511 18.5423 101.108C19.9364 101.666 21.4898 101.945 23.2026 101.945C24.9552 101.945 26.7077 101.626 28.4603 100.989C30.2129 100.312 31.7863 99.2561 33.1804 97.8221L40.1111 105.589Z"fill=#F9C700 /><path d="M88.5168 90.1744C88.5168 93.6796 87.9392 96.8064 86.7841 99.5548C85.6688 102.263 84.0954 104.554 82.064 106.426C80.0326 108.258 77.583 109.672 74.7151 110.668C71.8871 111.624 68.7603 112.102 65.3348 112.102C61.9092 112.102 58.7625 111.624 55.8947 110.668C53.0666 109.672 50.617 108.258 48.5457 106.426C46.5143 104.554 44.9211 102.263 43.7659 99.5548C42.6507 96.8064 42.093 93.6796 42.093 90.1744C42.093 86.7489 42.6507 83.6819 43.7659 80.9734C44.9211 78.2648 46.5143 75.9745 48.5457 74.1024C50.617 72.2303 53.0666 70.7964 55.8947 69.8006C58.7625 68.8048 61.9092 68.3069 65.3348 68.3069C68.7603 68.3069 71.8871 68.8048 74.7151 69.8006C77.583 70.7565 80.0326 72.1706 82.064 74.0426C84.0954 75.9147 85.6688 78.2051 86.7841 80.9136C87.9392 83.6222 88.5168 86.7091 88.5168 90.1744ZM76.6868 90.1744C76.6868 88.382 76.4079 86.7688 75.8503 85.3349C75.3325 83.8611 74.5757 82.6264 73.5799 81.6306C72.6239 80.5949 71.429 79.7983 69.9951 79.2407C68.601 78.683 67.0475 78.4042 65.3348 78.4042C63.6618 78.4042 62.1084 78.7029 60.6745 79.3004C59.2803 79.8581 58.0854 80.6746 57.0896 81.7501C56.0938 82.7857 55.3171 84.0205 54.7595 85.4544C54.2018 86.8883 53.923 88.4617 53.923 90.1744C53.923 91.927 54.2018 93.5402 54.7595 95.014C55.3171 96.4479 56.0938 97.6827 57.0896 98.7183C58.1252 99.754 59.3401 100.571 60.7342 101.168C62.1283 101.726 63.6618 102.004 65.3348 102.004C67.0475 102.004 68.601 101.726 69.9951 101.168C71.429 100.571 72.6239 99.754 73.5799 98.7183C74.5757 97.6827 75.3325 96.4479 75.8503 95.014C76.4079 93.5402 76.6868 91.927 76.6868 90.1744Z"fill=#F9C700 /><path d="M130.418 69.2629H147.626V78.6432H142.726V101.765H147.626V111.086H126.057V101.765H131.016V85.5142L120.321 98.2403H119.126L108.67 85.5739V101.765H113.689V111.086H92.1203V101.765H97.0196V78.6432H92.1203V69.2629H109.328L119.783 82.8255L130.418 69.2629Z"fill=#F9C700 /><path d="M177.234 69.2629C179.663 69.2629 181.894 69.5417 183.925 70.0993C185.997 70.657 187.769 71.5133 189.243 72.6685C190.717 73.8236 191.872 75.2973 192.708 77.0898C193.545 78.8424 193.963 80.9534 193.963 83.423C193.963 85.8925 193.485 88.0036 192.529 89.7562C191.573 91.5088 190.318 92.9627 188.765 94.1178C187.212 95.2729 185.419 96.1293 183.388 96.6869C181.396 97.2446 179.345 97.5234 177.234 97.5234H169.646V101.765L174.963 102.064V111.086H152.797V101.765H157.756V78.6432H152.797V69.2629H177.234ZM169.646 87.904H177.234C178.588 87.904 179.743 87.5655 180.699 86.8883C181.655 86.1714 182.133 85.0561 182.133 83.5425C182.133 82.1484 181.655 81.1327 180.699 80.4954C179.743 79.8182 178.588 79.4797 177.234 79.4797H169.646V87.904Z"fill=#F9C700 /><path d="M197.613 78.6432V69.2629H219.242V78.6432H214.283V101.048H224.44L224.918 94.4165H235.254V111.086H197.912V101.765H202.393V78.6432H197.613Z"fill=#F9C700 /><path d="M267.832 96.9259H276.794V111.086H239.333V101.765H243.933V78.5237H239.333V69.2629H276.018V83.3035H267.056L266.817 79.1212H255.644V85.5739H265.681V94.775H255.644V101.108H267.593L267.832 96.9259Z"fill=#F9C700 /><path d="M320.586 69.2629V85.4544H310.608L310.249 79.3004H306.485V101.765H311.384V111.086H289.577V101.765H294.536V79.3004H290.712L290.353 85.4544H280.375V69.2629H320.586Z"fill=#F9C700 /><path d="M324.633 78.5237V69.2629H346.381V78.5237H341.422V101.765H346.381V111.086H324.633V101.765H329.533V78.5237H324.633Z"fill=#F9C700 /><path d="M396.239 90.1744C396.239 93.6796 395.662 96.8064 394.507 99.5548C393.391 102.263 391.818 104.554 389.787 106.426C387.755 108.258 385.305 109.672 382.438 110.668C379.61 111.624 376.483 112.102 373.057 112.102C369.632 112.102 366.485 111.624 363.617 110.668C360.789 109.672 358.339 108.258 356.268 106.426C354.237 104.554 352.644 102.263 351.488 99.5548C350.373 96.8064 349.815 93.6796 349.815 90.1744C349.815 86.7489 350.373 83.6819 351.488 80.9734C352.644 78.2648 354.237 75.9745 356.268 74.1024C358.339 72.2303 360.789 70.7964 363.617 69.8006C366.485 68.8048 369.632 68.3069 373.057 68.3069C376.483 68.3069 379.61 68.8048 382.438 69.8006C385.305 70.7565 387.755 72.1706 389.787 74.0426C391.818 75.9147 393.391 78.2051 394.507 80.9136C395.662 83.6222 396.239 86.7091 396.239 90.1744ZM384.409 90.1744C384.409 88.382 384.13 86.7688 383.573 85.3349C383.055 83.8611 382.298 82.6264 381.302 81.6306C380.346 80.5949 379.151 79.7983 377.718 79.2407C376.323 78.683 374.77 78.4042 373.057 78.4042C371.384 78.4042 369.831 78.7029 368.397 79.3004C367.003 79.8581 365.808 80.6746 364.812 81.7501C363.816 82.7857 363.04 84.0205 362.482 85.4544C361.924 86.8883 361.645 88.4617 361.645 90.1744C361.645 91.927 361.924 93.5402 362.482 95.014C363.04 96.4479 363.816 97.6827 364.812 98.7183C365.848 99.754 367.063 100.571 368.457 101.168C369.851 101.726 371.384 102.004 373.057 102.004C374.77 102.004 376.323 101.726 377.718 101.168C379.151 100.571 380.346 99.754 381.302 98.7183C382.298 97.6827 383.055 96.4479 383.573 95.014C384.13 93.5402 384.409 91.927 384.409 90.1744Z"fill=#F9C700 /><path d="M432.345 92.1461C432.266 90.9113 432.206 89.8558 432.166 88.9795C432.166 88.0634 432.146 87.2867 432.106 86.6494C432.106 85.9722 432.086 85.3947 432.047 84.9167C432.047 84.4387 432.027 84.0005 431.987 83.6022V78.6432H427.924V69.2629H448.776V78.6432H443.936V111.086H433.839L416.453 88.5613L416.632 97.6429V101.765H420.695V111.086H399.664V101.765H404.623V78.6432H399.664V69.2629H414.66L432.345 92.1461Z"fill=#F9C700 /></svg></div><div style="left:275px;top:831px;position:absolute;color:#000;font-size:16px;font-family:Work Sans;font-weight:500;word-wrap:break-word">Supported by:</div><img src="https://s3-alpha-sig.figma.com/img/ccbf/4928/65b8bfd2261853095303aface99dbfc3?Expires=1704067200&Signature=Od8XVBubeRlKDwe8ppl-oJkblBKmPEzc0VWspBkKkD6dyEwL0LU6jZvP~AT~G68PvNeGmvX4SVQj~pcEhEiODrUlPHsp3hZVZXvCjn-7HsMWxdKNmw-3J7lFmel6WTM3tpOlpFRATTQpJMLeL5G5fczGNCFtW3fp7JmkCq2lspJtCBKJdzv3HN1bHjQGpDd~6VwTnLo8A4KDqQ7UZqzWjGXtDl74CMLy-oIkfX5BAGf34XhSWBk8soxyyx9aqpc7hFqS3Y-PZcccneXq~jRrLSetG7crOxSGpSPpc6N8RruMjKNNLhHuSUtcnHvF~Sb1Tf8RYg2K6~oiIA-aBViJ2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"style=width:116.13px;height:126px;left:275px;top:866px;position:absolute><div style="left:63.04px;top:83.9px;position:absolute;color:#fff;font-size:27.23px;font-family:Work Sans;font-weight:700;word-wrap:break-word">CBRN Certification</div><div style=width:218.53px;height:75.86px;left:528px;top:831px;position:absolute><svg fill=none height=80 viewBox="0 0 223 80"width=223 xmlns=http://www.w3.org/2000/svg><path d="M60.2873 4.63903C59.6717 8.94869 56.4208 13.2762 54.4663 17.0377C49.916 25.7949 44.1977 33.4454 38.4111 41.4147C33.4202 48.2881 27.9683 54.6704 22.0682 60.632M22.0682 60.632C17.6 65.1468 12.8746 69.4203 7.89779 73.4831C6.85234 74.3365 3.73369 77.9442 2.20282 77.8541C1.53098 77.8146 2.74291 76.0341 2.7492 76.0258C4.62337 73.57 7.27095 71.7817 9.68404 69.9106C13.7844 66.7311 17.9033 63.6433 22.0682 60.632ZM22.0682 60.632C28.5003 55.9815 35.042 51.5136 41.7944 47.1727C47.3156 43.6234 52.7677 39.732 58.4801 36.4973C58.8971 36.2611 62.6515 33.9069 62.4729 35.0683C62.0827 37.6041 60.3441 40.075 59.1105 42.2553C57.9076 44.3813 57.022 46.5171 56.1474 48.7908C55.4123 50.7021 54.2351 52.643 54.2351 54.759C54.2351 56.2126 56.753 53.2586 57.8076 52.2583C62.2576 48.0371 66.5259 43.5173 70.6686 38.998C73.4074 36.0102 76.0833 32.8908 78.6573 29.6747M78.6573 29.6747C82.5984 24.7506 86.3005 19.5999 89.6238 14.3478C91.351 11.6182 95.0785 7.01109 94.7094 3.50424C94.5183 1.68934 89.4329 6.88939 89.1615 7.24485C84.5842 13.2389 81.6498 19.338 79.5368 26.5783C79.2798 27.4588 78.9523 28.5266 78.6573 29.6747ZM78.6573 29.6747C77.948 32.4356 77.4269 35.6609 78.5281 37.8632C80.6929 42.193 91.1951 33.1554 93.1332 31.7479C96.7143 29.1475 100.665 25.6838 104.88 24.1617C107.501 23.2154 107.86 23.5935 108.138 26.2631C108.521 29.9407 107.992 33.5088 107.949 37.1697C107.946 37.4259 107.712 39.4158 108.054 39.5864C109.369 40.2442 112.669 37.9621 113.623 37.3799C120.888 32.9444 127.246 27.1191 134.343 22.4174C134.626 22.2302 137.831 19.6282 137.831 20.5261C137.831 20.943 136.889 21.6609 137.306 21.6609C138.116 21.6609 138.957 21.1011 139.744 20.9044C140.48 20.7204 141.378 20.3235 142.16 20.5471C142.468 20.635 143.629 23.758 144.115 24.3298C147.952 28.8442 156.67 28.2397 159.392 22.7957M193.225 2C193.094 3.24119 192.169 4.37751 191.601 5.44404C190.403 7.68973 189.34 9.96498 187.942 12.1001C184.164 17.8741 181.031 24.0925 176.914 29.6237C172.867 35.0612 168.552 40.2735 164.245 45.5055C163.388 46.5462 162.511 47.6283 161.611 48.7184M161.611 48.7184C158.785 52.1385 155.72 55.6385 152.271 58.1931L152.252 58.2071C151.925 58.4497 149.662 60.1297 149.255 59.6207C148.388 58.5368 155.831 52.8838 161.611 48.7184ZM161.611 48.7184C164.744 46.4604 167.389 44.6396 167.956 44.2207C173.679 39.9977 179.376 35.7578 185.266 31.765C185.397 31.6758 190.619 28.0447 190.619 28.8385C190.619 30.1058 187.974 32.5702 187.3 33.6209C186.197 35.3413 184.958 37.2104 184.552 39.242C184.429 39.8568 183.832 40.7973 184.748 41.0086C185.69 41.226 187.071 40.4311 187.835 40.0093C190.549 38.5123 192.905 36.3182 195.295 34.3704C198.618 31.6612 201.564 28.3302 205.038 25.8406C205.43 25.5594 207.38 24.0221 207.661 25.2874C208.682 29.8842 218.215 26.1382 220.527 25.1268"id=Vector stroke=black stroke-linecap=round stroke-width=3 /></svg></div><div style=width:170px;height:104.9px;left:55px;top:890px;position:absolute><div style="left:0;top:0;position:absolute;color:#000;font-size:22.51px;font-family:Space Grotesk;font-weight:400;word-wrap:break-word">VR</div></div><div style="left:673px;top:937px;position:absolute;text-align:right;color:#000;font-size:12px;font-family:Work Sans;font-weight:600;word-wrap:break-word">Divy Sharma</div><div style="left:509px;top:962px;position:absolute;text-align:right;color:#000;font-size:12px;font-family:Work Sans;font-weight:500;word-wrap:break-word">Co-founder, CEO & Head of VR Rescue-X</div></div>
   `;

    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setContent(HTML_CERTIFICATE);
    const pdf = await page.pdf({
      format: "A4",
    });
    await browser.close();

    const certificate = new Certificate({
      html: HTML_CERTIFICATE,
      pdf,
    });

    await certificate.save();

    user.certificates.push(certificate._id);


    return {certificate,pdf}; 
}