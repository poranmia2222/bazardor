"use client";

import { FaAngleDown } from "react-icons/fa";

type SortType = "low" | "high";

interface Props {
    handleSort: (sort: SortType) => void;
}

const SortDropdown = ({ handleSort }: Props) => {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1"> ডিফল্ট<FaAngleDown /></div>
            <ul tabIndex={-1}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                    <button onClick={() => handleSort("low")}>দাম: কম থেকে বেশি </button>
                </li>

                <li>
                    <button onClick={() => handleSort("high")}>দাম: বেশি থেকে কম</button>
                </li>
            </ul>

        </div>
    );
};

export default SortDropdown;