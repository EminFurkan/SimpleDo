import React from 'react';
import moment from 'moment';
import { FaCalendarDay, FaCalendarWeek } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';
import { AiOutlineStop } from 'react-icons/ai';

export const SelectDate = ({ setDate, displayDateMenu, setDisplayDateMenu }) =>
  displayDateMenu && (
    <div className="add-task__select-date">
      <ul className="select-date__list">
        <li
          onClick={() => {
            setDisplayDateMenu(false);
            setDate(moment().format('DD/MM/YYYY'));
          }}
        >
          <FaCalendarDay />
          <span>Today</span>
        </li>
        <li
          onClick={() => {
            setDisplayDateMenu(false);
            setDate(moment().add(1, 'days').format('DD/MM/YYYY'));
          }}
        >
          <IoMdSunny />
          <span>Tomorrow</span>
        </li>
        <li
          onClick={() => {
            setDisplayDateMenu(false);
            setDate(moment().add(7, 'days').format('DD/MM/YYYY'));
          }}
        >
          <FaCalendarWeek />
          <span>Next week</span>
        </li>
        <li
          onClick={() => {
            setDisplayDateMenu(false);
          }}
        >
          <AiOutlineStop />
          <span>No Date</span>
        </li>
      </ul>
    </div>
  );
