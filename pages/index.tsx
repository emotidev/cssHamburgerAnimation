import styles from "../styles.module.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.main}>
      <nav
        className={styles.nav}
        style={{
          zIndex: isOpen ? 50 : -50,
          clipPath: isOpen
            ? "circle(100% at 50% 50%)"
            : "circle(0% at 100% 0%)",
        }}
      >
        {[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "About",
            link: "/about",
          },
          {
            name: "Contact",
            link: "/contact",
          },
        ].map((item, i) => (
          <Link className={styles.link}  href={item.link} key={i}>{item.name}</Link>
        ))}
      </nav>
      <div
        className={styles.icon}
        style={
          isOpen
            ? {
                transform: "scale(0.5)",
                position: "fixed",
                top: "10%",
                right: "10%",
              }
            : {}
        }
      >
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color="#fff"
          rounded={true}
          distance="lg"
        />
      </div>
    </main>
  );
};

export default Home;
