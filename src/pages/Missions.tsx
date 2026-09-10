import PageHero from '../components/PageHero';
import { Globe2, HeartHandshake, Package, Users } from 'lucide-react';

export default function Missions() {
  const missionItems = [
    [Globe2, 'Africa Missions', 'Missionary work and ministry support in Zambia and Zimbabwe.'],
    [HeartHandshake, 'UK Charity Work', 'Practical community service and charity activity within the UK.'],
    [Package, 'Food Bank Support', 'Supporting the Church of England food bank and related charitable work.'],
    [Users, 'Volunteer With Us', 'Opportunities for members and friends to serve through community initiatives.'],
  ] as const;

  return (
    <>
      <PageHero
        eyebrow="Missions & Community"
        title="Serving in the UK, Zambia and Zimbabwe."
        text="Our ministry extends beyond weekly services through missionary work, charity, volunteering and practical care for people in local and overseas communities."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="kicker">Beyond Our Walls</span>
            <h2 className="title mt-2">Grace that becomes practical love.</h2>
            <p className="text-slate-600 mt-5 leading-relaxed">
              Awake Grace Ministries International carries out missionary work in Africa, including Zambia and Zimbabwe. We also participate in charity and volunteer work in the UK and overseas.
            </p>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Our community support includes assistance to the Church of England food bank and other charitable initiatives.
            </p>
          </div>
          <img
            src="/images/women-group.jpg"
            alt="Awake Grace Ministries community outreach"
            className="rounded-[2rem] w-full h-[450px] object-cover"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {missionItems.map(([Icon, title, description]) => (
            <div className="card" key={title}>
              <Icon className="text-sky-500 mb-4" />
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
