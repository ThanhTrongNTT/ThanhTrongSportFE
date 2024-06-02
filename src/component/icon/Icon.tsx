export const IconTrash = () => {
    return (
        <span className="inline-block">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:text-red-500"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
            </svg>
        </span>
    );
};

export const IconPlus = () => {
    return (
        <span className="inline-block">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:text-green-500"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
            </svg>
        </span>
    );
};

export const IconMinus = () => {
    return (
        <span className="inline-block">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:text-red-500"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                />
            </svg>
        </span>
    );
};

export const IconMyProfile = () => {
    return (
        <svg
            width={17}
            height={17}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.01776 0.493164C6.45974 0.496118 4.9362 0.951083 3.63272 1.80264C2.32924 2.6542 1.30207 3.8656 0.676338 5.28929C0.050602 6.71298 -0.146697 8.2875 0.108472 9.82108C0.363641 11.3547 1.06026 12.7811 2.11349 13.9267C2.86572 14.7403 3.77869 15.3896 4.79486 15.8337C5.81104 16.2778 6.90839 16.507 8.01776 16.507C9.12714 16.507 10.2245 16.2778 11.2407 15.8337C12.2568 15.3896 13.1698 14.7403 13.922 13.9267C14.9753 12.7811 15.6719 11.3547 15.9271 9.82108C16.1822 8.2875 15.9849 6.71298 15.3592 5.28929C14.7335 3.8656 13.7063 2.6542 12.4028 1.80264C11.0993 0.951083 9.57578 0.496118 8.01776 0.493164ZM8.01776 14.9206C6.35369 14.918 4.75548 14.2716 3.55944 13.1171C3.92256 12.2351 4.54029 11.4807 5.33413 10.9497C6.12797 10.4188 7.06208 10.1353 8.01776 10.1353C8.97344 10.1353 9.90755 10.4188 10.7014 10.9497C11.4952 11.4807 12.113 12.2351 12.4761 13.1171C11.28 14.2716 9.68183 14.918 8.01776 14.9206ZM6.41116 6.90534C6.41116 6.58829 6.50538 6.27836 6.68192 6.01474C6.85846 5.75112 7.10937 5.54565 7.40294 5.42432C7.69651 5.30299 8.01954 5.27125 8.33119 5.3331C8.64285 5.39495 8.92912 5.54763 9.1538 5.77182C9.37849 5.99601 9.5315 6.28164 9.5935 6.59261C9.65549 6.90357 9.62367 7.22588 9.50207 7.5188C9.38047 7.81172 9.17455 8.06208 8.91034 8.23823C8.64614 8.41437 8.33552 8.50839 8.01776 8.50839C7.59166 8.50839 7.18302 8.3395 6.88172 8.03887C6.58043 7.73824 6.41116 7.3305 6.41116 6.90534ZM13.5686 11.7145C12.8509 10.4896 11.7462 9.53676 10.4277 9.00533C10.8367 8.54258 11.1032 7.9719 11.1952 7.36176C11.2872 6.75162 11.2008 6.12796 10.9464 5.5656C10.692 5.00324 10.2803 4.52607 9.76085 4.19136C9.24138 3.85665 8.63614 3.67861 8.01776 3.67861C7.39939 3.67861 6.79415 3.85665 6.27467 4.19136C5.75519 4.52607 5.34355 5.00324 5.08912 5.5656C4.8347 6.12796 4.74831 6.75162 4.84032 7.36176C4.93234 7.9719 5.19884 8.54258 5.60786 9.00533C4.28932 9.53676 3.18467 10.4896 2.46695 11.7145C1.89495 10.7423 1.59273 9.6357 1.59135 8.50839C1.59135 6.80777 2.26841 5.17681 3.4736 3.97429C4.67879 2.77178 6.31337 2.09621 8.01776 2.09621C9.72215 2.09621 11.3567 2.77178 12.5619 3.97429C13.7671 5.17681 14.4442 6.80777 14.4442 8.50839C14.4428 9.6357 14.1406 10.7423 13.5686 11.7145Z"
                fill="currentColor"
            />
        </svg>
    );
};
export const IconSigout = () => {
    return (
        <svg
            width={16}
            height={15}
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.36102 8.98109L2.72159 8.32742L6.39032 8.32742C6.6023 8.32742 6.8056 8.24025 6.9555 8.08508C7.1054 7.9299 7.18961 7.71945 7.18961 7.5C7.18961 7.28055 7.1054 7.0701 6.9555 6.91492C6.8056 6.75975 6.6023 6.67258 6.39032 6.67258L2.72159 6.67258L3.36102 6.01891C3.43593 5.94199 3.4954 5.85048 3.53597 5.74965C3.57655 5.64882 3.59744 5.54067 3.59744 5.43144C3.59744 5.32221 3.57655 5.21406 3.53597 5.11324C3.4954 5.01241 3.43593 4.92089 3.36102 4.84397C3.28671 4.76642 3.19831 4.70486 3.10091 4.66286C3.00351 4.62085 2.89904 4.59922 2.79352 4.59922C2.68801 4.59922 2.58354 4.62085 2.48613 4.66286C2.38873 4.70486 2.30033 4.76642 2.22603 4.84397L0.227808 6.91253C0.15504 6.99122 0.0979987 7.08401 0.0599571 7.18558C-0.0199861 7.38702 -0.0199861 7.61298 0.0599571 7.81442C0.0979987 7.91599 0.15504 8.00878 0.227808 8.08747L2.22603 10.156C2.37654 10.3118 2.58067 10.3994 2.79352 10.3994C3.00637 10.3994 3.21051 10.3118 3.36102 10.156C3.51153 10.0002 3.59608 9.7889 3.59608 9.56856C3.59608 9.34821 3.51153 9.13689 3.36102 8.98109ZM4.44006 2.53546C4.36448 2.6137 4.30453 2.70658 4.26363 2.80879C4.22273 2.91101 4.20168 3.02057 4.20168 3.13121C4.20168 3.24185 4.22273 3.3514 4.26363 3.45362C4.30453 3.55584 4.36448 3.64872 4.44006 3.72695C4.51563 3.80519 4.60535 3.86724 4.70409 3.90958C4.80283 3.95192 4.90866 3.97372 5.01554 3.97372C5.12242 3.97372 5.22825 3.95192 5.32699 3.90958C5.42574 3.86724 5.51546 3.80519 5.59103 3.72695C6.31195 2.98038 7.23055 2.4719 8.23066 2.26581C9.23076 2.05973 10.2674 2.1653 11.2096 2.56918C12.1517 2.97306 12.957 3.6571 13.5236 4.53479C14.0901 5.41247 14.3925 6.44438 14.3925 7.5C14.3925 8.55562 14.0901 9.58753 13.5236 10.4652C12.957 11.3429 12.1517 12.0269 11.2096 12.4308C10.2674 12.8347 9.23076 12.9403 8.23066 12.7342C7.23055 12.5281 6.31195 12.0196 5.59103 11.273C5.51546 11.1948 5.42574 11.1328 5.327 11.0904C5.22825 11.0481 5.12242 11.0263 5.01554 11.0263C4.90867 11.0263 4.80283 11.0481 4.70409 11.0904C4.60535 11.1328 4.51563 11.1948 4.44006 11.273C4.36448 11.3513 4.30453 11.4442 4.26363 11.5464C4.22273 11.6486 4.20168 11.7582 4.20168 11.8688C4.20168 11.9794 4.22273 12.089 4.26363 12.1912C4.30453 12.2934 4.36448 12.3863 4.44006 12.4645C5.38734 13.4393 6.59227 14.1018 7.90286 14.3685C9.21344 14.6352 10.571 14.4942 11.8042 13.9631C13.0374 13.4321 14.0911 12.5349 14.8324 11.3846C15.5736 10.2344 15.9691 8.88268 15.9691 7.5C15.9691 6.11731 15.5736 4.7656 14.8324 3.61536C14.0911 2.46513 13.0374 1.5679 11.8042 1.03686C10.571 0.505822 9.21344 0.364755 7.90286 0.631459C6.59227 0.898163 5.38734 1.56069 4.44006 2.53546Z"
                fill="currentColor"
            />
        </svg>
    );
};
export const IconArrowDown = () => {
    return (
        <svg
            className="ml-auto mr-10"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.4853 6.79999L8.24264 11.0426L4 6.79999"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
};
