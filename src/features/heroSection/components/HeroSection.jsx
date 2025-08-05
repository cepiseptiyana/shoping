import { useEffect, useRef, useState } from "react";

// hooks global
import { useProduct } from "@/hooks/useProduct";

// utils
import { images } from "../utils/hero.image";

// style
import style from "../style/hero.module.css";

const List = (props) => {
  const { current } = props;

  const list = images.map((tas, index) => {
    return (
      <article
        key={index}
        className={style.article}
        id={`slide${index + 1}`}
        style={{
          color: tas.color,
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        <header>
          <h1>{tas.name}</h1>
        </header>

        <figure>
          <img src={tas.image} alt={tas.name} />
        </figure>

        <p>{tas.desc}</p>
      </article>
    );
  });

  return list;
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearTimeout(timer);
  }, [current, isPaused]);

  return (
    <>
      <section className={style.container}>
        <div
          className={style.sliderWraper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <List current={current} />
        </div>

        <nav className={style.sliderNav}>
          <button
            onClick={() => setCurrent(0)}
            style={{ backgroundColor: current === 0 ? "rgb(14, 42, 58)" : "" }}
          />
          <button
            onClick={() => setCurrent(1)}
            style={{ backgroundColor: current === 1 ? "rgb(14, 42, 58)" : "" }}
          />
          <button
            onClick={() => setCurrent(2)}
            style={{ backgroundColor: current === 2 ? "rgb(14, 42, 58)" : "" }}
          />
        </nav>
      </section>
    </>
  );
};

export default HeroSection;
