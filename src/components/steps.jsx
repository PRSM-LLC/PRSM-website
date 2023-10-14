import { FiMonitor, FiSave, FiSearch } from "react-icons/fi";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
  PiNumberCircleFourLight,
} from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FEATURES = [
  {
    title: "Kickstart Your Digital Journey",
    Icon: PiNumberCircleOneLight,
    Feature: () => (
      <ExampleFeature Icon={PiNumberCircleOneLight} step="select" />
    ),
  },
  {
    title: "Expertly Crafted with Collaborative Iterations",
    Icon: PiNumberCircleTwoLight,
    Feature: () => (
      <ExampleFeature Icon={PiNumberCircleTwoLight} step="iterate" />
    ),
  },
  {
    title: "Witness Your Digital Journey Unfold",
    Icon: PiNumberCircleThreeLight,
    Feature: () => (
      <ExampleFeature Icon={PiNumberCircleThreeLight} step="receive" />
    ),
  },
  {
    title: "Unparalleled Support for Continuous Growth",
    Icon: PiNumberCircleFourLight,
    Feature: () => (
      <ExampleFeature Icon={PiNumberCircleFourLight} step="support" />
    ),
  },
];

const TabsFeatures = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <section className="p-4 h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl my-20 max-w-1/2 text-center font-bold">
          Our Approach to Crafting Your{" "}
          <span className="text-blue-400">Digital Presence</span>
        </h1>
        <div className="w-3/4 h-1/2 ">
          <Tabs selected={selected} setSelected={setSelected} />

          <AnimatePresence mode="wait">
            {FEATURES.map((tab, index) => {
              return selected === index ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  key={index}
                >
                  <tab.Feature />
                </motion.div>
              ) : undefined;
            })}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="custom-scrollbar flex overflow-x-scroll">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            Icon={tab.Icon}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, Icon, title, setSelected, tabNum }) => {
  return (
    <div className="relative w-full flex flex-col">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full flex-row items-center justify-center gap-4 border-b-4 border-slate-200 bg-white p-6 transition-colors hover:bg-slate-100 md:flex-col h-[160px]"
      >
        <span
          className={`rounded-lg bg-gradient-to-br from-indigo-700 from-10% to-indigo-500 p-3 text-4xl text-white shadow-indigo-400 transition-all duration-300 ${
            selected
              ? "scale-110 opacity-100 shadow-lg"
              : "scale-90 opacity-50 shadow"
          }`}
        >
          <Icon />
        </span>
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-sm text-slate-800 transition-opacity md:text-center ${
            selected ? "opacity-100" : "opacity-50"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-indigo-600"
        />
      )}
    </div>
  );
};

