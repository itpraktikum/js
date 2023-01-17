"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector(".btn"),
          text = document.querySelector(".text"),
          input = document.querySelector("input");

          btn.addEventListener("click", () => {

            const int = input.value;
              let i = text.innerHTML = `<p>${int}</p>`;
          })

})