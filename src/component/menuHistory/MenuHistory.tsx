const colors = ["#ffff", "#000"];

const MenuHistory = () => {
    return (
        <div className="w-1xl grid grid-cols-1">
            <div className="grid grid-cols-2 place-content-between fit-content">
                <ul className="grid col-span-1">
                    Áo
                    <div className="pl-3 h-min">
                        <li>Tất cả áo</li>
                        <li>Áo thun</li>
                        <li>Áo polo</li>
                        <li></li>
                        <li></li>
                    </div>
                </ul>
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
            </div>
        </div>
    );
};
export default MenuHistory;
