tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true
  },
  particles: {
    number: {
      value: 0
    },
    color: {
      value: ["#ea938c", "#f4695f", "#ff00e1", "#ef75e1"]
    },
    shape: {
      type: "confetti",
      options: {
        confetti: {
          type: ["circle", "square"]
        }
      }
    },
    opacity: {
      value: {
        max: 1,
        min: 0
      },
      animation: {
        enable: true,
        speed: 2,
        startValue: "max",
        destroy: "min"
      }
    },
    size: {
      value: { min: 3, max: 7 }
    },
    life: {
      duration: {
        sync: true,
        value: 5
      },
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 20
      },
      speed: {
        min: 25,
        max: 50
      },
      drift: {
        min: -2,
        max: 2
      },
      decay: 0.05,
      direction: "none",
      outModes: {
        default: "destroy",
        top: "none"
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true
    }
  },
  detectRetina: true,
  background: {
    color: "#FFE6EF"
  },
  responsive: [
    {
      maxWidth: 700,
      options: {
        particles: {
          move: {
            speed: 30,
            decay: 0.05
          }
        }
      }
    }
  ],
  emitters: [
    {
      direction: "top-right",
      rate: {
        delay: 0.1,
        quantity: 10
      },
      position: {
        x: 0,
        y: 50
      },
      size: {
        width: 0,
        height: 0
      }
    },
    {
      direction: "top-left",
      rate: {
        delay: 0.1,
        quantity: 10
      },
      position: {
        x: 100,
        y: 50
      },
      size: {
        width: 0,
        height: 0
      }
    }
  ]
});
