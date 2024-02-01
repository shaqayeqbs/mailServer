import React from "react";

function Store({ color }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0004 0C16.1743 0 16.3416 0.0603699 16.4747 0.16902L16.5502 0.23991L19.8225 3.76824L19.8531 3.80714C19.9549 3.94281 20.0008 4.09665 20.0008 4.24775L19.9993 6.16674C19.9993 7.16092 19.6207 8.0667 18.9999 8.7478L18.9991 19.25C18.9991 19.6297 18.717 19.9435 18.3509 19.9932L18.2491 20H1.75162C1.37193 20 1.05813 19.7178 1.00847 19.3518L1.00162 19.25L1.00084 8.7478C0.427776 8.1191 0.0611465 7.29893 0.00813649 6.39453L0.00147651 6.16674L0.00128649 4.29097C-0.00678351 4.15366 0.0228663 4.01238 0.0972163 3.88313L0.162477 3.78767L0.201656 3.74193L3.45055 0.23991C3.56882 0.11243 3.72689 0.0308099 3.89705 0.00714993L4.00038 0H16.0004ZM13.0823 8.4421L13.0704 8.4598C12.3715 9.3944 11.256 9.9993 9.9992 9.9993C8.7354 9.9993 7.61442 9.3876 6.91629 8.4441C6.21884 9.3876 5.09788 9.9993 3.83406 9.9993C3.36495 9.9993 2.91553 9.915 2.50011 9.7608L2.50138 18.499H4L4.00038 11.751C4.00038 11.3713 4.28253 11.0575 4.64861 11.0079L4.75038 11.001H9.2463C9.626 11.001 9.9398 11.2832 9.9895 11.6492L9.9963 11.751L9.996 18.499H17.4984L17.4986 9.7615C17.0838 9.9153 16.635 9.9993 16.1667 9.9993C14.902 9.9993 13.7804 9.3867 13.0823 8.4421ZM8.4954 12.501H5.50038V18.499H8.4954V12.501ZM15.2551 11.001C15.6348 11.001 15.9486 11.2832 15.9982 11.6492L16.0051 11.751V15.253C16.0051 15.6327 15.7229 15.9465 15.3569 15.9962L15.2551 16.003H11.7537C11.374 16.003 11.0602 15.7209 11.0105 15.3548L11.0037 15.253V11.751C11.0037 11.3713 11.2858 11.0575 11.6519 11.0079L11.7537 11.001H15.2551ZM14.5044 12.501H12.5034V14.503H14.5044V12.501ZM6.16638 5.002H1.50138L1.50148 6.16674L1.50766 6.33777L1.53604 6.569L1.56878 6.72528L1.61816 6.89726L1.67252 7.0451L1.7132 7.1391C1.74437 7.20697 1.7787 7.27309 1.816 7.33727L1.91894 7.49873L1.97323 7.57344L2.102 7.72909L2.24377 7.87318L2.34002 7.95811L2.38211 7.99243C2.69664 8.2429 3.07735 8.4138 3.49378 8.4747L3.67435 8.4939L3.83406 8.4993C5.06862 8.4993 6.07918 7.54019 6.16125 6.32644L6.16663 6.16674L6.16638 5.002ZM12.3314 5.002H7.66638L7.66663 6.16674C7.66663 7.34763 8.5442 8.3236 9.6827 8.478L9.8395 8.4939L9.9992 8.4993C11.2338 8.4993 12.2443 7.54019 12.3264 6.32644L12.3318 6.16674L12.3314 5.002ZM18.4984 5.002H13.8334L13.8341 6.16674C13.8341 7.34763 14.7117 8.3236 15.8502 8.478L16.007 8.4939L16.1667 8.4993C16.731 8.4993 17.2485 8.2989 17.6519 7.96542L17.7417 7.88731L17.8575 7.7736L18.0037 7.60441C18.0577 7.53545 18.108 7.46337 18.1541 7.38849L18.2576 7.20179L18.3205 7.06383L18.3788 6.90873L18.4085 6.81314L18.4468 6.66108L18.4751 6.50352L18.4932 6.33678L18.4993 6.16674L18.4984 5.002ZM7.062 1.499H4.32738L2.46938 3.502H6.446L7.062 1.499ZM11.369 1.499H8.631L8.015 3.502H11.985L11.369 1.499ZM15.6724 1.499H12.938L13.554 3.502H17.5304L15.6724 1.499Z"
        fill={color}
      />
    </svg>
  );
}

export default Store;
