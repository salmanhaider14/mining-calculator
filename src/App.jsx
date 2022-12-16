import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  let [hourlyvalue, setHourlyValue] = useState(0.00000015);
  let [exchangerate, setExchangeRate] = useState(17, 457.05);

  const [hashingpower, setHashingpower] = useState(0);

  let [minedday, setMinedday] = useState(0);
  let [minedperweek, setMinedperweek] = useState(0);
  let [minedpermonth, setminedpermonth] = useState(0);
  let [mindedperyear, setminedperyear] = useState(0);

  const [power, setPower] = useState(0);

  let [profitday, setProfitDay] = useState(0);
  let [profitweek, setProfitWeek] = useState(0);
  let [profitmonth, setProfitMonth] = useState(0);
  let [profityear, setProfityear] = useState(0);

  const [horsepower, setHorsepower] = useState(0);

  let [costday, setCostday] = useState(0);
  let [costweek, setCostweek] = useState(0);
  let [costMonth, setCostMonth] = useState(0);
  let [costYear, setCostYear] = useState(0);

  const [pool, setPool] = useState(0);

  let [poolday, setPoolday] = useState(0);
  let [poolweek, setPoolweek] = useState(0);
  let [poolMonth, setPoolMonth] = useState(0);
  let [poolYear, setPoolYear] = useState(0);

  useEffect(() => {
    setMinedday(hourlyvalue * hashingpower * 24);
  }, [hashingpower]);

  minedperweek = minedday * 7;
  minedpermonth = minedday * 30;
  mindedperyear = minedday * 365;

  useEffect(() => {
    setCostday((power / 1000) * 24 * horsepower);
  }, [horsepower, power]);

  costweek = costday * 7;
  costMonth = costday * 30;
  costYear = costday * 365;

  profitday = minedday * exchangerate - costday;

  profitweek = profitday * 7;
  profitmonth = profitday * 30;
  profityear = profitday * 365;

  useEffect(() => {
    setPoolday((pool / 100) * profitday);
  }, [pool]);
  poolweek = poolday * 7;
  poolMonth = poolday * 30;
  poolYear = poolday * 365;

  profitday -= poolday;
  profitweek -= poolweek;
  profitmonth -= poolMonth;
  profityear -= poolYear;

  const [isbtc, setIsbtc] = useState(true);
  const [isEtc, setIsetc] = useState(false);
  const [isXmr, setIsxmr] = useState(false);
  const [isZec, setIszec] = useState(false);
  const [isDash, setIsDash] = useState(false);
  const [isLtc, setIsltc] = useState(false);

  console.log(hourlyvalue);

  return (
    <div className="App">
      <div className="options">
        <ul>
          <li>
            <button
              onClick={() => {
                setIsbtc(true);
                setIsetc(false);
                setIsxmr(false);
                setIszec(false);
                setIsDash(false);
                setIsltc(false);
                setHourlyValue(0.00000015);
                setExchangeRate(17457.05);
                setProfitDay(0);
                setCostday(0);
                setMinedday(0);
              }}
            >
              BTC{" "}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setHourlyValue(0.00000677);
                setExchangeRate(18.26);
                setProfitDay(0);
                setCostday(0);
                setMinedday(0);
                setIsbtc(false);
                setIsetc(true);
                setIsxmr(false);
                setIszec(false);
                setIsDash(false);
                setIsltc(false);
              }}
            >
              ETC{" "}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setExchangeRate(148.55);
                setHourlyValue(0.0000082);
                setIsbtc(false);
                setIsetc(false);
                setIsxmr(true);
                setIszec(false);
                setIsDash(false);
                setIsltc(false);
                setProfitDay(0);
                setCostday(0);
                setMinedday(0);
              }}
            >
              XMR{" "}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setExchangeRate(45.93);
                setHourlyValue(0.00001074);
                setIsbtc(false);
                setIsetc(false);
                setIsxmr(false);
                setIszec(true);
                setIsDash(false);
                setIsltc(false);
                setProfitDay(0);
                setCostday(0);
                setMinedday(0);
              }}
            >
              ZEC
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setExchangeRate(46.79);
                setHourlyValue(0.00000002);
                setIsbtc(false);
                setIsetc(false);
                setIsxmr(false);
                setIszec(false);
                setIsDash(true);
                setIsltc(false);
                setProfitDay(0);
                setCostday(0);
                setMinedday(0);
              }}
            >
              Dash
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setExchangeRate(73.16);
                setHourlyValue(0.00000052);
                setIsbtc(false);
                setIsetc(false);
                setIsxmr(false);
                setIszec(false);
                setIsDash(false);
                setIsltc(true);
                setProfitDay(0);
                setCostday(0);
                setMinedday(0);
              }}
            >
              LTC
            </button>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="calculator">
          <img
            src={
              (isbtc && "/btc.png") ||
              (isEtc && "/etc.png") ||
              (isXmr && "/xmr.png") ||
              (isZec && "/zec.png") ||
              (isDash && "/dash.png") ||
              (isLtc && "/ltc.png")
            }
            alt=""
            width={80}
          />
          <p className="rate">
            {(isbtc && "1 BTC = 17457.05$") ||
              (isEtc && "1 ETC = 18.26$") ||
              (isXmr && "1 XMR = 148.55$") ||
              (isZec && "1 ZEC = 45.93$") ||
              (isDash && "1 Dash = 46.79$") ||
              (isLtc && "1 LTC = 73.16$")}
          </p>
          <label>Hashing Power</label>
          <input
            type={"text"}
            placeholder={
              (isbtc && "0 Th/s") ||
              (isEtc && "0 Mh/s") ||
              (isXmr && "0 Kh/s") ||
              (isZec && "0 Kh/s") ||
              (isDash && "0 Mh/s") ||
              (isLtc && "0 Mh/s")
            }
            onChange={(e) => {
              setHashingpower(e.target.value);
            }}
          />

          <label>Power consumption (w)</label>
          <input
            type={"text"}
            placeholder="0"
            onChange={(e) => setPower(e.target.value)}
          />

          <label>Cost per KWh ($)</label>
          <input
            type={"text"}
            placeholder="0"
            onChange={(e) => setHorsepower(e.target.value)}
          />

          <label>Pool Fee (%)</label>
          <input
            type={"text"}
            placeholder="0"
            onChange={(e) => setPool(e.target.value)}
          />
        </div>

        <div className="stats">
          <div className="day">
            <div className="profitmonth">
              <p>Profit per month</p>
              <h2>${profitmonth.toFixed(6)}</h2>
            </div>
          </div>

          <div className="day">
            {profitday > costday ? (
              <div className="profit" style={{ backgroundColor: "green" }}>
                <p>Profit per day</p>
                <h2>${profitday.toFixed(4)}</h2>
                <p style={{ fontSize: "14px" }}>
                  Pool Fee $ {poolday.toFixed(4)}
                </p>

                <h3>Day</h3>
              </div>
            ) : (
              <div className="profit">
                <p>Profit per day</p>
                <h2>${profitday.toFixed(4)}</h2>
                <p style={{ fontSize: "14px" }}>
                  Pool Fee $ {poolday.toFixed(4)}
                </p>

                <h3>Day</h3>
              </div>
            )}
            <div className="mined">
              <p>Mined per day</p>
              <h2>
                {(isbtc && "Ƀ") ||
                  (isEtc && "ETC") ||
                  (isXmr && "XMR") ||
                  (isZec && "ZEC") ||
                  (isDash && "Dash") ||
                  (isLtc && "Ł")}{" "}
                {minedday.toFixed(6)}
              </h2>
            </div>
            <div className="power">
              <p>Power cost/Day</p>
              <h2>$ {costday.toFixed(6)}</h2>
            </div>
          </div>
          <div className="day">
            {profitday > costday ? (
              <div className="profit" style={{ backgroundColor: "green" }}>
                <p>Profit per week</p>
                <h2>${profitweek.toFixed(4)}</h2>
                <p style={{ fontSize: "14px" }}>
                  Pool Fee $ {poolweek.toFixed(4)}
                </p>
                <h3>Week</h3>
              </div>
            ) : (
              <div className="profit">
                <p>Profit per week</p>
                <h2>${profitweek.toFixed(4)}</h2>
                <p style={{ fontSize: "14px" }}>
                  Pool Fee $ {poolweek.toFixed(4)}
                </p>
                <h3>Week</h3>
              </div>
            )}
            <div className="mined">
              <p>Mined per week</p>
              <h2>
                {" "}
                {(isbtc && "Ƀ") ||
                  (isEtc && "ETC") ||
                  (isXmr && "XMR") ||
                  (isZec && "ZEC") ||
                  (isDash && "Dash") ||
                  (isLtc && "Ł")}{" "}
                {minedperweek.toFixed(6)}
              </h2>
            </div>
            <div className="power">
              <p>Power cost/Week</p>
              <h2>$ {costweek.toFixed(6)}</h2>
            </div>
          </div>
          <div className="day">
            {profitday > costday ? (
              <div className="profit" style={{ backgroundColor: "green" }}>
                <p>Profit per month</p>
                <h2>${profitmonth.toFixed(4)}</h2>
                <p style={{ fontSize: "14px" }}>
                  Pool Fee $ {poolMonth.toFixed(4)}
                </p>
                <h3>Month</h3>
              </div>
            ) : (
              <div className="profit">
                <p>Profit per month</p>
                <h2>${profitmonth.toFixed(4)}</h2>
                <p style={{ fontSize: "14px" }}>
                  Pool Fee $ {poolMonth.toFixed(4)}
                </p>
                <h3>Month</h3>
              </div>
            )}
            <div className="mined">
              <p>Mined per month</p>
              <h2>
                {" "}
                {(isbtc && "Ƀ") ||
                  (isEtc && "ETC") ||
                  (isXmr && "XMR") ||
                  (isZec && "ZEC") ||
                  (isDash && "Dash") ||
                  (isLtc && "Ł")}{" "}
                {minedpermonth.toFixed(6)}
              </h2>
            </div>
            <div className="power">
              <p>Power cost/Month</p>
              <h2>$ {costMonth.toFixed(6)}</h2>
            </div>
          </div>
          <div className="day">
            {profitday > costday ? (
              <div className="profit" style={{ backgroundColor: "green" }}>
                <p>Profit per year</p>
                <h2>${profityear.toFixed(4)}</h2>
                <p style={{ fontSize: "14px" }}>
                  Pool Fee $ {poolYear.toFixed(4)}
                </p>
                <h3>Year</h3>
              </div>
            ) : (
              <div className="profit">
                <p>Profit per year</p>
                <h2>${profityear.toFixed(4)}</h2>
                <p style={{ fontSize: "14px" }}>
                  Pool Fee $ {poolYear.toFixed(4)}
                </p>
                <h3>Year</h3>
              </div>
            )}
            <div className="mined">
              <p>Mined per year</p>
              <h2>
                {" "}
                {(isbtc && "Ƀ") ||
                  (isEtc && "ETC") ||
                  (isXmr && "XMR") ||
                  (isZec && "ZEC") ||
                  (isDash && "Dash") ||
                  (isLtc && "Ł")}{" "}
                {mindedperyear.toFixed(6)}
              </h2>
            </div>
            <div className="power">
              <p>Power cost/Year</p>
              <h2>$ {costYear.toFixed(6)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
