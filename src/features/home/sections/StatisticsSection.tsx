import CountUp from "react-countup";
import { RevealCenter } from "@/components/animations/RevealCenter.tsx";

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
    StatisticName: "admin Completed",
    count: 4,
  },
];

export function StatisticsSection() {
  return (
    <RevealCenter>
      <section className=" mx-auto    max-w-[1400px] px-5 py-20  text-center  sm:py-32 ">
        <div
          className={
            "mb-14 flex flex-col items-center justify-center font-bold "
          }
        >
          <h1 className={"mb-6 text-4xl"}>Insights and Achievements</h1>
          <p
            className={
              "mb-14 max-w-[500px] text-center text-sm text-gray-primary "
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
    <div
      className={
        "md: grid grid-cols-2  gap-4 sm:gap-8 md:gap-x-16 md:gap-y-12 lg:grid-cols-4 lg:gap-16"
      }
    >
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
    <div
      className={
        "relative flex flex-col justify-center rounded-3xl border-2  border-white p-4 "
      }
    >
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
