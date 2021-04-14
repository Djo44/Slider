import React, { useState, useEffect } from "react";
import useInterval from "react-useinterval";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

const Slide = () => {
  const [index, setIndex] = useState(0);
  const { id, name, title, image, quote } = data[index];

  const prevPerson = () => {
    if (index <= 0) {
      setIndex(index - 1);
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextPerson = () => {
    setIndex(index + 1);
    if (index === data.length - 1) {
      setIndex(0);
    }
    console.log(index);
  };

  useInterval(() => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 2500);

  return (
    <div className='section-center'>
      <article className=''>
        <img src={image} alt='' className='person-img' />
        <h4>{name}</h4>
        <p className='title'>{title}</p>
        <p className='text'>{quote}</p>
        <FaQuoteRight className='icon' />
        <button className='prev' type='button' onClick={() => prevPerson()}>
          <FiChevronLeft />
        </button>
        <button className='next' type='button' onClick={() => nextPerson()}>
          <FiChevronRight />
        </button>
      </article>
    </div>
  );
};

export default Slide;
