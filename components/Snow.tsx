"use client";
import Snowfall from "react-snowfall";

export default function Snow() {
  return (
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
      snowflakeCount={60}
    />
  );
}
