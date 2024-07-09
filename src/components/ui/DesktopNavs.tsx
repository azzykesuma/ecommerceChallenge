import { Link } from "react-router-dom";
import { lists } from "../../lib/routes";
import { useState } from "react";
import { motion } from "framer-motion";

const DesktopNavs = () => {
  const [linkActive, setLinkActive] = useState("home");
  const setActive = (list: string) => {
    setLinkActive(list);
  };
  return (
    <nav>
      <ul className="flex gap-8 ">
        {lists.map((list, index) => (
          <li
            key={index}
            onClick={() => setActive(list.name)}
            className="relative"
          >
            <Link to={list.url}>{list.name}</Link>
            {linkActive === list.name && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-[-20px] left-0 w-full border-b-2 border-orange"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavs;
