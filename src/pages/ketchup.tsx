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
            Loyal but empty, she sat slumped in the hospital’s chair and
            watched her mother slip away. For the first time she could remember,
            she felt like she could finally breathe.
          </p>

          <br />

          <p className="text-sm text-slate-800 dark:text-slate-200">
            <a
              href="https://twosentencestories.com/just-breathe/"
              className="underline"
            >
              Just Breathe
            </a>
            , a two sentence story
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Topping;
