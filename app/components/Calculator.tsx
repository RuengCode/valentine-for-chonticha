"use client";
import React, { useState } from "react";

const showAlertฺ = (
  message: string,
  type: "info" | "success" | "warning" | "error"
) => {
  const alertDiv = document.getElementById("showAlt");
  if (!alertDiv) return;

  const alertClass = {
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning", 
    error: "alert-error"
  };

  const alertIcon = {
    info: `<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    success: `<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`,
    error: `<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  };

  alertDiv.className = `alert ${alertClass[type]} m-4 opacity-0 transition-opacity duration-500`;
  alertDiv.innerHTML = `
    ${alertIcon[type]}
    <span>${message}</span>
  `;

  setTimeout(() => {
    alertDiv.classList.add("opacity-100");
  }, 10);

  setTimeout(() => {
    alertDiv.classList.remove("opacity-100");
    setTimeout(() => {
      alertDiv.innerHTML = "";
      alertDiv.className = "alert";
    }, 500);
  }, 3000);
};

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleNumberClick = (value: string) => {
    if (input === "") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };
  const handleEqualClick = () => {
    const result = input;
    setInput(result.toString());
    console.log(result);
    if (result === "22112024") {
      showAlertฺ("คุณเก่งที่สุดเลยคุณป้อน", "success");
      setTimeout(() => {
        window.location.href = "valentinemail";
      }, 3000);
    } else {
      showAlertฺ("ทำไมตอบผิด จำกันไม่ได้เเล้วสินะ", "error");
    }
  };

  const handleClearClick = () => {
    setInput("");
  };

  return (
    <div className="flex justify-center items-center bg-base-200 rounded-md">
      <div className="relative group"></div>
      <div className="card w-96 bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title animate-bounce justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        Enter your password!
        </h2>
        <div className="text-5xl text-right font-bold mb-4">{input}</div>
        <div className="grid grid-cols-3 gap-3">
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>
        <button
          className="btn btn-outline btn-primary motion-safe:hover:scale-110"
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>
        <button
          className="btn btn-active btn-info motion-safe:hover:scale-110"
          onClick={handleClearClick}
        >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
          >
          <path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z" />
          <path
            fillRule="evenodd"
            d="M13 6H3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6ZM5.72 7.47a.75.75 0 0 1 1.06 0L8 8.69l1.22-1.22a.75.75 0 1 1 1.06 1.06L9.06 9.75l1.22 1.22a.75.75 0 1 1-1.06 1.06L8 10.81l-1.22 1.22a.75.75 0 0 1-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
          </svg>
          Clear
        </button>
        <button
          className="btn btn-active btn-success motion-safe:hover:scale-110"
          onClick={handleEqualClick}
        >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
          >
          <path d="M11.25 2A2.75 2.75 0 0 1 14 4.75v6.5A2.75 2.75 0 0 1 11.25 14h-3a2.75 2.75 0 0 1-2.75-2.75v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-3C7.56 3.5 7 4.06 7 4.75v.5a.75.75 0 0 1-1.5 0v-.5A2.75 2.75 0 0 1 8.25 2h3Z" />
          <path d="M7.97 6.28a.75.75 0 0 1 1.06-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H1.75a.75.75 0 0 1 0-1.5h7.19l-.97-.97Z" />
          </svg>
          Enter
        </button>
        </div>
      </div>
      
      <div id="showAlt"></div>
      </div>
    </div>
    
  );
};

export default Calculator;
