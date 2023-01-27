export const completionratioData = [
    {
      series: [56],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          offsetY: -10,
        },
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 360,
            
            dataLabels: {
                show: true,
              name: {
                fontSize: "16px",
                color: "#000",
                offsetY: 120,
              },
              value: {
                offsetY: -5,
                fontSize: "35px",
                fontWight: "bold",
                color: "#0036e6",
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            gradientToColors: ['#fd06b3'],
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91],
          },
        },
        stroke: {
          dashArray: 4,
        },
        labels: ["Personility & Motivation"],
      },
    },
    {
        series: [64],
        options: {
          chart: {
            height: 350,
            type: "radialBar",
            offsetY: -10,
          },
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              dataLabels: {
                name: {
                  fontSize: "16px",
                  color: "#000",
                  offsetY: 120,
                },
                value: {
                    offsetY: -5,
                fontSize: "35px",
                  fontWight: "bold",
                  color: "#0036e6",
                  formatter: function (val) {
                    return val + "%";
                  },
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              shadeIntensity: 0.15,
              inverseColors: false,
              gradientToColors: ['#fd06b3'],
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91],
            },
          },
          stroke: {
            dashArray: 4,
          },
          labels: ["Work Interest"],
        },
      },
      {
        series: [38],
        options: {
          chart: {
            height: 350,
            type: "radialBar",
            offsetY: -10,
          },
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              dataLabels: {
                name: {
                  fontSize: "16px",
                  color: "#000",
                  offsetY: 120,
                },
                value: {
                    offsetY: -5,
                    fontSize: "35px",
                  fontWight: "bold",
                  color: "#0036e6",
                  formatter: function (val) {
                    return val + "%";
                  },
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              shadeIntensity: 0.15,
              inverseColors: false,
              gradientToColors: ['#fd06b3'],
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91],
            },
          },
          stroke: {
            dashArray: 4,
          },
          labels: ["Work Values"],
        },
      },
      {
        series: [22],
        options: {
          chart: {
            height: 350,
            type: "radialBar",
            offsetY: -10,
          },
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              dataLabels: {
                name: {
                  fontSize: "16px",
                  color: "#000",
                  offsetY: 120,
                },
                value: {
                    offsetY: -5,
                fontSize: "35px",
                  fontWight: "bold",
                  color: "#0036e6",
                  formatter: function (val) {
                    return val + "%";
                  },
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              shadeIntensity: 0.15,
              inverseColors: false,
              gradientToColors: ['#fd06b3'],
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91],
            },
          },
          stroke: {
            dashArray: 4,
          },
          labels: ["Employability"],
        },
      },
      {
        series: [88],
        options: {
          chart: {
            height: 350,
            type: "radialBar",
            offsetY: -10,
          },
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              dataLabels: {
                name: {
                  fontSize: "16px",
                  color: "#000",
                  offsetY: 120,
                },
                value: {
                    offsetY: -5,
                fontSize: "35px",
                  fontWight: "bold",
                  color: "#0036e6",
                  formatter: function (val) {
                    return val + "%";
                  },
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              shadeIntensity: 0.15,
              inverseColors: false,
              gradientToColors: ['#fd06b3'],
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91],
            },
          },
          stroke: {
            dashArray: 4,
          },
          labels: ["Future Of Work"],
        },
      },
      {
        series: [78],
        options: {
          chart: {
            height: 350,
            type: "radialBar",
            offsetY: -10,
          },
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              dataLabels: {
                name: {
                  fontSize: "16px",
                  color: "#000",
                  offsetY: 120,
                },
                value: {
                    offsetY: -5,
                    fontSize: "35px",
                  fontWight: "bold",
                  color: "#0036e6",
                  formatter: function (val) {
                    return val + "%";
                  },
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              shadeIntensity: 0.15,
              inverseColors: false,
              gradientToColors: ['#fd06b3'],
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91],
            },
          },
          stroke: {
            dashArray: 4,
          },
          labels: ["English Proficiency"],
        },
      },

]