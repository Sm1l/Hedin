import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./guessphone.scss";

const GuessPhone = () => {
  const [guess, setGuess] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setGuess(null);
    if (phone === "89637120205" || phone === "79637120205" || phone === "+79637120205") {
      setGuess(true);
    } else {
      setGuess(false);
    }
    console.log(data);
    reset();
  };
  let phone = watch("Phone");
  console.log("phone", phone);

  return (
    <div className="guessphone">
      <form className="guessphone__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="guessphone__number"
          type="tel"
          autocomplete="off"
          placeholder="Угадай мой номер телефона"
          {...register("Phone", {
            required: "Эй! Это поле обязательно для заполнения",
            pattern: {
              value: /^((\+7|7|8)+([0-9]){10})$/,
              message: "Что за дела? Вводи корректный номер!",
            },
          })}
        />
        {errors.Phone && <span>{errors.Phone?.message}</span>}

        <input type="submit" className="guessphone__button" />
      </form>
      {guess && <div className="guessphone__guess"> Это судьба! Чего же ты ждешь!? Звони мне немедленно!</div>}
      {!guess && guess !== null && <div className="guessphone__guess"> Я расстроен...мне с тобой не пути!</div>}
    </div>
  );
};

export { GuessPhone };
