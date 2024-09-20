import Link from "next/link";

export default () => {
  return (
    <div className="h-screen bg-gray-900 flex justify-center ">
      <div className="text-white mt-32 max-w-7xl mx-auto space-y-2">
        <h1 className="h3 font-bold text-center">Invest in a better you.</h1>

        <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">
          {/* Pricing table 1 */}
          <div
            className="relative flex flex-col h-full p-6 rounded border"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-6">
              <div className="font-cabinet-grotesk text-xl font-bold mb-1">
                Basic
              </div>
              <div className="font-cabinet-grotesk text-gray-900 font-bold inline-flex items-baseline mb-2">
                <span className="text-3xl text-white">₦</span>
                <span className="text-5xl text-white">100,000</span>
                {/* <span className="text-5xl">{annual ? "449" : "499"}</span> */}
                {/* <span>/mo</span> */}
              </div>
              <div className="text-white mb-6">
                You're ready to upskill and advance your career
              </div>
              <Link
                className="btn w-full inline-flex items-center text-white bg-gray-900 hover:bg-gray-800 group border"
                href="/schedule-call"
              >
                Start Learning
                <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="8"
                  >
                    <path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="font-cabinet-grotesk font-bold mb-4">
              Features include:
            </div>
            <ul className="text-white space-y-3 grow">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Unlimited access to all courses, projects + workshops, and
                  career paths
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Access to our private Discord with 1,000+ members</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Access to our private LinkedIn networking group</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Custom BLA course completion certificates</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Live career advice sessions with mentors, every month
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Full access to all future courses, content, and features
                </span>
              </li>
            </ul>
          </div>

          {/* Pricing table 2 */}
          <div
            className="relative flex flex-col h-full p-6 rounded bg-blue-100"
            data-aos="fade-up"
          >
            <div className="mb-6">
              <div className="font-cabinet-grotesk text-xl font-bold mb-1 text-black">
                Pro
              </div>
              <div className="font-cabinet-grotesk text-gray-900 font-bold inline-flex items-baseline mb-2">
                <span className="text-3xl">₦</span>
                <span className="text-5xl">200,000</span>
                {/* <span className="text-5xl">{annual ? "749" : "799"}</span> */}
                <span>+ Laptop</span>
              </div>
              <div className="text-gray-500 mb-6">
                You're committed to getting hired and starting a career in tech
              </div>
              <Link
                className="btn w-full inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 group"
                href="/schedule-call"
              >
                Start Learning Now
                <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="8"
                  >
                    <path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="font-cabinet-grotesk font-bold mb-4 text-black">
              Everything in Basic, plus:
            </div>
            <ul className="text-gray-500 space-y-3 grow">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Unlimited access to all courses, projects + workshops, and
                  career paths
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Access to our private Discord with 1,000+ members</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Access to our private LinkedIn networking group</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Custom BLA course completion certificates</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Live career advice sessions with mentors, every month
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Full access to all future courses, content, and features
                </span>
              </li>
            </ul>
          </div>

          {/* Pricing table 3 */}
          <div
            className="relative flex flex-col h-full p-6 rounded bg-gray-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-6">
              <div className="font-cabinet-grotesk text-xl font-bold mb-1 text-black">
                Enterprise
              </div>
              <div className="font-cabinet-grotesk text-gray-900 font-bold inline-flex items-baseline mb-2">
                <span className="text-3xl mt-2.5">Contact us</span>
              </div>
              <div className="text-gray-500 mb-6">
                You're committed to upskilling your team.
              </div>
              <Link
                className="btn w-full inline-flex items-center text-white bg-gray-900 hover:bg-gray-800 group"
                href="/schedule-call"
              >
                Schedule A Call
                <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="8"
                  >
                    <path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="font-cabinet-grotesk font-bold mb-4 text-black">
              Everything in Pro, plus:
            </div>
            <ul className="text-gray-500 space-y-3 grow">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Unlimited access to all courses, projects + workshops, and
                  career paths
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Access to our private Discord with 1,000+ members</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Access to our private LinkedIn networking group</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Custom BLA course completion certificates</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Live career advice sessions with mentors, every month
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>
                  Full access to all future courses, content, and features
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
