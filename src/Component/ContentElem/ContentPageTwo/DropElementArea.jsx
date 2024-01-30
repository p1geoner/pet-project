import { useState } from "react";
import ChartPage from "./ChartPage";
import PopupMenu from "./PopupMenu";

const styles = {
  position: "rilative"
};

export const DropElementArea = ({ chart, setChart, timeTest, setTimeTest }) => {
  const [pop, setPop] = useState(false);

  const body = pop && (
    <PopupMenu
      pop={pop}
      setPop={setPop}
      timeTest={timeTest}
      setTimeTest={setTimeTest}
    />
  );

  const chartPage = chart && (
    <ChartPage chart={chart} setChart={setChart} timeTest={timeTest} />
  );

  return (
    <div style={styles} className="content dropElementArea contentBg">
      {body}
      {chartPage}
    </div>
  );
};
