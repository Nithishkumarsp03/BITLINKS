import * as React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Box from "@mui/material/Box";
import { FormatItalicRounded } from "@mui/icons-material";

const data = [
  { label: "Software", innerLabel: "1", value: 331 },
  { label: "Hardware", innerLabel: "2", value: 563 },
  { label: "Others", innerLabel: "3", value: 549 },
];

const COLORS = ["#FF715B", "#6610F2", "#34D196"]; // Custom colors for the slices

export default function PieAnimation() {
  const [itemNb, setItemNb] = React.useState(3);
  const [activeIndex, setActiveIndex] = React.useState(null);

  const visibleData = data.slice(0, itemNb);
  const totalValue = visibleData.reduce((acc, item) => acc + item.value, 0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div style={{backgroundColor: "white",height: "35vh",paddingTop: "3%",borderRadius: "5%"}}>
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <PieChart width={400} height={200}>
        <Pie
          data={visibleData}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={95}
          fill="#8884d8"
          paddingAngle={2} // Reduced padding between slices
          dataKey="value"
          labelLine={false} // Disable the line connecting label to slice
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            percent,
            index,
          }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                fontSize={13}
                fontWeight={500}
                fontStyle={FormatItalicRounded}>
                {visibleData[index].value}
              </text>
            );
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {visibleData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const { label, value } = payload[0].payload;
              const color =
                COLORS[visibleData.findIndex((item) => item.label === label)];
              const radioStyle = {
                backgroundColor: color,
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                marginRight: "5px",
                display: "inline-block",
                verticalAlign: "middle",
              };

              return (
                <Box
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}>
                  {/* <input type="radio" style={radioStyle} ></input> */}
                  <strong>{label}</strong> : {value}
                </Box>
              );
            }
            return null;
          }}
        />
      </PieChart>
      <Box
        sx={{
          position: "absolute",
          top: "43%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}>
        <Box sx={{ fontSize: 24, fontWeight: "bold" }}>{totalValue}</Box>
        <Box>Networks</Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: -5 }}>
        {visibleData.map((item, index) => (
          <Box
            key={index}
            sx={{
              marginTop: 6,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 75,
              height: 25,
              backgroundColor: COLORS[index % COLORS.length],
              color: "white",
              mx: 0.5,
              borderRadius: 2, // Optional: adds rounded corners
              padding: -4,
              textAlign: "center",
              fontWeight: 500,
            }}>
            {item.label}
          </Box>
        ))}
      </Box>
    </Box>
    </div>
  );
}
  