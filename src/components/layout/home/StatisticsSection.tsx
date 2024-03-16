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
    StatisticName: "Projects Completed",
    count: 4,
  },
];

export function StatisticsSection() {
  return (
    <RevealCenter>
      <section className=" px-5   py-32 md:max-w-[1400px] mx-auto  text-center ">
        <div className={"flex justify-center flex-col items-center mb-14"}>
          <h1 className={"text-4xl font-bold mb-6 pt-10"}>
            Insights and Achievements
          </h1>
          <p
            className={
              "text-sm text-center text-gray-primary mb-14 sm:max-w-[500px] "
            }
          >
            Discover the impact of my contributions through numbers
          </p>
        </div>
        <div className={"flex justify-center flex-col items-center "}>
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
    <div className={" rounded-3xl border-2 border-white p-4 relative "}>
      <div
        className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px"
        style={{
          boxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.2)",
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0) 100%)",
        }}
      />

      <p className={"text-4xl font-bold mb-4"}>
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
