import React, { useEffect, useState } from "react";
import Switcher from "../../components/Swicher";
import AutoSlider from "../../components/AutoSlider/AutoSlider";
import { useTranslation } from "react-i18next";
import test from "/src/assets/img/test1.webp"

import SoftClubButton from "../../components/softClubButton/softClubButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import softclub from "/src/assets/img/softclub.svg"

const Result = () => {


  const navigate = useNavigate()
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");

  const { t, i18n } = useTranslation();

  const changeLanguage = async (language) => {
    setLang(language);
    await i18n.changeLanguage(language);
  };

  const count = useSelector((state) => state.Home.count);
  const testLenght = useSelector((state) => state.Home.testLenght);
  const [translateArray , setTranslateArray] = useState([
    {
      title:"resul",
      question:
      {
        en:"Result of Test",
        ru:"Резултаты тесты",
        tj:"Натичаи чавобхо"
      }
    },
    {
      title:"Тест по Математики",
      question:
      {
        en:"Repeat",
        ru:"Повторить",
        tj:"Аз нав"
      }
    }
  ])

  return (
    <main className="min-h-screen w-[100%] flex justify-center items-center dark:bg-[#0f172a]">
      <div className="flex flex-col gap-6 //2xl:w-[35%] //xl:w-[45%] //lg:w-[50%] //md:max-w-[60%] //lg:max-w-[60%] //sm:w-[70%] w-[85%] lg:w-[70%] m-[40px_auto]">
        <div className=" flex items-center gap-4  justify-between">
          <Switcher />

          <select
          value={lang}
            className=" h-10 rounded-md border-2 border-black //dark:text-black bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value={"en"} className="bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">
              En
            </option>
            <option value={"ru"} className="bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">
              Ru
            </option>
            <option value={"tj"} className="bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">
              Tj
            </option>
          </select>
        </div>

        <div
          className=" dark:bg-gradient-to-br from-[rgb(20_30_48)] from-[11%] to-[rgb(36_59_85)] to-[91.1%]      dark:bg-white/10 dark:text-[white] p-[20px] w-[100%] m-[0_auto] //:w-[35%] //xl:w-[50%] //md:max-w-[70%] //lg:max-w-[60%] //w-[95%] shadow-[0px_10px_28px_0px_#1118271F] rounded-lg flex flex-col sm:flex-row justify-between items-center gap-[30px] "
        >
          <img src={test} alt="icon" className="w-[100%] m-[0_auto] sm:w-[50%]" />

          <div className="flex flex-col gap-5 w-[100%] sm:w-[50%]">
            <h1 className="text-[25px] sm:text-[30px] xl:text-[40px] font-bold text-center tracking-[1px] py-[5px] text-gray-800 dark:text-white">
              {
                translateArray[0].question[i18n.language]
              }
            </h1>
            <div className="dark:bg-[#0f172a] dark:text-[white] rounded-md p-[20px] flex shadow-inner xl:w-[60%] md:w-[70%] w-[100%] m-auto shadow-green flex-col gap-3 justify-center bg-[#88cf9d7c]">
              <h1 className="text-[#16A34A] dark:text-[white] text-[32px] text-center font-bold tracking-[2px]">
                {count}/{testLenght}
              </h1>
            </div>
            <div className="w-[100%] md:w-[70%] xl:w-[60%]  m-auto flex justify-between items-center">
              <button className="p-[10px_40px] tracking-[1px] rounded-md bg-blue-500 text-white text-[20px] w-[100%]" onClick={() => navigate("/")}>{translateArray[1].question[i18n.language]}</button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Result;
