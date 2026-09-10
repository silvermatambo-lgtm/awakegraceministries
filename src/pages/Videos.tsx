import PageHero from '../components/PageHero';

const facebookPage = 'https://www.facebook.com/awakegraceministries/?locale=en_GB';
const facebookEmbed = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fawakegraceministries%2F&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true';

export default function Videos(){
  return <>
    <PageHero
      eyebrow="Watch & Listen"
      title="Worship, teaching and ministry moments."
      text="Watch recent ministry updates, worship moments, messages and event highlights from Awake Grace Ministries International – UK."
    />
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="kicker">From Our Facebook Ministry</span>
          <h2 className="title mt-2">Latest videos and ministry updates</h2>
          <p className="text-slate-600 mt-4 leading-relaxed">Our Facebook feed is displayed directly below so new public ministry videos and posts can appear here without rebuilding the website each time.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="card overflow-hidden !p-3">
            <div className="rounded-2xl overflow-hidden bg-white min-h-[700px] flex justify-center">
              <iframe
                src={facebookEmbed}
                width="500"
                height="700"
                style={{border:'none',overflow:'hidden',width:'100%',maxWidth:'500px'}}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Awake Grace Ministries Facebook feed"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="card bg-[#07102b] text-white">
              <span className="text-amber-300 text-xs uppercase tracking-[.2em] font-bold">Featured Ministry Media</span>
              <h3 className="text-3xl font-black mt-3">Watch messages, worship and church highlights</h3>
              <p className="text-slate-300 mt-4 leading-relaxed">Follow our ministry media from Ashford, Leicester, conferences, worship services, missions and community outreach.</p>
              <a href={facebookPage} target="_blank" rel="noreferrer" className="church-btn-alt mt-6">Open Facebook Videos</a>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold">More videos coming here</h3>
              <p className="text-slate-500 mt-3 leading-relaxed">This page is ready for individual Facebook video embeds. Once direct Facebook video-post links are supplied, they can be placed here as dedicated video players while keeping the live Facebook feed above.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}
