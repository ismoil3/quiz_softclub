import React, { useEffect, useState } from "react";


import { Link, useNavigate, useNavigation } from "react-router-dom";
import Switcher from "../../components/Swicher";
import SoftClubIcon from "/src/assets/img/softclub.svg";
import sc3dicon from "/src/assets/img/sc3dicon.svg";
import test from "/src/assets/img/testicon.webp"
import { useTranslation } from "react-i18next";

const Login = ({ marginTop }) => {

  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");


  const { t, i18n } = useTranslation();

  console.log(i18n);

  const changeLanguage = async (language) => {
    setLang(language);
    await i18n.changeLanguage(language);
  };


  const isDarkMode = localStorage.getItem("theme");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const passNumberToInput = (e) =>
  {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) { // This regex allows only numbers
      setPhoneNumber(newValue);
    }
  }

  function login() {
    if(phoneNumber.length == 9 && name.length >= 1)
    {
      localStorage.setItem("Name", name), localStorage.setItem("PhoneNumber", phoneNumber);
      if(localStorage.getItem("Name") && localStorage.getItem("PhoneNumber"))
      {
        navigate("/home");
      }
    }
  }

    const [translateArray , setTranslateArray] = useState(
      [
        {
          title:"Sign up",
          question:
          {
            en:"Sign up",
            ru:"Регистратция",
            tj:"Номнавис кардан"
          }
        },
        {
          title:"Name",
          question:
          {
            en:"Name",
            ru:"Имя",
            tj:"Ном"
          }
        },
        {
          title:"Welcome to",
          question:
          {
            en:"Welcome to",
            ru:"Добро пожаловать в",
            tj:"Хуш омадед ба"
          }
        },
        {
          title:"Phone",
          question:
          {
            en:"Phone",
            ru:"Телефон",
            tj:"Телефон"
          }
        }
      ]
    )

  return (
    <main className="min-h-screen flex  justify-start dark:bg-[#091221] dark:text-[white] flex-col gap-[20px] xl:flex-row xl:items-start xl:py-[16px] xl:justify-center w-[100%] xl:gap-[50px]">


      <div className="flex flex-col gap-5 w-[100%] xl:w-[35%] xl:min-h-[70vh]">
        <div className="flex justify-between items-center p-[10px_30px] w-[100%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[100%] xl:p-[0_40px] md:p-0 m-[0_auto]">
          <img src={SoftClubIcon} alt="" className="w-[30%]" />
          
          <div className="flex items-center gap-4">
            <Switcher/>
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
        
          
        </div>
        <form
          onSubmit={login}
          className=" w-[90%] p-[20px] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[100%] bg-white m-auto shadow-[0px_10px_28px_0px_#1118271F] rounded-lg flex flex-col gap-[30px] dark:bg-white/10"
        >
          <p className="lg:text-[30px] font-bold text-[20px] tracking-[1px] text-[#2196f3]">{translateArray[0].question[i18n.language]}</p>

          <input type="text" className="w-[100%] dark:bg-transparent dark:border-white dark:text-white p-[5px_10px] text-[20px] rounded-md outline-none border-[2px] border-gray-300" placeholder={translateArray[1].question[i18n.language]} value={name} onChange={(e) => setName(e.target.value)} />
          
          <div className="flex gap-2 items-center rounded-md border-[2px] border-gray-300 dark:bg-transparent dark:border-white dark:text-white p-[5px_10px]">
            <p className="text-[20px] text-gray-400">+992</p>
            <input maxLength={9} minLength={9} type="text" className="w-[100%]  text-[20px] outline-none bg-transparent" placeholder={translateArray[3].question[i18n.language]} value={phoneNumber} onChange={passNumberToInput} />
          </div>
          {/* <TextField
            className={`w-[100%] ${isDarkMode ? "dark:text-[white]" : ""}`}
            InputProps={{
              className: `${isDarkMode ? "dark:text-[white]" : ""}`, // For internal input text color
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Ф.И.О"
            variant="outlined"
          />
          <TextField
            className={`w-[100%] ${isDarkMode ? "dark:text-[white]" : ""}`}
            InputProps={{
              className: `${isDarkMode ? "dark:text-[white]" : ""}`, // For internal input text color
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            type="email"
          /> */}

          {/* <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-[18px] h-[18px]" />
              <p className="text-[20px]">Запомнить меня?</p>
            </div>
          </div> */}

          <button
            type="submit"
            className=" shadowButton w-[100%] h-[7svh] rounded-md bg-[#2196F3] text-[20px] text-white tracking-[1px]"
          >
            {translateArray[0].question[i18n.language]}
          </button>
        </form>
      </div>

      <div className="flex flex-col w-[90%] bg-white dark:bg-white/10 p-[50px] rounded-xl gap-6 xl:w-[40%] xl:min-h-[90svh] xl:m-0 m-[40px_auto]">
        <p className="text-[30px]  font-bold tracking-[1px] xl:text-[40px]">
        {translateArray[2].question[i18n.language]}
        </p>
        <p className="text-[40px] font-bold xl:text-[70px] text-[#2196f3] tracking-[1px] leading-[50px]">
          SoftClub
        </p>
        <div className=" flex items-center justify-center xl:min-h-[60svh]">
          <img src={test} alt="icon" className="" />
        </div>
      </div>

    </main>
  );
};

export default Login;
