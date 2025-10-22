"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// IMG
import q1 from "/src/assets/img/q1.png";
import q2 from "/src/assets/img/q2.png";
import q3 from "/src/assets/img/q3.png";
import q6 from "/src/assets/img/q6.png";
import q8 from "/src/assets/img/q8.png";
import q10 from "/src/assets/img/q10.png";
import q14 from "/src/assets/img/q14.png";
import q15 from "/src/assets/img/q15.png";
import q16 from "/src/assets/img/q16.png";
import softclub from "/src/assets/img/softclub.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";
import Switcher from "../../components/Swicher";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setTestLenght } from "../../reducer/home";
import { useNavigate } from "react-router-dom";
import AutoSlider from "../../components/AutoSlider/AutoSlider";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logicCnt, setLogicCnt] = useState(0);
  const [mathCnt, setMathCnt] = useState(0);
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");

  const [submitingModal, setSubmitingModal] = useState(false);
  const [text, setText] = useState("");

  const swiperRef = useRef(null);
  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const [swiperSlideLength, setSwiperSlideLength] = useState(0);
  const [swiperMap, setSwiperMap] = useState(null);

  useEffect(() => {
    const fetchSlideLength = async () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const swiperInstance = swiperRef.current.swiper;
        const numberOfSlides = swiperInstance.slides.length;
        setSwiperSlideLength(numberOfSlides);
      }
    };

    fetchSlideLength();
  }, [swiperRef?.current?.swiper?.slides]);

  useEffect(() => {
    console.log(swiperSlideLength);
    const array = [];
    for (let i = 0; i < swiperSlideLength; i++) {
      array.push(i);
    }
    setSwiperMap(array);
    console.log(swiperMap);
  }, [swiperSlideLength]);

  function goToSlide(num) {
    if (swiperRef?.current) {
      swiperRef?.current?.swiper?.slideTo(num);
    }
  }

  const { t, i18n } = useTranslation();

  console.log(i18n);

  const changeLanguage = async (language) => {
    setLang(language);
    await i18n.changeLanguage(language);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const [test, setTest] = useState([
    [
      {
        id: 1,
        type: "select",
        question: {
          en: "There are N apples in three baskets. How many apples are in each basket if the first basket has twice as many apples as the second, and the second basket has 2 more apples than the third?",
          ru: "В трёх корзинах N яблок. Сколько яблок в каждой корзине, если в первой корзине яблок в 2 раза больше, чем во второй, а во второй на 2 яблока больше, чем в третьей?",
          tj: "Дар се сабад N себ ҳаст. Дар ҳар як сабад чанд себ мавҷуд аст, агар дар сабади якум назар ба сабади дуюм 2 маротиба зиёд ва дар дуюм аз сеюм 2 дона зиёд бошад?",
        },
        a1: { correct: false, variant: "3: (N-5)/4, 2: (N+3)/4 , 1: (N+1)/2" },
        a2: { correct: true, variant: " 3: (N-6)/4, 2: (N+2)/4 , 1: (N+2)/2" },
        a3: { correct: false, variant: "3: (N-6)/4, 2: (N+3)/4 , 1: (N+4)/2" },
      },
      {
        id: 19,
        type: "select",
        question: {
          en: "Two people are sawing a log. It takes them 8 minutes to saw through the entire log from start to finish. How much time will they need to saw the log into 8 equal parts?",
          ru: "Два человека заняты распиливанием бревна. Чтобы распилить бревно от начала до конца, им требуется 8 минут. Сколько времени им потребуется, чтобы распилить бревно на 8 равных частей?",
          tj: "Ду нафар ба буридани чуб машғуланд. Барои аз тор ба таг буридани чуб ба онҳо 8 дақиқа лозим аст. Барои ба 8 қисми баробар буридани чуб ба онҳо чӣ қадар вақт лозим аст?",
        },
        a1: { correct: true, variant: "56" },
        a2: { correct: false, variant: "45" },
        a3: { correct: false, variant: "60" },
        a4: { correct: false, variant: "55" },
      },
      {
        id: 20,
        type: "select",
        question: {
          en: "Nodir picked 28 flowers. Aziz picked 4 times fewer flowers. How many flowers did Aziz pick?",
          ru: "Длина ребра куба равна 7 см. Найдите объём куба и площадь его поверхности.",
          tj: "Дарозии канори куб ба 7 см баробар аст. Ҳаҷми куб ва масоҳати сатҳи онро ёбед.",
        },
        img: q6,
        a1: { correct: false, variant: " V = 340 см^3 ,   S = 294 см^2" },
        a2: { correct: false, variant: " V = 353 см^3 ,   S = 281 см^2" },
        a3: { correct: true, variant: " V = 343 см^3 ,   S = 294 см^2" },
        a4: { correct: false, variant: " V = 323 см^3 ,   S = 283 см^2" },
      },
      {
        id: 29,
        type: "input",
        question: {
          en: "Calculate.",
          ru: "Вычислите.",
          tj: "Ҳисоб кунед",
        },
        img: q8,
        a1: { correct: true, variant: "7" },
        a2: { correct: false, variant: "45" },
        a3: { correct: false, variant: "12" },
        a4: { correct: false, variant: "16" },
      },
      {
        id: 30,
        type: "input",
        question: {
          en: "Find the difference between the smallest three-digit number and the largest two-digit number.",
          ru: "Найдите разность наименьшего трёхзначного числа и наибольшего двузначного числа.",
          tj: "Фарқи адади хурдтарини серақама ва адади калонтарини дурақамаро ёбед.",
        },
        a1: { correct: true, variant: "1" },
        a2: { correct: false, variant: "45" },
        a3: { correct: false, variant: "12" },
        a4: { correct: false, variant: "16" },
      },
      {
        id: 31,
        type: "input",
        question: {
          en: "Calculate.",
          ru: "Вычислите.",
          tj: "Ҳисоб кунед",
        },
        img: q10,
        a1: { correct: true, variant: "21" },
        a2: { correct: false, variant: "45" },
        a3: { correct: false, variant: "12" },
        a4: { correct: false, variant: "16" },
      },
      {
        id: 3322,
        type: "select",
        question: {
          en: "Calculate.",
          ru: "Вычислите.",
          tj: "Ҳисоб кунед",
        },
        img: q14,
        a1: { correct: false, variant: "infinity" },
        a2: { correct: false, variant: "Error" },
        a3: { correct: true, variant: "No output" },
        a4: { correct: false, variant: "8,9,10" },
      },
      {
        id: 3323,
        type: "select",
        question: {
          en: "Calculate.",
          ru: "Вычислите.",
          tj: "Ҳисоб кунед",
        },
        img: q15,
        a1: { correct: false, variant: "###5#7###11#13#" },
        a2: { correct: true, variant: "###5#7###11#13##" },
        a3: { correct: false, variant: "##5#7####11#13##" },
        a4: { correct: false, variant: "###5#7###11#13###" },
      },
      {
        id: 3324,
        type: "select",
        question: {
          en: "Calculate.",
          ru: "Вычислите.",
          tj: "Ҳисоб кунед",
        },
        img: q16,
        a1: {
          correct: true,
          variant: "Odd Even Odd Even Odd Even Odd Even Odd",
        },
        a2: {
          correct: false,
          variant: "Odd Even Odd Even Odd Even Odd Even Odd Even",
        },
        a3: {
          correct: false,
          variant: "Odd Even Odd Even Odd Even  Even Odd Odd",
        },
        a4: { correct: false, variant: "Odd Even Odd Even" },
      },
    ],
    [
      {
        id: 16,
        type: "image",
        question: {
          en: "Calculate.",
          ru: "Вычислите.",
          tj: "Ҳисоб кунед",
        },
        img: q1,
        a1: { correct: true, variant: "33" },
        a2: { correct: false, variant: "45" },
        a3: { correct: false, variant: "12" },
        a4: { correct: false, variant: "16" },
      },
      {
        id: 17,
        type: "image",
        question: {
          en: "Calculate.",
          ru: "Вычислите.",
          tj: "Ҳисоб кунед",
        },
        img: q2,
        a1: { correct: true, variant: "19" },
        a2: { correct: false, variant: "45" },
        a3: { correct: false, variant: "12" },
        a4: { correct: false, variant: "16" },
      },
      {
        id: 18,
        type: "image",
        question: {
          en: "Calculate.",
          ru: "Вычислите.",
          tj: "Ҳисоб кунед",
        },
        img: q3,
        a1: { correct: true, variant: "310" },
        a2: { correct: false, variant: "45" },
        a3: { correct: false, variant: "12" },
        a4: { correct: false, variant: "16" },
      },
      {
        id: 19,
        type: "input",
        question: {
          en: "What percentage is the number 20 of the number 180?",
          ru: "какой процент составляет число 20 от числа 180.",
          tj: "20 чанд фоизи адади 180 аст?",
        },
        a1: { correct: true, variant: "11.11" },
        a2: { correct: false, variant: "45" },
        a3: { correct: false, variant: "12" },
        a4: { correct: false, variant: "16" },
      },
      {
        id: 1239,
        type: "input",
        question: {
          en: "If the dividend is zero and the divisor is any nonzero number, what will the quotient (the result of the division) be?",
          ru: "Если делимое равно нулю, а делитель — любое ненулевое число, чему будет равно частное (результат деления)?",
          tj: "Агар тақсимшаванда ба сифр баробар бошад ва тақсимкунанда адади ғайрисифрӣ бошад, ҳосили тақсим ба чанд баробар мешавад?",
        },
        a1: { correct: true, variant: "0" },
        a2: { correct: false, variant: "45" },
        a3: { correct: false, variant: "12" },
        a4: { correct: false, variant: "16" },
      },
      {
        id: 32,
        type: "select",
        question: {
          en: "Calculate. 800 cm = ... dm",
          ru: "Вычислите. 800 см = ... дм",
          tj: "Ҳисоб кунед. 800 см = ... дм",
        },
        a1: { correct: true, variant: "80" },
        a2: { correct: false, variant: "8" },
        a3: { correct: false, variant: "4" },
        a4: { correct: false, variant: "3" },
      },
      {
        id: 323,
        type: "input",
        question: {
          en: "Find the next number in the series: 1,  1,  2,  3,  5,  8,  13, ?",
          ru: "Найдите следующее число в ряду: 1,  1,  2,  3,  5,  8,  13, ?",
          tj: "Дар қатори зерин адади навбатиро ёбед: 1,  1,  2,  3,  5,  8,  13, ?",
        },
        a1: { correct: true, variant: "21" },
        a2: { correct: false, variant: "8" },
        a3: { correct: false, variant: "4" },
        a4: { correct: false, variant: "3" },
      },
    ],
  ]);

  useEffect(() => {
    dispatch(setTestLenght(test[0].length + test[1].length));
  }, [dispatch, test]);

  const letters = ["A", "B", "C", "D"];

  const [mathRandomTest, setMathRandomTest] = useState(null);
  const [logicRandomTest, setLogicRandomTest] = useState(null);

  useEffect(() => {
    const randomMath = () => {
      return test[0];
    };
    setMathRandomTest(randomMath);
    console.log(randomMath);
    const randomLogic = () => {
      return test[1];
    };
    setLogicRandomTest(randomLogic);
    console.log(randomLogic);
  }, [test]);

  const token = "8132985338:AAFA-ylibwpoxkME3Jva4--Dxbqr_xWmJQ8";
  const chatId = "-4621720589";

  const sendMessage = async () => {
    try {
      const { data } = await axios.post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`,
        {
          chat_id: chatId,
          text: message,
        }
      );
      navigate("/result");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    sendMessage();
  };

  const [testObj, setTestObj] = useState([]);
  const [idArray, setIdArray] = useState([]);
  const [sumOfResult, setSumOfResult] = useState(1);

  function checkCorrectAnswer(id, isCorrect) {
    if (!idArray.includes(id)) {
      setIdArray((prevState) => [...prevState, id]);
      setTestObj((prevState) => [...prevState, { [id]: isCorrect }]);
    } else {
      console.log(id, isCorrect);
      setTestObj((prevState) => {
        const index = idArray.indexOf(id);
        const updatedTestObj = [...prevState];
        updatedTestObj[index] = { [id]: isCorrect };
        return updatedTestObj;
      });
    }
  }

  function checkCorrectText(textAnswer, id) {
    setText(textAnswer);
    // Check in both test arrays
    const allQuestions = [...test[0], ...test[1]];
    const question = allQuestions.find(
      (el) => el.id === id && el.a1.variant === textAnswer
    );
    if (question) {
      checkCorrectAnswer(id, true);
    } else {
      checkCorrectAnswer(id, false);
    }
  }

  const count = useSelector((state) => state.Home.count);

  useEffect(() => {
    console.log(testObj);
    let count = 0;
    testObj.forEach((el) => {
      const values = Object.values(el).at(0);
      if (values) {
        count += 1;
      }
    });
    dispatch(setCount(count));
    setSumOfResult(Math.round(count * 3.225));
    console.log(`True Count: ${count}, Sum of Result: ${count * 3.225}`);
  }, [testObj, dispatch]);

  const Name = localStorage.getItem("Name");
  const PhoneNumber = localStorage.getItem("PhoneNumber");

  const message = `Name: ${Name} %0APhone Number: ${PhoneNumber} %0ATotal: ${Math.round(
    ((logicCnt + (count - logicCnt)) / (test[0].length + test[1].length)) * 100
  )} % ;`;

  const MathAdv = {
    type: "adv",
    question: {
      en: "Questions",
      ru: "Задачы",
      tj: "Саволхо",
    },
  };

  const Finish = {
    type: "adv",
    question: {
      en: "Finish",
      ru: "Заканчивать",
      tj: "Завершить",
    },
  };
  const [translateArray, setTranslateArray] = useState([
    {
      question: {
        en: "Write the answer here , Please .",
        ru: "Напишите ответ здесь , Пожалуйста.",
        tj: "Чавобро дар инчо нависед.",
      },
    },
    {
      question: {
        en: "Yes",
        ru: "Да",
        tj: "Бале",
      },
    },
    {
      question: {
        en: "No",
        ru: "Нет",
        tj: "Не",
      },
    },
    {
      question: {
        en: "Send Test ?",
        ru: "Отправить тест ?",
        tj: "Ба санчиш равон кардан ?",
      },
    },
  ]);

  useEffect(() => {
    // Initialize the count to 0
    let count = 0;

    // Iterate over testObj
    testObj?.forEach((el) => {
      if (Object.values(el)[0]) {
        test[1].find((elem) => {
          // Check if the element id matches the key in the object
          if (elem.id == Object.keys(el)[0]) {
            count++;
          }
        });
      }
    });

    setLogicCnt(count);
  }, [testObj, test]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNextSlide();
      } else if (e.key === "ArrowLeft") {
        handlePrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [isActiveSlide, setIsActiveSlide] = useState(0);
  function changeActiveSlide() {
    setIsActiveSlide(swiperRef.current.swiper.activeIndex);
    console.log(isActiveSlide);
  }

  return (
    <main className="dark:bg-[#091221] p-[20px] flex flex-col min-h-screen">
      <nav className=" bg-[#eee] dark:bg-[#091221] fixed gap-[20px] top-0 right-0 w-[100%] z-[1000] p-[10px] sm:p-[15px_6%] lg:p-[10px_12%] ph:p-[0px_50px] flex justify-between sm:flex-nowrap  ph:flex-wrap ph:pt-[10px]">
        <img
          src={softclub || "/placeholder.svg"}
          alt="icon"
          className="w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px] xl:w-[150px]"
        />

        <div className="sm:flex gap-2 items-center overflow-x-scroll ph:hidden">
          <button
            style={{
              color:
                swiperRef?.current?.swiper?.activeIndex == 0
                  ? "gray"
                  : "#336699",
              border:
                swiperRef?.current?.swiper?.activeIndex == 0
                  ? "5px solid gray"
                  : " 5px solid #336699",
            }}
            className=" max-w-[40px] min-w-[40px] h-[40px] border-[#858282] bg-white text-black rounded-md border-[5px] dark:border-[white] dark:bg-transparent dark:text-white"
            onClick={() => handlePrevSlide()}
          >
            <KeyboardArrowLeftIcon />
          </button>

          <div className="sm:flex gap-2 items-center overflow-x-scroll ph:hidden">
            {swiperMap &&
              swiperMap.map((el, i) => {
                return (
                  <button
                    key={i}
                    style={{
                      border:
                        isActiveSlide == i
                          ? "5px solid #336699"
                          : "5px solid gray",
                    }}
                    className=" max-w-[40px] min-w-[40px] h-[40px] border-[#858282] bg-white text-black rounded-md border-[5px] dark:border-[white] dark:bg-transparent dark:text-white"
                    onClick={() => goToSlide(i)}
                  >
                    {i + 1}
                  </button>
                );
              })}
          </div>

          <button
            style={{
              color:
                swiperRef?.current?.swiper?.activeIndex ==
                swiperMap?.indexOf(swiperMap?.at(-1))
                  ? "gray"
                  : "#336699",
              border:
                swiperRef?.current?.swiper?.activeIndex ==
                swiperMap?.indexOf(swiperMap?.at(-1))
                  ? "5px solid gray"
                  : " 5px solid #336699",
            }}
            className=" max-w-[40px] min-w-[40px] h-[40px] border-[#858282] bg-white text-black rounded-md border-[5px] dark:border-[white] dark:bg-transparent dark:text-white"
            onClick={() => handleNextSlide()}
          >
            <ChevronRightIcon />
          </button>
        </div>

        <div className="flex items-center gap-4 ph:gap-2">
          <Switcher />
          <select
            value={lang}
            className=" z-40 h-10 rounded-md border-2 border-black bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option
              value={"en"}
              className="bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              En
            </option>
            <option
              value={"ru"}
              className="bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              Ru
            </option>
            <option
              value={"tj"}
              className="bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              Tj
            </option>
          </select>
        </div>

        <div className="sm:hidden gap-2 items-center overflow-x-scroll ph:flex">
          <button
            style={{
              color:
                swiperRef?.current?.swiper?.activeIndex == 0
                  ? "gray"
                  : "#336699",
              border:
                swiperRef?.current?.swiper?.activeIndex == 0
                  ? "5px solid gray"
                  : " 5px solid #336699",
            }}
            className=" max-w-[40px] min-w-[40px] h-[40px] border-[#858282] bg-white text-black rounded-md border-[5px] dark:border-[white] dark:bg-transparent dark:text-white"
            onClick={() => handlePrevSlide()}
          >
            <KeyboardArrowLeftIcon />
          </button>

          <div className="sm:hidden gap-2 items-center overflow-x-scroll ph:flex">
            {swiperMap &&
              swiperMap.map((el, i) => {
                return (
                  <button
                    key={i}
                    style={{
                      border:
                        isActiveSlide == i
                          ? "5px solid #336699"
                          : "5px solid gray",
                    }}
                    className=" max-w-[40px] min-w-[40px] h-[40px] border-[#858282] bg-white text-black rounded-md border-[5px] dark:border-[white] dark:bg-transparent dark:text-white"
                    onClick={() => goToSlide(i)}
                  >
                    {i + 1}
                  </button>
                );
              })}
          </div>

          <button
            style={{
              color:
                swiperRef?.current?.swiper?.activeIndex ==
                swiperMap?.indexOf(swiperMap?.at(-1))
                  ? "gray"
                  : "#336699",
              border:
                swiperRef?.current?.swiper?.activeIndex ==
                swiperMap?.indexOf(swiperMap?.at(-1))
                  ? "5px solid gray"
                  : " 5px solid #336699",
            }}
            className=" max-w-[40px] min-w-[40px] h-[40px] border-[#858282] bg-white text-black rounded-md border-[5px] dark:border-[white] dark:bg-transparent dark:text-white"
            onClick={() => handleNextSlide()}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </nav>

      <div className="w-[100%] pt-[60px] ph:pt-[136px] sm:pt-[76px] md:pt-[90px] relative">
        <div className="w-[100%] m-[0_10px] lg:max-w-[80%]  lg:m-[0_auto] ">
          <Swiper
            onActiveIndexChange={changeActiveSlide}
            ref={swiperRef}
            className="mySwiper"
            keyboard={{ enabled: true }}
          >
            <SwiperSlide className="p-[20px] text-[#333d79ff]">
              <div className="rounded-[20px] dark:bg-white/10 dark:text-[#eee] p-[20px] w-[100vw] bg-white relative min-h-[59svh] lg:min-h-[70svh] flex justify-center items-center ">
                <p className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[80px] 2xl:text-[100px] font-bold tracking-[1px]">
                  {MathAdv.question[i18n.language]}
                </p>
              </div>
            </SwiperSlide>

            {mathRandomTest?.map((el, index) => (
              <SwiperSlide
                key={el.id}
                style={{ width: "inheart" }}
                className="p-[20px] text-[#333d79ff]"
              >
                <div className="rounded-[20px] bg-opacity-50 backdrop-filter backdrop-blur-md dark:bg-white/10 dark:text-[#eee]  p-[20px] min-w-[100%] max-w-[100%] bg-white relative min-h-[59svh] lg:min-h-[70svh]  flex flex-col justify-between">
                  <div>
                    <div className="border-b-[2px] border-b-[#E5E7EB] p-[0px_0px_20px_0px]">
                      <p className="text-[18px] lg:text-[40px] font-bold">
                        {el.question[i18n.language]}
                      </p>
                    </div>

                    <div className=" mt-[30px] rounded-md">
                      {el.type == "input" ? (
                        <div>
                          {el.img && (
                            <div className="w-[100%] lg:w-[25%]  m-auto overflow-y-hidden ">
                              <img
                                src={el.img || "/placeholder.svg"}
                                alt="picture"
                                className="w-[100%] object-cover"
                              />
                            </div>
                          )}
                          <input
                            type="text"
                            className=" text-[18px] lg:text-[30px] font-[600] tracking-[1px] p-[13px_15px] outline-none border-[2px] border-[#E5E7EB] dark:bg-transparent rounded-md w-[100%]"
                            placeholder={
                              translateArray[0].question[i18n.language]
                            }
                            onInput={(e) =>
                              checkCorrectText(e.target.value, el.id)
                            }
                          />
                        </div>
                      ) : el.type == "select" ? (
                        <div>
                          {el.img && (
                            <div className="w-[100%] lg:w-[25%]  m-auto overflow-y-hidden ">
                              <img
                                src={el.img || "/placeholder.svg"}
                                alt="picture"
                                className="w-[100%] object-cover"
                              />
                            </div>
                          )}
                          <div className="flex flex-wrap lg:flex-col xl:flex-wrap xl:flex-row gap-[30px]  w-[100%]">
                            {el.img
                              ? Object.values(el)
                                  .slice(4)
                                  .map((answer, idx) => {
                                    return (
                                      <div
                                        key={idx}
                                        className="flex items-center w-[100%] lg:w-[100%] xl:w-[48%] gap-3"
                                      >
                                        <p className="lg:text-[30px] font-bold text-[18px]">
                                          {letters[idx]}&#x29;
                                        </p>

                                        <div className="lg:p-[20px] p-[10px] rounded-md border-[2px] border-[#E5E7EB] flex items-center gap-[10px] w-[100%]">
                                          <input
                                            onClick={() => {
                                              checkCorrectAnswer(
                                                el.id,
                                                answer.correct
                                              );
                                            }}
                                            type="radio"
                                            name={`radio-${el.id}`}
                                            className="w-[20px] h-[20px]"
                                          />
                                          <p className="text-[20px] font-[600]">
                                            {answer.variant}
                                          </p>
                                        </div>
                                      </div>
                                    );
                                  })
                              : Object.values(el)
                                  .slice(3)
                                  .map((answer, idx) => {
                                    return (
                                      <div
                                        key={idx}
                                        className="flex items-center w-[100%] lg:w-[100%] xl:w-[48%] gap-3"
                                      >
                                        <p className="lg:text-[30px] font-bold text-[18px]">
                                          {letters[idx]}&#x29;
                                        </p>

                                        <div className="lg:p-[20px] p-[10px] rounded-md border-[2px] border-[#E5E7EB] flex items-center gap-[10px] w-[100%]">
                                          <input
                                            onClick={() => {
                                              checkCorrectAnswer(
                                                el.id,
                                                answer.correct
                                              );
                                            }}
                                            type="radio"
                                            name={`radio-${el.id}`}
                                            className="w-[20px] h-[20px]"
                                          />
                                          <p className="text-[20px] font-[600]">
                                            {answer.variant}
                                          </p>
                                        </div>
                                      </div>
                                    );
                                  })}
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-4 items-center  flex-col">
                          {el.img && (
                            <div className="w-[100%] lg:w-[25%]  m-auto overflow-y-hidden ">
                              <img
                                src={el.img || "/placeholder.svg"}
                                alt="picture"
                                className="w-[100%] object-cover"
                              />
                            </div>
                          )}
                          <input
                            type="text"
                            className=" dark:bg-transparent lg:w-[50%] lg:text-[30px] text-[18px] w-[100%] font-[600] tracking-[1px] p-[5px_10px] lg:p-[13px_15px] outline-none border-[2px] border-[#E5E7EB] rounded-md"
                            placeholder={
                              translateArray[0].question[i18n.language]
                            }
                            onInput={(e) =>
                              checkCorrectText(e.target.value, el.id)
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <br />
                  <div className="flex justify-end items-center w-[100%] ">
                    {index == 0 ? (
                      <div className="flex justify-end items-center w-[100%] mt-[10px] ">
                        <button
                          className="shadowButton bg-[#12A0EA] text-white p-[5px_20px] text-[18px] lg:text-[20px] lg:p-[10px_50px] font-[600] tracking-[1px] rounded-md"
                          onClick={handleNextSlide}
                        >
                          {t("ButtonNext")}
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center w-[100%] mt-[10px] lg:mt-0">
                        <button
                          className="shadowButton bg-[#12A0EA] text-white lg:text-[20px] lg:p-[10px_50px] p-[5px_20px] text-[18px] font-[600] tracking-[1px] rounded-md"
                          onClick={handlePrevSlide}
                        >
                          {t("ButtonBack")}
                        </button>
                        <button
                          className="shadowButton bg-[#12A0EA] text-white lg:text-[20px] lg:p-[10px_50px] p-[5px_20px] text-[18px] font-[600] tracking-[1px] rounded-md"
                          onClick={handleNextSlide}
                        >
                          {t("ButtonNext")}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {logicRandomTest?.map((el, index) => (
              <SwiperSlide
                key={el.id}
                className="p-[20px] text-[#333d79ff] overflow-y-scroll"
              >
                <div className="rounded-[20px] dark:bg-white/10 dark:text-[#eee]  backdrop-filter backdrop-blur-[10px] p-[20px] min-w-[100%] max-w-[100%] bg-white relative min-h-[auto]  sm:min-h-[80svh] lg:min-h-[70svh]  flex flex-col justify-between">
                  <div>
                    <div className="border-b-[2px] border-b-[#E5E7EB] p-[0px_0px_20px_0px]">
                      <p className="text-[18px] lg:text-[25px] 2xl:text-[35px] font-bold">
                        {el.question[i18n.language]}
                      </p>
                    </div>

                    <div className=" mt-[30px] rounded-md">
                      {el.type == "input" ? (
                        <input
                          type="text"
                          className=" text-[18px] lg:text-[30px] font-[600] tracking-[1px] xl:p-[13px_15px] p-[5px_10px] outline-none border-[2px] border-[#E5E7EB] dark:bg-transparent rounded-md w-[100%]"
                          placeholder={
                            translateArray[0].question[i18n.language]
                          }
                          onInput={(e) =>
                            checkCorrectText(e.target.value, el.id)
                          }
                        />
                      ) : el.type == "select" ? (
                        <div className="flex flex-wrap  gap-[40px]  w-[100%]">
                          {Object.values(el)
                            .slice(3)
                            .map((answer, idx) => {
                              return (
                                <div
                                  key={idx}
                                  className="lg:p-[20px] p-[10px] rounded-md border-[2px] border-[#E5E7EB] flex items-center gap-[10px] w-[100%] lg:w-[48%]"
                                >
                                  <p className="lg:text-[30px] font-bold text-[18px]">
                                    {letters[idx]}
                                  </p>
                                  <input
                                    onClick={() => {
                                      checkCorrectAnswer(el.id, answer.correct);
                                    }}
                                    type="radio"
                                    name={`radio-${el.id}`}
                                    className="w-[20px] h-[20px]"
                                  />
                                  <p className="text-[20px] font-[600]">
                                    {answer.variant}
                                  </p>
                                </div>
                              );
                            })}
                        </div>
                      ) : (
                        <div className="flex gap-4 items-center  flex-col overflow-y-scroll">
                          <img
                            src={el.img || "/placeholder.svg"}
                            alt="picture"
                            className=""
                          />
                          <input
                            type="text"
                            className=" dark:bg-transparent lg:w-[50%] lg:text-[30px] text-[18px] w-[100%] font-[600] tracking-[1px] p-[5px_10px] lg:p-[13px_15px] outline-none border-[2px] border-[#E5E7EB] rounded-md"
                            placeholder={
                              translateArray[0].question[i18n.language]
                            }
                            onInput={(e) =>
                              checkCorrectText(e.target.value, el.id)
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end items-center w-[100%] pt-[10px]">
                    <div className="flex justify-between items-center w-[100%]">
                      <button
                        className="shadowButton bg-[#12A0EA] text-white lg:text-[20px] lg:p-[10px_50px] p-[5px_20px] text-[18px] font-[600] tracking-[1px] rounded-md"
                        onClick={handlePrevSlide}
                      >
                        {t("ButtonBack")}
                      </button>
                      <button
                        className="shadowButton bg-[#12A0EA] text-white lg:text-[20px] lg:p-[10px_50px] p-[5px_20px] text-[18px] font-[600] tracking-[1px] rounded-md"
                        onClick={handleNextSlide}
                      >
                        {t("ButtonNext")}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide className="p-[20px] text-[white] relative">
              <div className="rounded-[20px] overflow-hidden dark:bg-white/10 dark:text-[#eee]  backdrop-filter backdrop-blur-[10px] p-[20px] w-[100vw] bg-white relative min-h-[59svh] lg:min-h-[70svh]  flex flex-col justify-end items-center">
                <AutoSlider
                  width={"100%"}
                  height={"100%"}
                  position={"absolute"}
                  top={"0"}
                  right={"0"}
                  zIndex={"-1"}
                />

                <div className="flex justify-between items-center w-[100%] mt-[10px] lg:mt-0">
                  <button
                    className="shadowButton bg-[#12A0EA] text-white lg:text-[20px] lg:p-[10px_50px] p-[5px_20px] text-[18px] font-[600] tracking-[1px] rounded-md"
                    onClick={handlePrevSlide}
                  >
                    {t("ButtonBack")}
                  </button>

                  <button
                    onClick={() => {
                      setSubmitingModal(true);
                    }}
                    className=" lg:p-[10px_40px] p-[5px_10px] text-[18px] tracking-[1px] font-[600] shadowButton bg-[#12A0EA] text-white rounded-md"
                  >
                    {t("ButtonSubmit")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {submitingModal ? (
          <>
            <div className="bg-[#000000a1] w-[100%] h-[100svh] fixed top-0 right-0 z-10 flex justify-center items-center">
              <div
                className="bg-white rounded-md p-[20px] w-[25%] flex flex-col gap-4 dark:bg-[#091221] dark:text-white"
                style={{
                  padding: "20px",
                  minWidth: "350px",
                  textAlign: "center",
                }}
              >
                <p className="font-bold text-[40px] text-center">
                  {translateArray[3].question[i18n.language]}
                </p>
                <div className="flex justify-between  items-center w-[100%]">
                  <button
                    className=" shadowButton2 p-[10px_50px] text-[20px] rounded-md bg-[red] text-white"
                    onClick={() => {
                      setSubmitingModal(false);
                    }}
                  >
                    {translateArray[2].question[i18n.language]}
                  </button>
                  <button
                    className="p-[10px_50px] text-[20px] rounded-md shadowButton bg-[#12A0EA] text-white"
                    onClick={() => {
                      handleSubmit();
                      setSubmitingModal(false);
                    }}
                  >
                    {translateArray[1].question[i18n.language]}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
