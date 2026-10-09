import React from "react";
import type { MarketType } from "./ProductDetails";

interface PropsType {
  market: MarketType[];
}

const BazarPriceTable = ({ market }: PropsType) => {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white p-3">
      
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-gray-500">
            <th className="px-3 py-4 font-semibold">বাজার</th>
            <th className="px-3 py-4 font-semibold">বিভাগ</th>
            <th className="px-3 py-4 text-right font-semibold">
              সর্বনিম্ন
            </th>
            <th className="px-3 py-4 text-right font-semibold">
              সর্বোচ্চ
            </th>
            <th className="px-3 py-4 text-right font-semibold">
              গড়
            </th>
          </tr>
        </thead>

        <tbody>
          {market.map((item, index) => {
            const average = (item.min + item.max) / 2;

            return (
              <tr
                key={`${item.market}-${item.division}-${index}`}
                className="border-b border-gray-300 transition-colors even:bg-[#F0F5F0] hover:bg-green-50"
              >
                <td className="px-3 py-3 font-medium text-gray-800">
                  {item.market}
                </td>

                <td className="px-3 py-3 text-gray-700">
                  {item.division}
                </td>

                <td className="px-3 py-3 text-right text-gray-700">
                  {item.min} টাকা
                </td>

                <td className="px-3 py-3 text-right text-gray-700">
                  {item.max} টাকা
                </td>

                <td className="px-3 py-3 text-right font-bold text-gray-800">
                  {average.toFixed(2)} টাকা
                </td>
              </tr>
            );
          })}

          {market.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="px-3 py-8 text-center text-gray-500"
              >
                কোনো বাজারের তথ্য পাওয়া যায়নি।
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BazarPriceTable;
