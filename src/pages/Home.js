import React, { useRef } from "react";
import { useState } from "react";
import HomeNavBar from "../components/HomeNavBar";
import HomeFooter from "../components/HomeFooter";
import "./css/Home.css";
import { IoArrowForward, IoChevronBack, IoChevronDown, IoChevronForwardOutline } from "react-icons/io5";
import topImg from "../Images/hero_image.png";
import flex1Img from "../Images/flex1Img.webp";
import flexImg2 from "../Images/flexImg2.webp";
import flexImg3 from "../Images/flexImg3.webp";
import flexImg4 from "../Images/flexImg4.webp";
import flexImg5 from "../Images/flexImg5.webp";
import sec3Img1 from "../Images/sec3Img1.png";
import sec3Img2 from "../Images/sec3Img2.png";
import sec3Img3 from "../Images/sec3Img3.png";
import sec4Img from "../Images/phoneV2.png";

function Home() {

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <section className="Homesection1">
        <HomeNavBar/>
        <div className="top_banner">
          <div className="top_banner_left">
            <h1>Do your best work, supported by your subscribers</h1>
            <div className="Substack_lets">Substack lets independent writers and podcasters publish directly to their audience and get paid through subscriptions.</div>
            <div class="top_banner_left_btns">
              <button className="top_banner_left_btn1">Create your Substack</button>
              <button className="top_banner_left_btn2">Find Substacks to read</button>
            </div>
          </div>
          <div>
            <img src={topImg} alt="" />
          </div>
        </div>
      </section>
      <section className="Homesection2">
        <div className="home_section2">
          <div className="home_section2_content">
            <h2 className="home_section2_content_h2">
              The subscription network for independent writers and creators
            </h2>

            <div className="scrollbar_container">
              <div className="section-bar overflow-right" ref={scrollContainerRef}>
                <div className="overflow-items">
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Featured</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Culture</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Poliics</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Technology</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Business</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Finance</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Food & Drinks</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Podcasts</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Sports</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Art & illustration</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Fashion & Beauty</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">News</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Music</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Faith & Spirituality</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Climate</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Science</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Health & Wellness</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Literature</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Fiction</span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Design</span>
                    </a>
                  </div> <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Travel</span>
                    </a>
                  </div> <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Parenting</span>
                    </a>
                  </div> <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Philosophy</span>
                    </a>
                  </div> <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Comics</span>
                    </a>
                  </div> <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">International</span>
                    </a>
                  </div> <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Crypto</span>
                    </a>
                  </div> <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">History</span>
                    </a>
                  </div> <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Humor</span>
                    </a>
                  </div> <div class="menu-item">
                    <a role="button">
                      <span class="overflow-item-text">Education</span>
                    </a>
                  </div>
                </div>
                <div class="left-button">
                  <div role="button" class="scroll-button-hitbox" onClick={scrollLeft}>
                    <IoChevronBack />
                  </div>
                </div>
                <div class="right-button">
                  <div role="button" class="scroll-button-hitbox" onClick={scrollRight}>
                    <IoChevronForwardOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="HomepageLeaderboardWrapper">
            <div className="HomepageLeaderboardWrapper_1">
              <div className="no_1">1</div>
              <div className="HomepageLeaderboardWrapper_left flex1">
                <div className="divForImg">
                  <picture>
                    <img src={flex1Img} alt="" />
                  </picture>
                </div>
                <a href="#">
                  <div className="divForTxt Fortxt">
                    <h4>Demography Unplugged</h4>
                    <h5>Demography Unplugged</h5>
                  </div>
                </a>
              </div>
              <div className="HomepageLeaderboardWrapper_right">
                <div className="playingTxt hplwtxttop">
                  Breaking down demographic, economic, and generational trends with Neil Howe. Featuring podcasts, videos, Q&A sessions, and more.              </div>
                <div className="playingTxt hplwtxtbottom">
                  Launched 5 months ago · $15/month
                </div>
              </div>
            </div>

            <div className="HomepageLeaderboardWrapper_1">
              <div className="no_1">2</div>
              <div className="HomepageLeaderboardWrapper_left flex1">
                <div className="divForImg">
                  <picture>
                    <img src={flexImg2} alt="" />
                  </picture>
                </div>
                <a href="#">
                  <div className="divForTxt Fortxt">
                    <h4>Rated R: Radek's Uncensored Thoughts on European Freedom</h4>
                    <h5>Radek Sikorski</h5>
                  </div>
                </a>
              </div>
              <div className="HomepageLeaderboardWrapper_right">
                <div className="playingTxt hplwtxttop">
                  News and opinions from the frontlines of European politics: Ukraine, Poland, EU, EU-USA; Warsaw, Kyiv, Brussels, London, Washington
                </div>
                <div className="playingTxt hplwtxtbottom">
                  Launched 15 days ago · $8/month
                </div>
              </div>
            </div>

            <div className="HomepageLeaderboardWrapper_1">
              <div className="no_1">3</div>
              <div className="HomepageLeaderboardWrapper_left flex1">
                <div className="divForImg">
                  <picture>
                    <img src={flexImg3} alt="" />
                  </picture>
                </div>
                <a href="#">
                  <div className="divForTxt Fortxt">
                    <h4>
                      Fabrizio Romano's Daily Briefing
                    </h4>
                    <h5>
                      Rocket Sports Internet
                    </h5>
                  </div>
                </a>
              </div>
              <div className="HomepageLeaderboardWrapper_right">
                <div className="playingTxt hplwtxttop">
                  Every morning I will round up the most important news in football, providing you with exclusive insight, inside stories and everything you need to know for the day ahead.
                </div>
                <div className="playingTxt hplwtxtbottom">
                  Thousands of paid subscribers · $5/month
                </div>
              </div>
            </div>


            <div className="HomepageLeaderboardWrapper_1">
              <div className="no_1">4</div>
              <div className="HomepageLeaderboardWrapper_left flex1">
                <div className="divForImg">
                  <picture>
                    <img src={flexImg4} alt="" />
                  </picture>
                </div>
                <a href="#">
                  <div className="divForTxt Fortxt">
                    <h4>Gather with Yasmine Cheyenne</h4>
                    <h5>Yasmine Cheyenne </h5>
                  </div>
                </a>
              </div>
              <div className="HomepageLeaderboardWrapper_right">
                <div className="playingTxt hplwtxttop">
                  Gather is like brunch with your friends, where all topics are on the table. I connect books, writing, healing, health, and life as a Self-Healing educator and Author.
                </div>
                <div className="playingTxt hplwtxtbottom">
                  Launched 9 days ago · $5/month
                </div>
              </div>
            </div>
            <div className="HomepageLeaderboardWrapper_1">
              <div className="no_1">5</div>
              <div className="HomepageLeaderboardWrapper_left flex1">
                <div className="divForImg">
                  <picture>
                    <img src={flexImg5} alt="" />
                  </picture>
                </div>
                <a href="#">
                  <div className="divForTxt Fortxt">
                    <h4>The Rot</h4>
                    <h5> cass marketos</h5>
                  </div>
                </a>
              </div>
              <div className="HomepageLeaderboardWrapper_right">
                <div className="playingTxt hplwtxttop">
                  A newsletter about all things compost
                </div>
                <div className="playingTxt hplwtxtbottom">
                  Launched a year ago · $5/month
                </div>
              </div>
            </div>
          </div>

          <div className="SeeWhoElseIsOnSubstack">
            <button>See who else is on Substack</button>
          </div>
        </div>
      </section>

      <section className="Homesection3">
        <div className="home_section3">
          <div className="home_section3_flex">
            <h2>Building a new economic engine for culture</h2>
            <div className="sec3Maintxt">
              <div className="sec3Maintxt1">
                <img src={sec3Img1} alt="" />
                <div className="sec3Maintxt1_left">
                  <div className="sec3Maintxt1_left_h3">
                    <h3>You wrote it, you own it.</h3>
                  </div>
                  <div className="sec3Maintxt1_left_main">
                    You always own your intellectual property, mailing list, and subscriber payments. With full editorial control and no gatekeepers, you can do the work you most believe in.
                  </div>
                  <a href="#">
                    <div className="sec3Maintxt1_left_link">
                      <div>Create your Substack</div>
                      <IoArrowForward className="sec3Maintxt1_left_linkIcon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="sec3Maintxt">
              <div className="sec3Maintxt1">
                <img src={sec3Img2} alt="" />
                <div className="sec3Maintxt1_left">
                  <div className="sec3Maintxt1_left_h3">
                    <h3>Grow your audience..</h3>
                  </div>
                  <div className="sec3Maintxt1_left_main">
                    Grow your audience.
                    Marketing isn’t all on your shoulders. More than 40% of all new free subscriptions and around 20% of paid subscriptions to Substacks come from within our network.
                  </div>
                  <a href="#">
                    <div className="sec3Maintxt1_left_link">
                      <div>Create your Substack</div>
                      <IoArrowForward className="sec3Maintxt1_left_linkIcon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="sec3Maintxt">
              <div className="sec3Maintxt1">
                <img src={sec3Img3} alt="" />
                <div className="sec3Maintxt1_left">
                  <div className="sec3Maintxt1_left_h3">
                    <h3>Let us handle everything else.</h3>
                  </div>
                  <div className="sec3Maintxt1_left_main">
                    A Substack combines a blog, newsletter, payment system, and customer support team — all integrated seamlessly with a simple interface. We handle the admin, billing, and tech so you can focus on your best work.
                  </div>
                  <a href="#">
                    <div className="sec3Maintxt1_left_link">
                      <div>Create your Substack</div>
                      <IoArrowForward className="sec3Maintxt1_left_linkIcon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Homesection4">
        <div className="homesection4outerdiv">
          <div className="homesection4maindiv">
            <h2>A world-class reading and listening experience</h2>
            <div className="Homesec4ImgAndTxt">
              <img src={sec4Img} alt="" />
              <div className="sec4txt">
                <div className="Homesec4txt1">
                  <button onClick={toggleText}>
                    <IoChevronDown className="Homesec4txt1downImg" />
                  </button>
                  <button>
                    <h3>Posts</h3>
                  </button>
                  <div style={{ opacity: showText ? 1 : 0 }}>
                    Substack’s simple system lets you publish to the web, email, and our app simultaneously so you can find new readers and always reach your existing audience.
                  </div>
                  <a href="#">
                    <div className="sec3Maintxt1_left_link">
                      <div>Create your Substack</div>
                      <IoArrowForward className="sec3Maintxt1_left_linkIcon" />
                    </div>
                  </a>
                </div>

                <div className="Homesec4txt1">
                  <button onClick={toggleText}>
                    <IoChevronDown className="Homesec4txt1downImg" />
                  </button>
                  <button>
                    <h3>Podcasts</h3>
                  </button>
                  <div style={{ opacity: showText ? 1 : 0 }}>
                    Substack’s simple system lets you publish to the web, email, and our app simultaneously so you can find new readers and always reach your existing audience.
                  </div>
                  <a href="#">
                    <div className="sec3Maintxt1_left_link">
                      <div>Create your Substack</div>
                      <IoArrowForward className="sec3Maintxt1_left_linkIcon" />
                    </div>
                  </a>
                </div>

                <div className="Homesec4txt1">
                  <button onClick={toggleText}>
                    <IoChevronDown className="Homesec4txt1downImg" />
                  </button>
                  <button>
                    <h3>Videos</h3>
                  </button>
                  <div style={{ opacity: showText ? 1 : 0 }}>
                    Substack’s simple system lets you publish to the web, email, and our app simultaneously so you can find new readers and always reach your existing audience.
                  </div>
                  <a href="#">
                    <div className="sec3Maintxt1_left_link">
                      <div>Create your Substack</div>
                      <IoArrowForward className="sec3Maintxt1_left_linkIcon" />
                    </div>
                  </a>
                </div>

                <div className="Homesec4txt1">
                  <button onClick={toggleText}>
                    <IoChevronDown className="Homesec4txt1downImg" />
                  </button>
                  <button>
                    <h3>Community</h3>
                  </button>
                  <div style={{ opacity: showText ? 1 : 0 }}>
                    Substack’s simple system lets you publish to the web, email, and our app simultaneously so you can find new readers and always reach your existing audience.
                  </div>
                  <a href="#">
                    <div className="sec3Maintxt1_left_link">
                      <div>Create your Substack</div>
                      <IoArrowForward className="sec3Maintxt1_left_linkIcon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Homesection5">
        <div className="Homesection5Outerdiv">
          <div className="Homesection5Maindiv">
            <div className="Homesection5TxtAndBtn">
              <div className="Homesection5Txt">
                <h4>I can still remember standing in the kitchen in March 2020 and watching the first $1.00 I made come through,
                  from sharing my own research. A year later and it’s now my full-time ‘job’.
                </h4>
                <div>
                  - Conor Mac, Investment Talk
                </div>
              </div>
              <button className="createYsubstack">Create Your Substack</button>
            </div>
          </div>
        </div>
      </section>

      <section className="homesection6">
        <div className="homesection6OuterDiv">
          <div className="homesection6MainDiv">
            <h2>Substack basics</h2>
            <div className="homesection6Txtdiv">
              <div className="homesection6Txt1">
                <h3>What is a Substack?</h3>
                <div className="homesection6Txt1_right">
                  <div>
                    Substack helps anyone set up a blog and email newsletter. No tech knowledge is required. Without ads and algorithms to get in the way, you can sustain a direct relationship with your readers and retain full control over your creative work.
                  </div>
                </div>
              </div>

              <div className="homesection6Txt1">
                <h3>Do I need to pay for Substack?</h3>
                <div className="homesection6Txt1_right">
                  <div>
                    It’s free to get started on Substack. If you turn on paid subscriptions, Substack will keep a 10% cut of revenues for operating costs like development and customer support. There are no hidden fees and we only make money when writers do.                  </div>
                </div>
              </div>

              <div className="homesection6Txt1">
                <h3>Do I own what I publish on Substack?</h3>
                <div className="homesection6Txt1_right">
                  <div>
                    You will always own your content and your relationships with your subscribers. We make it easy to import and export your archive, email list, and payments information to and from other platforms.                  </div>
                </div>
              </div>

              <div className="homesection6Txt1">
                <h3>Will Substack help me grow my audience?</h3>
                <div className="homesection6Txt1_right">
                  <div>
                    Yes. More than 40% of all new free subscriptions and around 20% of paid subscriptions to Substacks come from within our network.                  </div>
                </div>
              </div>

              <div className="homesection6Txt1">
                <h3>How do I move my past work to Substack?</h3>
                <div className="homesection6Txt1_right">
                  <div>
                    If you already have an audience on Wordpress, Mailchimp, Ghost, Medium, Tumblr, or another platform, you can easily import your posts and your email list in the Substack setup process.                  </div>
                </div>
              </div>
              <div className="homesection6Txt1">
                <h3>What is a Substack?</h3>
                <div className="homesection6Txt1_right">
                  <div>
                    Substack helps anyone set up a blog and email newsletter. No tech knowledge is required. Without ads and algorithms to get in the way, you can sustain a direct relationship with your readers and retain full control over your creative work.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeSection7">
        <div className="homeSection7Outerdiv">
          <div className="homeSection7MainDiv">
            <div className="homeSection7txt">
              <h2>Get started in minutes</h2>
              <button className="createYsubstack">Create Your Substack</button>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />

    </div>
  );
}

export default Home;