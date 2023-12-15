const slider = document.querySelector(".slider");
const imgSlider = document.querySelector(".slider__image");
const inptSlider = document.querySelector(".slider__input");

inptSlider.addEventListener("input", _ . debounce(() => {
    slider.style.maxWight = `${input.value}px`;
},
    1000,
    {
        leading: true,
        trailing: false,
    }
)
);

const box = document.querySelector("[data-box]");

function onMoveMouse(e)  {
    box.style.left = `${e.clientX}px`;
    box.style.top = `${e.clientY}px`;
    
};
const time = 100;
window.addEventListener("mousemove", _ . throttle (onMoveMouse , time));
