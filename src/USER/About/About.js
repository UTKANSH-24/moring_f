import React from 'react';
import './About.css'
const AboutUsSection = () => {
  return (
    <section>
      <div className="responsive-container-block bigContainer">
        <h2 className="titl" style={{ textAlign: 'center', margin: '90px 0px 30px 0', fontSize: '3.6rem', zIndex: 100 }}>
          About Us
        </h2>

        <div className="responsive-container-block Container bottomContainer">

          <div className="ultimateImg" style={{ marginTop: '0px' }}>
            <video id="aftermovie3" className="img-fluid crousel_video_mdn" controls autoPlay muted loop controlsList="nodownload">
              <source src="https://res.cloudinary.com/dy9scmebl/video/upload/v1678509103/videos/UTKANSH_19_Official_Aftermovie_NIT_Jalandhar_1_etfojm_uklab2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="allText bottomText">
            <p className="text-blk subHeadingText" style={{ color: '#ffffff' }}>UTKANSH</p>
            <p className="text-blk description" style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.2px', lineHeight: '15px', wordSpacing: '-1px', letterSpacing: '1px' }}>
              Utkansh is the annual cultural festival of NITJ, recognized as one of the greatest cultural festivals of North India and is entirely organized by the NITJ students' association and serves as a perfect launch pad for artistic enthusiasts to showcase their intelligence and inventiveness. The fest is an amalgamation of music, dance, drama, comedy. Students from all over the country come to participate in various competitions and enjoy the three-day cultural fiesta. The potpourri of quirky and creatively stimulating previous events ranging from 'Panache - Fashion Parade', 'La persona', 'EDM Night by Candice Redding', 'Star Night by The Landers', 'Megasonic - Battle of bands', 'Kavi Sammelan' to 'Sufi Night' promised a scintillating 72 hours of unadulterated edutainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
