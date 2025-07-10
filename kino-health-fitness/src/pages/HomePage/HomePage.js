import React from "react";
import "./HomePage.css";
import LandingImage from "../../images/HomePageImages/DoctorHoldingIphoneLandingImage.png";
import DartmouthLogo from "../../images/HomePageImages/DartmouthLogo.png";
import OhioStateLogo from "../../images/HomePageImages/OhioStateLogo.png";
import PenningtonLogo from "../../images/HomePageImages/PenningtonLogo.png";
import TsukubaLogo from "../../images/HomePageImages/TsukubaLogo.png";
import AlexImage from "../../images/HomePageImages/AlexMcIntyreMD.png";
import CurveLines from "../../images/HomePageImages/BackroundCurveLines.png";
import MovingLineChart from "../../components/MovingLineChart";
import DownloadIphone from "../../images/HomePageImages/DownloadiPhone.png";
import CreateIphone from "../../images/HomePageImages/CreateiPhone.png";
import WelcomeIphone from "../../images/HomePageImages/WelcomeiPhone.png";
import KinoLogo from "../../images/HomePageImages/KinoLogo.png";
import BodyFat from "../../images/HomePageImages/BodyFat.png";
import HumanBody from "../../images/HomePageImages/HumanBody.png";

const logos = [
  { src: DartmouthLogo, alt: "Dartmouth Logo" },
  { src: OhioStateLogo, alt: "Ohio State Logo" },
  { src: PenningtonLogo, alt: "Pennington Logo" },
  { src: TsukubaLogo, alt: "Tsukuba Logo" },
];

// Repeat the logos enough times to fill the track and ensure seamless looping
const repeatedLogos = Array(8).fill(logos).flat();

