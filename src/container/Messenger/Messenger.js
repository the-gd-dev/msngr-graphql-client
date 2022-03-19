import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
const Messenger = () => {
  return (
    <AuthLayout>
      <div className="flex w-full h-full">
        <div className="w-1/4 h-full border-r">
          <div className="conversations___container p-5">
            <div className="conversations___header relative">
              <div className="conversations___header__user flex justify-between items-center space-x-2 ">
                <div className="mc__title__nd__dp flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full border-2 overflow-hidden">
                    <img
                      src="https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/270376103_4628975630554173_6521574108613384626_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9BPLwQ2XcC4AX_sxm8O&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT_jufvCOEMBYZGm185bN-ap8buqFjVgMv1Me8_gCz6k8A&oe=623A2A75"
                      alt=""
                    />
                  </div>
                  <div className="text-2xl font-bold">Chats</div>
                </div>
                {/* options */}
                <div className="flex items-center justify-around space-x-2">
                  <button className="w-9 h-9 rounded-full bg-gray-100 flex justify-between items-center">
                    <svg
                      viewBox="0 0 36 36"
                      height="28"
                      width="28"
                      className="m-auto"
                    >
                      <path d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"></path>
                    </svg>
                  </button>
                  <button>
                    <svg
                      viewBox="0 0 36 36"
                      className="w-9 h-9 rounded-full bg-gray-100 flex justify-between items-center p-1"
                      height="28"
                      width="28"
                    >
                      <path d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"></path>
                      <path d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"></path>
                    </svg>
                  </button>
                </div>
               
              </div>
              <div className="conversations___header__search__mc flex items-center space-x-2">
                <button className="w-9 h-9 mt-5 rounded-full bg-gray-100 hover:bg-gray-300">
                  <svg
                    className="text-lg m-auto"
                    viewBox="0 0 20 20"
                    width="1em"
                    height="1em"
                    fill="#404040"
                  >
                    <g fill-rule="evenodd" transform="translate(-446 -350)">
                      <g fill-rule="nonzero">
                        <path
                          d="M100.249 201.999a1 1 0 0 0-1.415-1.415l-5.208 5.209a1 1 0 0 0 0 1.414l5.208 5.209A1 1 0 0 0 100.25 211l-4.501-4.501 4.5-4.501z"
                          transform="translate(355 153.5)"
                        ></path>
                        <path
                          d="M107.666 205.5H94.855a1 1 0 1 0 0 2h12.813a1 1 0 1 0 0-2z"
                          transform="translate(355 153.5)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </button>
                <label className="w-full  flex w-full relative">
                  <span class="text-lg absolute top-7 left-4">
                    <svg
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="#adadad"
                    >
                      <g fill-rule="evenodd" transform="translate(-448 -544)">
                        <g fill-rule="nonzero">
                          <path
                            d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                            transform="translate(448 544)"
                          ></path>
                          <path
                            d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                            transform="translate(448 544)"
                          ></path>
                          <path
                            d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                            transform="translate(448 544)"
                          ></path>
                          <path
                            d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                            transform="translate(448 544)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <input
                    placeholder="Search Messenger Clone"
                    type="text"
                    className="bg-gray-100 text-black rounded-full h-9 pl-10 mt-5 w-full outline-0"
                  />
                </label>
              </div>
              <div className="z-10 hidden bg-white shadow-md absolute top-12 right-12 w-36 py-1 rounded-xl">
                <div  className="text-md font-semibold text-left py-1 px-4 hover:bg-gray-100 cursor-pointer">Log out</div>
              </div>
            </div>
            <div
              className="conversations___wrapper flex w-full flex-col py-6"
              style={{
                height: 768,
                overflowY: "auto",
              }}
            >
              {/* Single Person Card */}
              <div className="z-5 hover:bg-gray100 flex justify-between py-3 rounded-md px-2 bg-gray-100 relative">
                <div className="single__details flex space-x-2 items-center ">
                  <div className="w-14 h-14 rounded-full overflow-hidden my-auto">
                    <img
                      src="https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/221871068_2896966410569438_6700860501280177332_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WRekg0E16LUAX9q4T-f&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT-Nlh57VINX9Qk5LBlhe_8ybz5UteVmzhhqV56VeKGqGA&oe=623A2391"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-md leading-tight">KS 😊</div>
                    <div className="__last__message flex space-x-2 items-center text-sm leading-tight">
                      <div className="text-gray-500">😂😂😂</div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="text-gray-500">1 d</div>
                    </div>
                  </div>
                </div>
                <div className="single__card__ops flex space-x-2 items-center ">
                  <button className="w-9 h-9 bg-white rounded-full border shadow-md flex justify-between items-center">
                    <svg
                      viewBox="0 0 36 36"
                      height="28"
                      width="28"
                      className="m-auto"
                    >
                      <path d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"></path>
                    </svg>
                  </button>

                  <div className="w-4 h-4 rounded-full overflow-hidden my-auto  cursor-pointer">
                    <img
                      src="https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/221871068_2896966410569438_6700860501280177332_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WRekg0E16LUAX9q4T-f&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT-Nlh57VINX9Qk5LBlhe_8ybz5UteVmzhhqV56VeKGqGA&oe=623A2391"
                      alt=""
                    />
                  </div>
                </div>
                <div className="z-10 hidden bg-white shadow-md absolute top-12 right-12 w-36 py-2 rounded-xl">
                  <div  className="text-md font-semibold text-left py-1 px-4 hover:bg-gray-100 cursor-pointer">Mark as read</div>
                  <div  className="text-md font-semibold text-left py-1 px-4 hover:bg-gray-100 cursor-pointer">Delete Chat</div>
                </div>
              </div>
            </div>
            <div className="conversations___footer"></div>
          </div>
        </div>
        <div className="w-3/4 h-full border-r">
          <div className="messages__o__container">
            <div className="messages__i__container">
              {/* CHat Header */}
              <div className="chat__header shadow-md  flex w-full justify-between items-center px-4">
                <div className="flex space-x-2 items-center py-3 rounded-md px-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden my-auto  cursor-pointer">
                    <img
                      src="https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/221871068_2896966410569438_6700860501280177332_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WRekg0E16LUAX9q4T-f&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT-Nlh57VINX9Qk5LBlhe_8ybz5UteVmzhhqV56VeKGqGA&oe=623A2391"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg leading-tight font-semibold cursor-pointer hover:underline">
                      KS 😊
                    </div>
                    <div className="__last__message flex space-x-2 items-center text-sm leading-tight">
                      <div className="text-gray-500 leading-tight">
                        Active 1d ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat__user__information">
                  <button className="w-9 h-9 rounded-full text-blue-500 hover:bg-gray-100 flex justify-between items-center">
                    <svg
                      viewBox="0 0 36 36"
                      height="40"
                      width="40"
                      fill="currentColor"
                      className="m-auto"
                    >
                      <path d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              {/* CHat Messages */}
              <div
                className="chat__messages__container px-4 flex flex-col items-baseline"
                style={{
                  height: 800,
                  overflowY: "auto",
                }}
              >
                <div className="messages__wrapper mt-auto w-full">
                  {/* Time of messages */}
                  <div className="text-sm font-semibold text-gray-500 text-center py-2">12 Jan 2020 08:50 AM</div>
                  {/* Reciever Msg */}
                  <div className="chat__single__message flex w-full justify-start my-4">
                    <div className="message flex space-x-2 items-center">
                      <div className="w-9 h-9 rounded-full overflow-hidden my-auto  cursor-pointer">
                        <img
                          src="https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-1/221871068_2896966410569438_6700860501280177332_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WRekg0E16LUAX9q4T-f&_nc_ad=z-m&_nc_cid=2034&_nc_ht=scontent.fslv1-2.fna&oh=00_AT-Nlh57VINX9Qk5LBlhe_8ybz5UteVmzhhqV56VeKGqGA&oe=623A2391"
                          alt=""
                        />
                      </div>
                      <div className="msg-content bg-gray-100 py-2 px-4 rounded-full">
                        Tuitions hoti h yr... Abhi 26 tk to
                      </div>
                      <div className="__msg__options flex space-x-1">
                        <button className="hover:bg-gray-100 text-gray-600 h-8 w-8 rounded-full flex">
                          <svg
                            width="22px"
                            height="22px"
                            viewBox="1 1 21 21"
                            fill="currentColor"
                            className="m-auto"
                          >
                            <g stroke-width="1">
                              <path d="M10.8932368,14.7625445 C10.8932368,15.535432 10.0849567,15.996442 9.48116675,15.5677995 L4.03193175,11.696707 C3.49257425,11.313742 3.49287675,10.4694645 4.03193175,10.0864995 L9.48116675,6.2157095 C10.0849567,5.7867645 10.8932368,6.248077 10.8932368,7.020662 L10.8938418,9.0755445 C15.2129368,9.0755445 18.1517243,11.027577 18.1523293,15.7226795 C18.1523293,16.0820495 17.9036743,16.3349395 17.5273643,16.3349395 C17.2487618,16.3349395 17.0164418,16.1746145 16.8527893,15.680027 C16.1588543,13.584307 14.1063918,12.7049395 10.8938418,12.7049395 L10.8932368,14.7625445 Z"></path>
                            </g>
                          </svg>
                        </button>
                        <button className="hover:bg-gray-100 text-gray-600 h-8 w-8 rounded-full flex">
                          <svg
                            width="22px"
                            height="22px"
                            viewBox="0 0 22 22"
                            fill="currentColor"
                            className="m-auto"
                          >
                            <circle
                              cx="11"
                              cy="6"
                              r="2"
                              stroke-width="1px"
                              fill="var(--placeholder-icon)"
                            ></circle>
                            <circle
                              cx="11"
                              cy="11"
                              r="2"
                              stroke-width="1px"
                              fill="var(--placeholder-icon)"
                            ></circle>
                            <circle
                              cx="11"
                              cy="16"
                              r="2"
                              stroke-width="1px"
                              fill="var(--placeholder-icon)"
                            ></circle>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Sender Msg */}
                  <div className="chat__single__message flex w-full justify-end my-4">
                    <div className="message flex space-x-2 items-center">
                      <div className="__msg__options flex space-x-1">
                        <button className="hover:bg-gray-100 text-gray-600 h-8 w-8 rounded-full flex">
                          <svg
                            width="22px"
                            height="22px"
                            viewBox="0 0 22 22"
                            fill="currentColor"
                            className="m-auto"
                          >
                            <circle
                              cx="11"
                              cy="6"
                              r="2"
                              stroke-width="1px"
                              fill="var(--placeholder-icon)"
                            ></circle>
                            <circle
                              cx="11"
                              cy="11"
                              r="2"
                              stroke-width="1px"
                              fill="var(--placeholder-icon)"
                            ></circle>
                            <circle
                              cx="11"
                              cy="16"
                              r="2"
                              stroke-width="1px"
                              fill="var(--placeholder-icon)"
                            ></circle>
                          </svg>
                        </button>
                        <button className="hover:bg-gray-100 text-gray-600 h-8 w-8 rounded-full flex">
                          <svg
                            width="22px"
                            height="22px"
                            viewBox="1 1 21 21"
                            fill="currentColor"
                            className="m-auto"
                          >
                            <g stroke-width="1">
                              <path d="M10.8932368,14.7625445 C10.8932368,15.535432 10.0849567,15.996442 9.48116675,15.5677995 L4.03193175,11.696707 C3.49257425,11.313742 3.49287675,10.4694645 4.03193175,10.0864995 L9.48116675,6.2157095 C10.0849567,5.7867645 10.8932368,6.248077 10.8932368,7.020662 L10.8938418,9.0755445 C15.2129368,9.0755445 18.1517243,11.027577 18.1523293,15.7226795 C18.1523293,16.0820495 17.9036743,16.3349395 17.5273643,16.3349395 C17.2487618,16.3349395 17.0164418,16.1746145 16.8527893,15.680027 C16.1588543,13.584307 14.1063918,12.7049395 10.8938418,12.7049395 L10.8932368,14.7625445 Z"></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div className="msg-content bg-blue-500 text-white py-2 px-4 rounded-full">
                        Tuitions hoti h yr... Abhi 26 tk to
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CHat Footer */}
              <div className="chat__messages__footer flex space-x-2 h-full w-full items-center px-4">
                <div className="flex">
                  <button className="w-9 h-9 rounded-full text-cyan-500 hover:bg-gray-100 flex justify-between items-center">
                    <svg
                      viewBox="0 0 36 36"
                      height="28px"
                      width="28px"
                      class="m-auto"
                    >
                      <path
                        d="M13.5 16.5a2 2 0 100-4 2 2 0 000 4z"
                        fill="#0084ff"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12v12a4 4 0 004 4h14a4 4 0 004-4V12a4 4 0 00-4-4H11a4 4 0 00-4 4zm18-1.5H11A1.5 1.5 0 009.5 12v9.546a.25.25 0 00.375.217L15 18.803a6 6 0 016 0l5.125 2.96a.25.25 0 00.375-.217V12a1.5 1.5 0 00-1.5-1.5z"
                        fill="#0084ff"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex w-full">
                  <label className="w-full  flex w-full relative">
                    <input
                      placeholder="Aa"
                      type="text"
                      className="bg-gray-100 text-black rounded-full h-10 pl-4 w-full outline-0"
                    />
                  </label>
                </div>
                <div className="flex">
                  <button className="bg-gray-100 text-gray-400 font-semibold hover:bg-blue-500 hover:text-white  px-4 py-1 rounded-full m-auto">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-1/4 h-full border-r">Right Side</div> */}
      </div>
    </AuthLayout>
  );
};

export default Messenger;
