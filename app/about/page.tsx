import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hon. Cynthia Jepkosgei Muge — from Kipsirichoi village to the National Assembly.",
};

const education = [
  { level: "Primary", school: "Kapchemoiywo Primary School", years: "1998 – 2007", note: "KCPE" },
  { level: "Secondary", school: "Moi Girls Isinya", years: "2008 – 2011", note: "KCSE" },
  { level: "Bachelor's", school: "Urban and Regional Planning, University of Nairobi", years: "2012 – 2016", note: "" },
  { level: "Master's", school: "Project Planning and Management, University of Nairobi", years: "2018 – 2020", note: "" },
];

const timeline = [
  {
    year: "2017",
    title: "Elected at 24, as an independent",
    body: "Won the Kilibwoni Ward seat in the County Assembly, running as an independent against the pre-election favourite.",
    pivot: true,
  },
  {
    year: "2017 – 22",
    title: "Committee leadership",
    body: "Chaired the Sports, Youth and Social Welfare Committee. Served on Trade and Investments, Appointments, Liaison, and Public Investments and Accounts.",
  },
  {
    year: "2022",
    title: "Woman Representative, Nandi County",
    body: "Elected with 275,500 votes on a UDA ticket. Sits on the Committee on Implementation and the Health Committee.",
    pivot: true,
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <header className="border-b-2 border-[var(--color-ink)] pb-8 pt-14">
        <p className="eyebrow">Woman Representative, Nandi County</p>
        <h1 className="display mt-4 text-[3rem] sm:text-[4rem]">
          Hon. Cynthia<br />Jepkosgei Muge
        </h1>
        <p className="mt-5 max-w-[56ch] text-[1.1875rem] leading-relaxed text-[var(--color-soft)]">
          Born in 1993 in Kipsirichoi village, Kilibwoni Ward, Emgwen
          Constituency. The eldest of six.
        </p>
      </header>

      <section className="pt-14">
        <h2 className="display text-[2.125rem]">The journey</h2>
        <ol className="mt-7 border-t-2 border-[var(--color-rule)]">
          {timeline.map((t) => (
            <li
              key={t.year}
              className="grid gap-5 border-b border-[var(--color-rule)] py-6 sm:grid-cols-[8rem_1fr]"
            >
              <p
                className={`font-mono text-[0.8125rem] font-medium uppercase tracking-[0.06em] ${
                  t.pivot ? "text-[var(--color-murram)]" : "text-[var(--color-faint)]"
                }`}
              >
                {t.year}
              </p>
              <div>
                <h3 className="text-[1.0625rem] font-bold">{t.title}</h3>
                <p className="mt-1.5 max-w-[62ch] leading-relaxed text-[var(--color-soft)]">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pt-14">
        <h2 className="display text-[2.125rem]">Education</h2>
        <div className="mt-6 overflow-x-auto rounded border border-[var(--color-rule)]">
          <table className="w-full min-w-[32rem] border-collapse text-[0.9375rem]">
            <thead>
              <tr className="bg-[var(--color-sunk)]">
                {["Level", "Institution", "Years", ""].map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="border-b border-[var(--color-rule-firm)] px-4 py-3 text-left text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-[var(--color-faint)]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {education.map((e) => (
                <tr key={e.level} className="border-b border-[var(--color-rule)] last:border-0">
                  <th scope="row" className="whitespace-nowrap px-4 py-3 text-left font-bold">
                    {e.level}
                  </th>
                  <td className="px-4 py-3 text-[var(--color-soft)]">{e.school}</td>
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-[0.8125rem] text-[var(--color-faint)]">
                    {e.years}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-faint)]">{e.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="pt-14">
        <h2 className="display text-[2.125rem]">Family</h2>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-[var(--color-soft)]">
          Married to Mr Mathew Rotich. With two sons.
        </p>
      </section>
    </div>
  );
}
