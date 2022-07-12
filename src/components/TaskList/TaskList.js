import React, { useState } from "react";
import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({ title }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {count}
        <button onClick={increment}>add</button>{" "}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired
};
