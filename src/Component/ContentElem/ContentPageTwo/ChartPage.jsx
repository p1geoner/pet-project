import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const style = {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundColor: "#FFFAFA",
  zIndex: "10",
};

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function calcProb(time) {
  return (
    Math.exp(-1.765 * Math.pow(10, -5) * 15 * getRandom(1.2, 1.6) * time) *
    Math.exp(-1.213 * Math.pow(10, -5) * 3 * time) *
    Math.exp(-2.395 * Math.pow(10, -6) * 1 * time)
  );
}



const getData = (value) => {
  let mas = [];
  let masKoef = [];
  let masError = [];
  let value_cur = value/100
  let li = 0.00144
  value_cur = getRandom(value_cur-5, value_cur+5);
  for (let i = 0; i < value + 100; i += 100) {
    let calc = calcProb(i)
    mas.push({
      name: i,
      "P(t)": parseFloat(calc.toFixed(5)),
    });
    masKoef.push({
      name: i,
      "Kо.г.": parseFloat((0.976*calc).toFixed(5)),
    })
    masError.push(
      {
        name: i,
        "P(t)error": parseFloat(Math.exp(-li*i*getRandom(1.2, 1.6)).toFixed(5)),
      }
    )
  }
  console.log(masError)
  return [mas, masKoef, masError];
};

export default function ChartPage({ timeTest, erorr }) {
  let [mas, masKoef, masError] = getData(timeTest, erorr)

  return (
    <div style={style} className="container">
      <div className="row row-cols-2">
        <div className="col text-center" style={{ color: "green", textAlign: "center" }}>
          Зависимость вероятности безотказной работы системы от времени
        </div>
        <div className="col" style={{ color: "green", textAlign: "center" }}>
          Зависимость коэффициента готовности системы от времени
        </div>
        <LineChart
          className="col"
          width={650}
          height={300}
          data={mas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="P(t)" stroke="#82ca9d" />
        </LineChart>
        <LineChart
          className="col"
          width={650}
          height={300}
          data={masKoef}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="Kо.г." stroke="#82ca9d" />
        </LineChart>
        <span className="col text-center" style={{ color: "green" }}>
          Зависимость вероятности безошибочной работы ПО от времени
        </span>
        <LineChart
          className="col"
          width={700}
          height={300}
          data={masError}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="P(t)error" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}
