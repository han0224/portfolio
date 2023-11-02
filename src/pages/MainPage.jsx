// import "./App.css";
import { About, Main, Project, Skills } from "../components/main";
import { Header, Footer } from "../layouts";
import useScrollMove from "../hooks/useScrollMove";
import { useEffect, useState } from "react";
import { UpIcon } from "../components";

export default function MainPage() {
  const [props, setProps] = useState([]);

  const tabs = {
    0: useScrollMove("main"),
    1: useScrollMove("about me"),
    2: useScrollMove("skills"),
    3: useScrollMove("archiving"),
    4: useScrollMove("project"),
  };

  useEffect(() => {
    setProps(tabs);
  }, []);

  return (
    <>
      <Header event={props} />
      <main>
        <section ref={tabs[0].element}>
          <Main goAbout={tabs[1]} />
        </section>
        <section ref={tabs[1].element}>
          <About />
        </section>
        <section ref={tabs[2].element}>
          <Skills />
        </section>
        {/* <section ref={tabs[3].element}>
          <Archiving />
        </section> */}
        <section ref={tabs[4].element}>
          <Project />
        </section>
        <div className="up-icon">
          <UpIcon size={40} />
        </div>
      </main>
      <Footer />
    </>
  );
}
