import CountUp from "react-countup";
import { RevealCenter } from "@/ui/animations/RevealCenter.tsx";

interface StatisticProps {
  StatisticName: string;
  count: number;
}

const StatisticData: StatisticProps[] = [
  {
    StatisticName: "Certificates Earned",
    count: 8,
  },
  {
    StatisticName: "Articles Published",
    count: 22,
  },

  // {
  //   StatisticName: "Tutorials Shared",
  //   count: 46,
  // },
  {
    StatisticName: "Skills Mastered",
    count: 15,
  },

  {
    StatisticName: "Projects Completed",
    count: 4,
  },
];

export function StatisticsSection() {
  return (
    <RevealCenter>
      <section className=" mx-auto    px-5 py-20 text-center  sm:py-32  md:max-w-[1400px] ">
        <div className={"mb-14 flex flex-col items-center justify-center"}>
          <h1 className={"mb-6 pt-10 text-4xl font-bold"}>
            Insights and Achievements
          </h1>
          <p
            className={
              "mb-14 text-center text-sm font-bold   text-gray-primary sm:max-w-[500px] "
            }
          >
            Uncover the profound impact of my contributions, quantified through
            tangible numbers and measurable results.
          </p>
        </div>
        <div className={"flex flex-col items-center justify-center "}>
          <Statistics />
        </div>
      </section>
    </RevealCenter>
  );
}

function Statistics() {
  return (
    <div className={"grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-16"}>
      {StatisticData.map((StatisticDatum) => (
        <Statistic
          statistic={StatisticDatum}
          key={StatisticDatum.StatisticName}
        />
      ))}
    </div>
  );
}

interface StatisticComponentProps {
  statistic: StatisticProps;
}

function Statistic({ statistic }: StatisticComponentProps) {
  return (
    <div className={" relative rounded-3xl border-2 border-white p-4 "}>
      <div
        className="absolute inset-x-0 -top-px mx-auto h-px w-1/2"
        style={{
          boxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.2)",
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0) 100%)",
        }}
      />

      <p className={"mb-4 text-4xl font-bold"}>
        <CountUp
          duration={6}
          end={statistic.count}
          scrollSpyOnce={true}
          enableScrollSpy={true}
        />
        +
      </p>
      <p className={"text-base font-bold"}> {statistic.StatisticName}</p>
    </div>
  );
}
