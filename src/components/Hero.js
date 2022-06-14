import React from 'react';
import { Link } from 'react-router-dom';
import invoice from '../images/invoice.svg';

const Hero = () => {
  return (
    <div className="md:min-h-[90vh] w-full md:px-8 px-2 py-[80px] flex lg:flex-row items-center justify-center flex-col">
      <div
        className="pl-3 my-4 lg:mb-1 lg:text-left pr-6 mb-10"
        style={{ flex: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">
          Deran's Invoice Builder
        </h2>
        <p className="opacity-70 mb-4 text-sm md:text-base leading-loose">
          Lorem ipsum dolor sit amet, coharetra non. Aenean sit amet nibh dapibus, elementum felis ac, eleifend urna. Sed sit amet enim et arcu auctor posuere. Maecenas molestie, arcu nec semper venenatis, nibh massa maximus est, eget facilisis nisi odio sit amet turpis. Nam semper lorem vitae eros consectetur porta. Nunc id enim ac odio elementum condimentum. Mauris ut venenatis ligula, nec dignissim leo. Phasellus feugiat eros enim, id luctus erat semper nec. Aliquam at lectus nec felis blandit euismod.
         </p>

        <Link to="/login">
          <button className="rounded w-[200px] px-2 py-3 bg-blue-500 text-gray-50">
            LOG IN
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-center" style={{ flex: 0.4 }}>
        <img src={invoice} alt="Print invoices" className="w-2/3 lg:w-full" />
      </div>
    </div>
  );
};

export default Hero;