function HomePage() {
  return (
    <div className="HomePage">
      <section className="HomePageSectionOne">
        <div className="HomePageSectionOneContent">
          <h1 className="HomePageSectionOneTitle">
            Take <span className="HomePageSectionOneTitleEm">Back</span>
            <br />
            Your Health
          </h1>
          <p className="HomePageSectionOneSubtitle">
            Measure your body fat with medical-grade accuracy
          </p>
          <a
            href="https://apps.apple.com/us/app/kino-fitness/id6475606094"
            target="_blank"
            rel="noopener noreferrer"
            className="HomePageSectionOneDownloadBtn"
          >
            DOWNLOAD THE APP
          </a>
        </div>
        <div className="HomePageSectionOneImageWrapper">
          <img
            src={LandingImage}
            alt="Doctor holding phone with Kino app"
            className="HomePageSectionOneImage"
          />
        </div>
      </section>
      {/* New header and subheader above the chart */}
      <div className="HomePageChartHeaderContainer">
        <h2 className="HomePageChartHeader">Clinically Validated Results</h2>
        <div className="HomePageChartSubheader">
          From two photos taken on your iPhone, get best-in-class estimates of
          your body composition. It’s not magic - it’s{" "}
          <b>
            <i>Kino</i>
          </b>
        </div>
      </div>
      <div className="HomePageChartContainer">
        <MovingLineChart />
      </div>
      {/* Message under the chart, before carousel */}
      <div className="HomePageChartMessage">
        Kino offers the lowest variance from gold standard machines, with{" "}
        <b>98% accuracy</b>
      </div>
      {/* Carousel section moved below the chart and message */}
      <section className="HomePageLogoCarouselSection">
        <div className="HomePageLogoCarouselTitle">
          <span className="GradientText">
            Advised by top research universities
          </span>
        </div>
        <div className="HomePageLogoCarouselWrapper">
          <div className="HomePageLogoCarouselTrack">
            {repeatedLogos.map((logo, i) => (
              <React.Fragment key={i}>
                <div className="HomePageLogoCarouselLogoWrapper">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="HomePageLogoCarouselLogo"
                  />
                  {i !== repeatedLogos.length - 1 && (
                    <div className="HomePageLogoCarouselDivider" />
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* Feature section with interactive iPhone and cards */}
      <section className="HomePageFeatureSection">
        <h2 className="HomePageFeatureTitle">
          Start Using Kino with{" "}
          <span className="HomePageFeatureTitleUnderline">
            Three Simple Steps
          </span>
        </h2>
        <HomePageFeatureTabs />
      </section>
      <section className="HomePageMetricsSection">
        <div className="HomePageMetricsHeader">
          <span className="HomePageMetricsLogoGradient">
            <img
              src={KinoLogo}
              alt="Kino Logo"
              className="HomePageMetricsLogo"
            />
          </span>
          <span className="HomePageMetricsTitle">
            {" "}
            - <span className="HomePageMetricsTitleItalic">the mobile app</span>
          </span>
        </div>
        <div className="HomePageMetricsDesc">
          After you take a Kino 3D Body Scan, you'll be presented with a number
          of <span className="HomePageMetricsHighlight">metrics</span>.
          <br />
          Here's what they mean:
        </div>
        {/* Human body scan effect section */}
        <div className="HomePageHumanBodyScanWrapper">
          <img
            src={HumanBody}
            alt="Human Body Scan"
            className="HomePageHumanBodyImage"
          />
          <div className="HomePageScanBar" />
        </div>
        {/* Removed HomePageMetricsGrid section */}
      </section>
      {/* <section className="HomePageTestimonialSection">
        <img
          src={CurveLines}
          alt="Background curve lines"
          className="HomePageTestimonialCurveBg"
        />
        <div className="HomePageTestimonialContent">
          <div className="HomePageTestimonialQuoteBlock">
            <div className="HomePageTestimonialQuoteMark">“</div>
            <div className="HomePageTestimonialQuote">
              Kino is changing the game for health professionals. The technology
              is a leap forward in getting patient data in real time.
            </div>
            <div className="HomePageTestimonialAttribution">
              <div className="HomePageTestimonialName">Alex McIntyre, MD</div>
              <div className="HomePageTestimonialTitle">
                Doctor-on-Staff at Kino
              </div>
            </div>
          </div>
          <div className="HomePageTestimonialImageWrapper">
            <img
              src={AlexImage}
              alt="Alex McIntyre, MD"
              className="HomePageTestimonialImage"
            />
          </div>
        </div>
      </section> */}
      <section className="HomePageGradientCtaSection">
        <div className="HomePageGradientCtaContent">
          <div className="HomePageGradientCtaTitle">
            Are You Ready to Take Back Your Health?
          </div>
          <div className="HomePageGradientCtaSubtitle">
            Download the app and see what makes Kino stand out
          </div>
          <a
            href="https://apps.apple.com/us/app/kino-fitness/id6475606094"
            target="_blank"
            rel="noopener noreferrer"
            className="HomePageGradientCtaDownloadBtn"
          >
            Download
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;

function HomePageFeatureTabs() {
  const [activeTab, setActiveTab] = React.useState(0);
  const iphoneImages = [DownloadIphone, CreateIphone, WelcomeIphone];
  const featureTitles = [
    "Download App",
    "Create Your Account",
    "Begin Using Kino Today!",
  ];
  const featureDescs = [
    "Go to the app store and search kino fitness or click the download button in the navigation bar.",
    "Provide your information such as email, password and more to create a new personalized account.",
    "Once your account is create take two body scans one front facing and another back facing and you will receive your results.",
  ];
  return (
    <div className="HomePageFeatureGrid">
      <div className="HomePageFeatureIphoneCol">
        <img
          src={iphoneImages[activeTab]}
          alt="Feature iPhone"
          className="HomePageFeatureIphone"
        />
        <div className="HomePageFeatureTabs">
          {featureTitles.map((_, idx) => (
            <button
              key={idx}
              className={`HomePageFeatureTabDot${
                activeTab === idx ? " active" : ""
              }`}
              onClick={() => setActiveTab(idx)}
              aria-label={`Show ${featureTitles[idx]}`}
            />
          ))}
        </div>
      </div>
      <div className="HomePageFeatureCardsCol">
        {featureTitles.map((title, idx) => (
          <div
            key={idx}
            className={`HomePageFeatureCard${
              activeTab === idx ? " active" : ""
            }`}
            onClick={() => setActiveTab(idx)}
            style={{ cursor: "pointer" }}
          >
            <div className="HomePageFeatureCardTitle">{title}</div>
            <div className="HomePageFeatureCardDesc">{featureDescs[idx]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="HomePageFooter">
      <div className="HomePageFooterContent">
        <a href="/" className="HomePageFooterLogoLink">
          <img src={KinoLogo} alt="Kino Logo" className="HomePageFooterLogo" />
        </a>
        <div className="HomePageFooterText">
          © 2025 Kino Vision, INC. &nbsp;{" "}
          <a href="#" className="HomePageFooterLink">
            Privacy Policy
          </a>{" "}
          &nbsp;{" "}
          <a href="#" className="HomePageFooterLink">
            FAQs
          </a>
        </div>
      </div>
    </footer>
  );
}
