import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  let [hourlyvalue, setHourlyValue] = useState(0.00000015);
  let [exchangerate, setExchangeRate] = useState(16670.97);

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
  }, [hashingpower, hourlyvalue]);

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

  const [isbtc, setIsbtc] = useState(true);
  const [isEtc, setIsetc] = useState(false);
  const [isXmr, setIsxmr] = useState(false);
  const [isZec, setIszec] = useState(false);
  const [isDash, setIsDash] = useState(false);
  const [isLtc, setIsltc] = useState(false);
  const [isDoge, setIsDoge] = useState(false);
  const [isKadena, setIsKadena] = useState(false);

  const styles = {
    hoverbtc: {
      backgroundImage:
        isbtc && "linear-gradient(to right, #414141, rgb(0, 0, 0, 0.2))",

      transform: isbtc && "scale(1.1)",
      opacity: isbtc && 1,
      borderRight: isbtc && "5px solid yellow",
    },
    hoveretc: {
      backgroundImage:
        isEtc && "linear-gradient(to right, #414141, rgb(0, 0, 0, 0.2))",

      transform: isEtc && "scale(1.1)",
      opacity: isEtc && 1,
      borderRight: isEtc && "5px solid yellow",
    },
    hoverxmr: {
      backgroundImage:
        isXmr && "linear-gradient(to right, #414141, rgb(0, 0, 0, 0.2))",

      transform: isXmr && "scale(1.1)",
      opacity: isXmr && 1,
      borderRight: isXmr && "5px solid yellow",
    },
    hoverz: {
      backgroundImage:
        isZec && "linear-gradient(to right, #414141, rgb(0, 0, 0, 0.2))",

      transform: isZec && "scale(1.1)",
      opacity: isZec && 1,
      borderRight: isZec && "5px solid yellow",
    },
    hoverdash: {
      backgroundImage:
        isDash && "linear-gradient(to right, #414141, rgb(0, 0, 0, 0.2))",

      transform: isDash && "scale(1.1)",
      opacity: isDash && 1,
      borderRight: isDash && "5px solid yellow",
    },
    hoverltc: {
      backgroundImage:
        isLtc && "linear-gradient(to right, #414141, rgb(0, 0, 0, 0.2))",

      transform: isLtc && "scale(1.1)",
      opacity: isLtc && 1,
      borderRight: isLtc && "5px solid yellow",
    },
    hoverdoge: {
      backgroundImage:
        isDoge && "linear-gradient(to right, #414141, rgb(0, 0, 0, 0.2))",

      transform: isDoge && "scale(1.1)",
      opacity: isDoge && 1,
      borderRight: isDoge && "5px solid yellow",
    },
    hoverkda: {
      backgroundImage:
        isKadena && "linear-gradient(to right, #414141, rgb(0, 0, 0, 0.2))",

      transform: isKadena && "scale(1.1)",
      opacity: isKadena && 1,
      borderRight: isKadena && "5px solid yellow",
    },
  };

  return (
    <div className="App">
      <div className="options">
        <a href="https://minershub.ae">
          <img src="/logo.png" alt="" className="logo" />
        </a>

        <div className="coins-container">
          <div
            className="coin"
            style={styles.hoverbtc}
            onClick={() => {
              setIsbtc(true);
              setIsetc(false);
              setIsxmr(false);
              setIszec(false);
              setIsDash(false);
              setIsltc(false);
              setIsDoge(false);
              setIsKadena(false);
              setHourlyValue(0.00000015);
              setExchangeRate(16670.97);
              // setProfitDay(0);
              // setCostday(0);
              // setMinedday(0);
            }}
          >
            <img src="/btc.png" alt="" width={30} />
            <p>Bitcoin</p>
          </div>

          <div
            className="coin"
            style={styles.hoveretc}
            onClick={() => {
              setHourlyValue(0.00000677);
              setExchangeRate(18.26);
              // setProfitDay(0);
              // setCostday(0);
              // setMinedday(0);
              setIsbtc(false);
              setIsetc(true);
              setIsxmr(false);
              setIszec(false);
              setIsDash(false);
              setIsltc(false);
              setIsDoge(false);
              setIsKadena(false);
            }}
          >
            <img src="/etc.png" alt="" width={30} />
            <p> Etherium</p>
          </div>

          <div
            className="coin"
            style={styles.hoverxmr}
            onClick={() => {
              setExchangeRate(148.55);
              setHourlyValue(0.0000082);
              setIsbtc(false);
              setIsetc(false);
              setIsxmr(true);
              setIszec(false);
              setIsDash(false);
              setIsltc(false);
              setIsDoge(false);
              setIsKadena(false);
              // setProfitDay(0);
              // setCostday(0);
              // setMinedday(0);
            }}
          >
            <img src="/xmr.png" alt="" width={30} />
            <p>Monero </p>
          </div>

          <div
            className="coin"
            style={styles.hoverz}
            onClick={() => {
              setExchangeRate(45.93);
              setHourlyValue(0.00001074);
              setIsbtc(false);
              setIsetc(false);
              setIsxmr(false);
              setIszec(true);
              setIsDash(false);
              setIsltc(false);
              setIsDoge(false);
              setIsKadena(false);
              // setProfitDay(0);
              // setCostday(0);
              // setMinedday(0);
            }}
          >
            <img src="/zec.png" alt="" width={30} />
            <p>Zcash </p>
          </div>

          <div
            className="coin"
            style={styles.hoverdash}
            onClick={() => {
              setExchangeRate(46.79);
              setHourlyValue(0.00000002);
              setIsbtc(false);
              setIsetc(false);
              setIsxmr(false);
              setIszec(false);
              setIsDash(true);
              setIsDoge(false);
              setIsltc(false);
              setIsKadena(false);
              // setProfitDay(0);
              // setCostday(0);
              // setMinedday(0);
            }}
          >
            <img src="/dash.png" alt="" width={30} />
            <p>Dash</p>
          </div>

          <div
            className="coin"
            style={styles.hoverltc}
            onClick={() => {
              setExchangeRate(73.16);
              setHourlyValue(0.00000052);
              setIsbtc(false);
              setIsetc(false);
              setIsxmr(false);
              setIszec(false);
              setIsDash(false);
              setIsDoge(false);
              setIsKadena(false);
              setIsltc(true);
              // setProfitDay(0);
              // setCostday(0);
              // setMinedday(0);
            }}
          >
            <img src="/ltc.png" alt="" width={30} />
            <p> Litecoin </p>
          </div>

          <div
            className="coin"
            style={styles.hoverdoge}
            onClick={() => {
              setExchangeRate(0.082);
              setHourlyValue(0.00076643);
              setIsbtc(false);
              setIsetc(false);
              setIsxmr(false);
              setIszec(false);
              setIsDash(false);
              setIsltc(false);
              setIsKadena(false);
              setIsDoge(true);
              // setProfitDay(0);
              // setCostday(0);
              // setMinedday(0);
            }}
          >
            <img src="/doge.png" alt="" width={30} />
            <p>DOGE</p>
          </div>

          <div
            className="coin"
            style={styles.hoverkda}
            onClick={() => {
              setExchangeRate(0.997);
              setHourlyValue(0.0133675);
              setIsbtc(false);
              setIsetc(false);
              setIsxmr(false);
              setIszec(false);
              setIsDash(false);
              setIsltc(false);
              setIsDoge(false);
              setIsKadena(true);
              // setProfitDay(0);
              // setCostday(0);
              // setMinedday(0);
            }}
          >
            <img src="/kadena.png" alt="" width={30} />
            <p>Kadena</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats">
          <div className="calculator">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginRight: "6rem",
              }}
            >
              <label>Hashing Power</label>
              <input
                type={"text"}
                placeholder={
                  (isbtc && "0 Th/s") ||
                  (isEtc && "0 Mh/s") ||
                  (isXmr && "0 Kh/s") ||
                  (isZec && "0 Kh/s") ||
                  (isDash && "0 Mh/s") ||
                  (isLtc && "0 Mh/s") ||
                  (isDoge && "0 Mh/s") ||
                  (isKadena && "0 Th/s")
                }
                onChange={(e) => {
                  setHashingpower(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginRight: "6rem",
              }}
            >
              {" "}
              <label>Power consumption (w)</label>
              <input
                type={"text"}
                placeholder="0"
                onChange={(e) => setPower(e.target.value)}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginRight: "6rem",
              }}
            >
              <label>Cost per KWh ($)</label>
              <input
                type={"text"}
                placeholder="0"
                onChange={(e) => setHorsepower(e.target.value)}
              />
            </div>
          </div>
          <div className="day">
            <div className="profitmonth">
              <p>Profit per month</p>
              <h2>${profitmonth.toFixed(6)}</h2>
            </div>
          </div>

          <div className="day">
            {profitday < costday ? (
              <div className="profit" style={{ color: "#DC3535" }}>
                <p>Profit per day</p>
                <h2>${profitday.toFixed(4)}</h2>
              </div>
            ) : (
              <div className="profit">
                <p>Profit per day</p>
                <h2>${profitday.toFixed(4)}</h2>
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
                  (isLtc && "Ł") ||
                  (isDoge && "DOGE") ||
                  (isKadena && "KDA ")}

                {minedday.toFixed(6)}
              </h2>
            </div>
            <div className="power">
              <p>Power cost/Day</p>
              <h2>$ {costday.toFixed(6)}</h2>
            </div>
          </div>
          <div className="day">
            {profitday < costday ? (
              <div className="profit" style={{ color: "#DC3535" }}>
                <p>Profit per week</p>
                <h2>${profitweek.toFixed(4)}</h2>
              </div>
            ) : (
              <div className="profit">
                <p>Profit per week</p>
                <h2>${profitweek.toFixed(4)}</h2>
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
                  (isLtc && "Ł") ||
                  (isDoge && "DOGE") ||
                  (isKadena && "KDA ")}{" "}
                {minedperweek.toFixed(6)}
              </h2>
            </div>
            <div className="power">
              <p>Power cost/Week</p>
              <h2>$ {costweek.toFixed(6)}</h2>
            </div>
          </div>
          <div className="day">
            {profitday < costday ? (
              <div className="profit" style={{ color: "#DC3535" }}>
                <p>Profit per month</p>
                <h2>${profitmonth.toFixed(4)}</h2>
              </div>
            ) : (
              <div className="profit">
                <p>Profit per month</p>
                <h2>${profitmonth.toFixed(4)}</h2>
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
                  (isLtc && "Ł") ||
                  (isDoge && "DOGE") ||
                  (isKadena && "KDA ")}{" "}
                {minedpermonth.toFixed(6)}
              </h2>
            </div>
            <div className="power">
              <p>Power cost/Month</p>
              <h2>$ {costMonth.toFixed(6)}</h2>
            </div>
          </div>
          <div className="day">
            {profitday < costday ? (
              <div className="profit" style={{ color: "#DC3535" }}>
                <p>Profit per year</p>
                <h2>${profityear.toFixed(4)}</h2>
              </div>
            ) : (
              <div className="profit">
                <p>Profit per year</p>
                <h2>${profityear.toFixed(4)}</h2>
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
                  (isLtc && "Ł") ||
                  (isDoge && "DOGE") ||
                  (isKadena && "KDA ")}{" "}
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
