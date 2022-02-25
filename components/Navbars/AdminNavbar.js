import Link from "next/link";
import React, { useState } from "react";

export default function AdminNavbar({ author }) {
  return (
    <>
      <div className="container mx-auto items-center">
        <div>
          <div className="flex flex-row justify-between flex-wrap p-2 w-full lg:flex-row">
            <Link href="/">
              <a className="justify-center flex-1 px-2 focus:outline-none md:ml-auto md:mr-auto">
                <svg
                  width="165"
                  height="37"
                  viewBox="0 0 165 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6669 24.4167L14.9392 17.7808H14.6329L10.209 29.9976L5.7851 17.7808H5.47883L5.75107 24.4167V35H1.32717V11.2471H7.35048L10.2771 19.2441H10.5493L13.4759 11.2471H19.0908V35H14.6669V24.4167ZM30.8519 15.1945C29.7176 15.1945 28.9236 14.9677 28.4698 14.5139C28.0388 14.0375 27.8232 13.4704 27.8232 12.8124V11.8256C27.8232 11.145 28.0388 10.5778 28.4698 10.1241C28.9236 9.67034 29.7176 9.44347 30.8519 9.44347C31.9863 9.44347 32.7689 9.67034 33.2 10.1241C33.6537 10.5778 33.8806 11.145 33.8806 11.8256V12.8124C33.8806 13.4704 33.6537 14.0375 33.2 14.5139C32.7689 14.9677 31.9863 15.1945 30.8519 15.1945ZM22.7528 31.0866H28.3337V21.354H22.7528V17.4405H33.3701V31.0866H38.5427V35H22.7528V31.0866ZM41.3199 35V17.4405H46.3563V20.6393H46.5605C46.7647 20.1402 47.0142 19.6752 47.3091 19.2441C47.6041 18.8131 47.9557 18.4387 48.3641 18.1211C48.7951 17.7808 49.2829 17.5199 49.8274 17.3384C50.3945 17.1343 51.0298 17.0322 51.733 17.0322C52.5725 17.0322 53.3438 17.1796 54.0471 17.4745C54.7504 17.7468 55.3516 18.1665 55.8507 18.7337C56.3498 19.3008 56.7355 19.9928 57.0077 20.8095C57.3026 21.6262 57.4501 22.5677 57.4501 23.634V35H52.4136V24.3146C52.4136 22.0459 51.4268 20.9116 49.453 20.9116C49.0674 20.9116 48.6817 20.9683 48.296 21.0817C47.933 21.1725 47.6041 21.3313 47.3091 21.5582C47.0142 21.7623 46.776 22.0232 46.5945 22.3408C46.4357 22.6585 46.3563 23.0328 46.3563 23.4638V35H41.3199ZM60.9759 31.0866H66.3527V13.7313H60.9759V9.8178H71.3891V31.0866H76.7658V35H60.9759V31.0866ZM89.5138 15.1945C88.3795 15.1945 87.5854 14.9677 87.1317 14.5139C86.7006 14.0375 86.4851 13.4704 86.4851 12.8124V11.8256C86.4851 11.145 86.7006 10.5778 87.1317 10.1241C87.5854 9.67034 88.3795 9.44347 89.5138 9.44347C90.6481 9.44347 91.4308 9.67034 91.8619 10.1241C92.3156 10.5778 92.5425 11.145 92.5425 11.8256V12.8124C92.5425 13.4704 92.3156 14.0375 91.8619 14.5139C91.4308 14.9677 90.6481 15.1945 89.5138 15.1945ZM81.4146 31.0866H86.9956V21.354H81.4146V17.4405H92.032V31.0866H97.2046V35H81.4146V31.0866ZM99.9817 35V17.4405H105.018V20.6393H105.222C105.427 20.1402 105.676 19.6752 105.971 19.2441C106.266 18.8131 106.618 18.4387 107.026 18.1211C107.457 17.7808 107.945 17.5199 108.489 17.3384C109.056 17.1343 109.692 17.0322 110.395 17.0322C111.234 17.0322 112.006 17.1796 112.709 17.4745C113.412 17.7468 114.013 18.1665 114.513 18.7337C115.012 19.3008 115.397 19.9928 115.67 20.8095C115.964 21.6262 116.112 22.5677 116.112 23.634V35H111.076V24.3146C111.076 22.0459 110.089 20.9116 108.115 20.9116C107.729 20.9116 107.344 20.9683 106.958 21.0817C106.595 21.1725 106.266 21.3313 105.971 21.5582C105.676 21.7623 105.438 22.0232 105.256 22.3408C105.098 22.6585 105.018 23.0328 105.018 23.4638V35H99.9817ZM119.536 9.8178H124.572V24.1104H124.81L127.158 21.354L130.834 17.4405H136.619L129.813 24.3826L137.333 35H131.344L126.24 27.2412L124.572 28.9086V35H119.536V9.8178ZM146.883 35.4084C144.931 35.4084 143.23 35.1134 141.778 34.5236C140.349 33.9337 139.271 33.1283 138.545 32.1075L141.37 29.4871C142.05 30.2358 142.844 30.8257 143.752 31.2567C144.682 31.6651 145.737 31.8692 146.917 31.8692C147.915 31.8692 148.697 31.7218 149.265 31.4268C149.832 31.1092 150.115 30.6328 150.115 29.9976C150.115 29.4985 149.923 29.1582 149.537 28.9767C149.151 28.7725 148.618 28.6137 147.937 28.5003L145.113 28.0579C144.319 27.9444 143.582 27.7743 142.901 27.5474C142.22 27.2979 141.631 26.9689 141.131 26.5606C140.632 26.1522 140.235 25.6531 139.94 25.0632C139.645 24.4734 139.498 23.7588 139.498 22.9193C139.498 21.0817 140.201 19.6411 141.608 18.5975C143.014 17.554 144.988 17.0322 147.529 17.0322C149.253 17.0322 150.717 17.2704 151.919 17.7468C153.144 18.2005 154.12 18.8584 154.846 19.7205L152.327 22.5791C151.806 22.0119 151.136 21.5355 150.32 21.1498C149.503 20.7641 148.516 20.5713 147.359 20.5713C145.408 20.5713 144.432 21.1611 144.432 22.3408C144.432 22.8626 144.625 23.2256 145.011 23.4298C145.397 23.6113 145.93 23.7588 146.61 23.8722L149.401 24.3146C150.195 24.428 150.932 24.6095 151.613 24.8591C152.293 25.0859 152.883 25.4035 153.382 25.8119C153.904 26.2203 154.312 26.7194 154.607 27.3092C154.902 27.8991 155.05 28.6137 155.05 29.4531C155.05 31.2907 154.335 32.7427 152.906 33.809C151.499 34.8752 149.491 35.4084 146.883 35.4084Z"
                    fill="url(#paint0_linear_186_292)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_292"
                      x1="82.5"
                      y1="0"
                      x2="82.5"
                      y2="37"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4DB68D" />
                      <stop offset="1" stopColor="#8CC3AE" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </Link>

            <>
              {author.length > 0 ? (
                <div className="lg:flex lg:flex-row justify-end items-center">
                  <Link href="/api/auth/logout">
                    <a className="block w-auto mx-2 px-8 py-2 my-2 text-base font-medium text-dark-700 dark:text-white  transition duration-500 ease-in-out transform bg-transparent border border-dark-700  dark:border-white rounded-md">
                      Logout
                    </a>
                  </Link>
                </div>
              ) : (
                <Link href={"/api/auth/login"}>
                  <a className="block w-auto mx-2 px-8 py-2 my-2 text-base font-medium text-dark-700 dark:text-white  transition duration-500 ease-in-out transform bg-transparent border border-dark-700  dark:border-white rounded-md">
                    Login{" "}
                  </a>
                </Link>
              )}{" "}
            </>
          </div>
        </div>
      </div>
    </>
  );
}
