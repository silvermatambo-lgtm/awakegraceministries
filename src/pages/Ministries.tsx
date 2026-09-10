import PageHero from '../components/PageHero';
import { weeklyMeetings } from '../data';
import { Users, BookOpen, Music, Heart, Baby, UserRound } from 'lucide-react';

export default function Ministries() {
  const items = [
    [Music, 'Sunday Worship', 'Gather with us for worship, preaching, prayer and fellowship in Ashford and Leicester.'],
    [Users, 'Youth – Tuesdays', 'Weekly youth gathering every Tuesday from 8:30 PM to 9:30 PM.'],
    [BookOpen, 'Bible Study – Wednesdays', 'Study the Bible together every Wednesday from 8:00 PM to 9:00 PM.'],
    [UserRound, 'Victorious Women – Thursdays', 'Women gather every Thursday from 9:00 PM to 10:00 PM for encouragement, prayer and fellowship.'],
    [Heart, 'Prayer & Intercession', 'A ministry of prayer for individuals, families, the church and wider community.'],
    [Baby, "Children's Ministry", 'A dedicated Sunday platform designed to help children learn, participate and grow in faith.'],
  ];

  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title="Faith for every generation, every week."
        text="Explore the worship, discipleship, women, youth, children and prayer ministries that make up the weekly life of Awake Grace Ministries International – UK."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(([Icon, title, description]: any) => (
            <div className="card" key={title}>
              <Icon className="text-purple-600 mb-5" size={30} />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mt-3">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#07102b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Midweek rhythm</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {weeklyMeetings.map((meeting) => (
              <div key={meeting.title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="text-amber-300 text-xs uppercase tracking-widest font-bold">{meeting.day}</span>
                <h3 className="text-2xl font-bold mt-2">{meeting.title}</h3>
                <p className="text-sky-300 font-bold mt-2">{meeting.time}</p>
                <p className="text-slate-400 text-sm mt-4">{meeting.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
