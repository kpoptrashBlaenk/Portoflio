document.addEventListener("DOMContentLoaded", () => {
  // LIGHT AND DARK MODE (theme)
  let savedTheme = localStorage.getItem("theme")
  const htmlTag = document.querySelector("html")
  if (savedTheme) {
    htmlTag.setAttribute("data-bs-theme", savedTheme)
  } else {
    htmlTag.setAttribute("data-bs-theme", "dark")
  }

  savedTheme = htmlTag.getAttribute("data-bs-theme")

  setButtonStyle()

  document
    .querySelector("#toggle-theme")
    .addEventListener("click", function () {
      if (htmlTag.getAttribute("data-bs-theme") === "dark") {
        htmlTag.setAttribute("data-bs-theme", "light")
      } else {
        htmlTag.setAttribute("data-bs-theme", "dark")
      }
      const currentTheme = htmlTag.getAttribute("data-bs-theme")
      createCanvas(currentTheme)
      localStorage.setItem("theme", currentTheme)
      setButtonStyle()
    })

  function setButtonStyle() {
    const icon = document.querySelector("#theme-icon")
    const toggle = document.querySelector("#toggle-theme")
    if (htmlTag.getAttribute("data-bs-theme") === "dark") {
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
      toggle.classList.remove("btn-outline-dark")
      toggle.classList.add("btn-outline-light")
    } else {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
      toggle.classList.remove("btn-outline-white")
      toggle.classList.add("btn-outline-dark")
    }
  }

  // PARTICLES
  function createCanvas(theme) {
    canvasSize()

    let particles, space

    let particleSpace = document.querySelector("#particles-js")

    if (theme === "dark") {
      particles = "#ffffff"
      space = "#000000"
      particleSpace.classList.remove("bg-white")
      particleSpace.classList.add("bg-black")
    } else {
      particles = "#000000"
      space = "#ffffff"
      particleSpace.classList.remove("bg-black")
      particleSpace.classList.add("bg-white")
    }

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        color: {
          value: particles,
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: space,
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: particles,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
      retina_detect: true,
    })
  }

  createCanvas(savedTheme)

  function canvasSize() {
    const particlesElement = document.querySelector("#particles-js")
    particlesElement.setAttribute("height", document.height)
    particlesElement.setAttribute("width", document.width)
  }

  window.addEventListener("resize", canvasSize)
})
