import type { NextPage } from "next";
import Layout from "../components/layout";

const Topping: NextPage = () => {
  return (
    <Layout>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          Story
        </h2>

        <div className="mt-2">
          <p className="text-slate-800 dark:text-slate-200">
            I confess that when this all started, you were like a picture
            out of focus to me. And it took time for my eyes to adjust to you,
            to make sense of you, to really recognize you.
          </p>

          <br />

          <p className="text-sm text-slate-800 dark:text-slate-200">
            <a
              href="https://twosentencestories.com/vision"
              className="underline"
            >
              Vision
            </a>
            , a two sentence story
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Topping;
