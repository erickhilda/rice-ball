import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          Story
        </h2>

        <div className="mt-2">
          <p className="text-slate-800 dark:text-slate-200">
            “With grace and dignity” he said to himself.
            <br />
            After which he tripped and fell.
          </p>

          <br />

          <p className="text-sm text-slate-800 dark:text-slate-200">
            <a
              href="https://twosentencestories.com/walking-through-life/"
              className="underline"
            >
              Walking through Life
            </a>
            , a two sentence story
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
