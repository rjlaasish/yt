import { useState } from "react";
import "./styles.css";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const Button = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);
    await delay(3500); //add your report exporting logic here
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className={`button ${isLoading ? "loading" : ""}`}
      disabled={isLoading}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M467.2 129.8L345.5 12C338.1 4.8 328 0.699998 317.6 0.699998L88.4 0.0999985C60.6 0.0999985 38 22.5 38 50.1V461.9C38 489 61.3 512 88.9 512H427.9C455 512 477 489.5 477 461.8V153.7C477 144.4 473.5 135.9 467.2 129.8ZM345 67.2L407.9 128H355.9C350.1 128 345 123.5 345 118.4V67.2ZM427.9 472H88.9C83.3 472 78 467.1 78 461.8V50.1C78 44.8 82.9 40.1 88.4 40.1L305 40.7V118.4C305 145.7 327.8 168 355.9 168H437V461.8C437 466.8 433.6 472 427.9 472Z"
          fill="white"
        />
        <path
          id="line1"
          d="M370 327H145C134 327 125 336 125 347C125 358 134 367 145 367H370C381 367 390 358 390 347C390 336 381 327 370 327Z"
          fill="white"
        />
        <path
          id="line2"
          d="M125 267C125 278 134 287 145 287H320C331 287 340 278 340 267C340 256 331 247 320 247H145C134 247 125 256 125 267Z"
          fill="white"
        />
        <path
          id="line3"
          d="M144 207H260C271 207 280 198 280 187C280 176 271 167 260 167H144C133 167 124 176 124 187C124 198 133 207 144 207Z"
          fill="white"
        />
      </svg>
      <span>{isLoading ? "Exporting...." : "Export Report"}</span>
    </button>
  );
};
export default Button;
