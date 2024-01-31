import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="backdrop-blur-xs w-full bg-gradient-to-b from-gray-100/20 to-gray-900/0 absolute">
      <div className="flex justify-between items-center mx-auto p-3">
        <Link to="/">
          <div className="flex flex-row ml-64 mt-2">
            <svg
              className="h-12 w-12"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1143.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M3060 12793 c-26 -10 -61 -47 -80 -83 -32 -63 -43 -151 -38 -308 5
-141 6 -150 36 -209 18 -34 32 -64 32 -67 0 -2 -53 -32 -117 -67 -826 -438
-1545 -1099 -2041 -1879 -446 -701 -724 -1483 -816 -2300 -240 -2115 766
-4158 2592 -5264 679 -411 1492 -679 2274 -749 l133 -12 3 -351 2 -352 -162
-6 c-90 -3 -309 -8 -488 -11 -179 -3 -496 -12 -705 -21 -1095 -42 -1807 -114
-1984 -200 l-54 -27 7 -81 c3 -44 6 -128 7 -186 1 -69 6 -114 15 -133 87 -167
785 -290 1984 -347 497 -24 799 -31 1545 -37 2118 -16 3615 85 4113 277 83 32
156 86 168 123 4 12 11 25 17 28 6 4 7 66 2 174 -9 197 -10 200 -119 234 -292
90 -1388 173 -2596 196 -162 3 -395 8 -518 11 l-222 6 2 362 3 361 155 22
c519 75 1034 221 1489 422 51 23 94 40 95 39 1 -2 11 -22 21 -46 36 -83 248
-259 366 -303 67 -26 139 -25 173 2 67 52 90 157 84 371 l-5 153 -190 386
-190 385 76 44 c193 110 482 314 660 464 747 628 1269 1442 1530 2381 179 644
213 1384 95 2065 -233 1348 -1065 2551 -2249 3252 -1260 745 -2819 874 -4163
344 l-109 -43 -179 360 c-197 394 -193 389 -355 511 -111 84 -242 132 -299
109z m190 -1153 l60 -120 -23 -14 c-371 -231 -617 -425 -908 -715 -239 -239
-417 -454 -588 -709 -394 -589 -646 -1238 -751 -1937 -70 -460 -66 -1004 10
-1473 210 -1293 962 -2452 2067 -3185 993 -658 2208 -914 3403 -716 288 48
615 135 873 233 l67 25 70 -139 c39 -77 70 -144 70 -149 0 -24 -505 -169 -783
-225 -596 -120 -1303 -141 -1897 -55 -908 130 -1765 489 -2480 1038 -257 197
-572 495 -774 731 -566 662 -948 1455 -1100 2280 -58 317 -78 540 -78 885 -1
341 27 629 89 935 272 1349 1096 2510 2316 3264 88 54 285 165 294 166 2 0 30
-54 63 -120z"
                />
              </g>
            </svg>

            <h1 className="mx-2 py-2 font-bold text-3xl font-poppins items-center justify-center align-middle">
              EduSphere
            </h1>
          </div>
        </Link>
        <ul className="flex gap-12 text-lg mr-64">
          <Link to="/">
            <li>Home</li>
          </Link>
          {currentUser ? <></> : <Link to="/sign-up">{<li>Sign up</li>}</Link>}
          {currentUser ? <></> : <Link to="/sign-in">{<li>Sign in</li>}</Link>}

          {currentUser ? (
            <Link to="/dashboard">{<li>Dashboard</li>}</Link>
          ) : (
            <></>
          )}

          {currentUser ? (
            <Link to="/profile">
              {
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full"
                />
              }
            </Link>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
}