const ExampleFeature = ({ Icon, step }) => {
  let content;

  switch (step) {
    case "select":
      content = (
        <>
          <p className="font-mono text-xl text-slate-200">
            <span className="text-blue-400">$ list-plans</span>
            <br />
            &gt; <span className="text-green-500">01</span> Basic Web Package -
            Best for startups and new businesses!
            <br />
            &gt; <span className="text-green-500">02</span> Advanced Web and
            Marketing Package - Perfect for scaling businesses!
            <br />
            &gt; <span className="text-green-500">03</span> Premium Marketing
            Package - Get maximum online exposure!
            <br />
            <br />
            <span className="text-blue-400">
              $ select-plan &quot;Advanced Web and Marketing Package&quot;
            </span>
            <br />
            &gt;{" "}
            <span className="text-yellow-500">
              Plan &quot;Advanced Web and Marketing Package&quot; selected!
            </span>{" "}
            Kickstart your online journey.
          </p>
        </>
      );
      break;

    case "iterate":
      content = (
        <>
          <p className="font-mono text-xl text-slate-200">
            <span className="text-blue-400">&gt; $ check-design-progress</span>
            <br />
            &gt; Current design:{" "}
            <span className="text-yellow-400">75% complete</span>.
            <br />
            &gt; Pending feedback:{" "}
            <span className="text-red-500">
              &quot;Increase logo size, change color palette.&quot;
            </span>
            <br />
            &gt; Pro insights:{" "}
            <span className="text-white">
              &quot;Optimize images for faster load times, Implement responsive
              design for better mobile view.&quot;
            </span>
            <br />
            <br />
            <span className="text-blue-400">
              &gt; $ request-revision &quot;Increase logo size, change color
              palette.&quot;
            </span>
            <br />
            &gt; <span className="text-green-500">Revision noted</span>. Our
            expert team will implement the requested changes.
            <br />
            <span className="text-blue-400">
              &gt; $ apply-pro-insights &quot;Optimize images, Implement
              responsive design.&quot;
            </span>
            <br />
            &gt; <span className="text-green-500">Insights applied</span>.
            Leveraging professional insights for a superior user experience.
            <br />
            <br />
            &gt; Our Pro Tip:{" "}
            <span className="text-purple-400">
              &quot;Considering the latest trends, we recommend X, Y, and
              Z&quot;
            </span>
            <br />
            &gt; Status:{" "}
            <span className="text-yellow-400">
              Finalizing design with enhanced features
            </span>
            .
            <br />
            &gt; ETA:{" "}
            <span className="text-green-500">2 days to completion!</span>
          </p>
        </>
      );
      break;

    case "receive":
      content = (
        <>
          <p className="font-mono text-xl text-slate-200">
            <span className="text-blue-400">$ fetch-final-product</span>
            <br />
            &gt; <span className="text-yellow-400">Downloading...</span>
            <br />
            &gt;{" "}
            <span className="text-green-500">
              Final product delivered successfully!
            </span>{" "}
            Welcome to your new digital space.
            <br />
            <br />
            &gt; Included with your delivery: Full documentation, Source files,
            and a User guide to help you get started.
            <br />
            &gt;{" "}
            <span className="text-blue-400">
              $ schedule-orientation &quot;Introduction to your new digital
              space&quot;
            </span>
            <br />
            &gt; <span className="text-green-500">
              Orientation scheduled!
            </span>{" "}
            Our team is excited to walk you through your new product.
            <br />
            <br />
            &gt; Reminder:{" "}
            <span className="text-red-500">
              Our support doesn’t end with the delivery yet.
            </span>{" "}
            Reach out for any queries or support needs.
            <br />
            &gt; Looking forward:{" "}
            <span className="text-purple-400">
              Let&apos;s continue to collaborate and grow your digital presence
              together!
            </span>
            <br />
            <br />
            &gt; <span className="text-blue-400">$ explore-upgrades</span>
            <br />
            &gt;{" "}
            <span className="text-yellow-400">
              Fetching available upgrades and enhancements...
            </span>
            <br />
            &gt; <span className="text-green-500">
              Explore new features
            </span>{" "}
            and enhancements to keep your digital space state-of-the-art!
          </p>
        </>
      );
      break;
    case "support":
      content = (
        <>
          <p className="font-mono text-xl text-slate-200">
            <span className="text-blue-400">
              $ request-support &quot;Issue with homepage loading speed.&quot;
            </span>
            <br />
            &gt; <span className="text-yellow-500">Support ticket opened</span>.
            Our dedicated team is on it!
            <br />
            <br />
            <span className="text-blue-400">$ check-growth-strategies</span>
            <br />
            &gt; SEO improvements, social media campaigns, email marketing
            strategies,
            <span className="text-yellow-400"> and more.</span>
            <br />
            &gt; Boost your sales and engagement with our{" "}
            <span className="text-green-500">expert strategies</span>!
            <br />
            <br />
            <span className="text-blue-400">
              $ apply-strategy &quot;SEO improvements&quot;
            </span>
            <br />
            &gt; Elevate your online presence with our{" "}
            <span className="text-green-500">best-in-class SEO practices</span>.
            <br />
            <br />
            &gt; Need a deeper dive into support and growth?{" "}
            <span className="text-red-500">Book a consultation call!</span>
            <br />
            <span className="text-blue-400">
              $ book-consultation &quot;Preferred Date&quot;
            </span>
            <br />
            &gt; <span className="text-green-500">
              Consultation scheduled!
            </span>{" "}
            Our team is excited to connect and discuss your growth
            opportunities.
          </p>
        </>
      );
      break;
    default:
      content = <p>Step not recognized.</p>;
  }

  return (
    <div className="w-full px-0 py-8 md:px-8 ">
      <div
        className="relative h-[55rem] sm:h-128 w-full rounded-xl bg-slate-800 shadow-xl "
        style={{ zIndex: "1" }}
      >
        <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3 ">
          <div className="h-3 w-3 rounded-full bg-red-500 " />
          <div className="h-3 w-3 rounded-full bg-yellow-500 " />
          <div className="h-3 w-3 rounded-full bg-green-500 " />
        </div>
        <div style={{ zIndex: "0" }} className="space-y-2 p-2 z-10">
          {content}
        </div>

        <span
          style={{ zIndex: "-1" }}
          className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700"
        >
          <Icon />
        </span>
      </div>
    </div>
  );
};

export default TabsFeatures;
