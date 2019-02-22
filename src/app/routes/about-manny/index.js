import React from "react";
import InteriorLayout from "../../layouts/InteriorLayout";
import mannyImg from "../../assets/mannypic3.jpg";

export default props => (
  <InteriorLayout
    id="about-manny"
    title="About Manny Siverio"
    description="Manny Siverio has three decades experience as a stuntman and stunt coordinator working on major motion pictures and motion capture for video games"
    subheading={false}
    {...props}
  >
    <div>
      <div className="row mb-4">
        <div className="col-12 col-md-4">
          <img src={mannyImg} alt="Manny Siverio, Owner of Siverio Stunts" />
        </div>
        <div className="col-12 col-md-8">
          <p>
            Manny Siverio is a member of SAG (Screen Actors Guild), DGA
            (Directors Guild of America), AFTRA (American Federation of
            Television & Radio Artists) & the WGAe (Writers Guild of America
            East). Author of numerous martial art articles, books &
            instructional video tapes, Manny has been involved in the martial
            arts since the age of ten. He has worked in the film industry since
            the early 1980's and has been the subject of various articles and
            televised interviews.
          </p>
          <p>
            In 2008 he was the winner of Taurus Stunt Award for Best Fire. His
            standing in the industry has kept him busy working in NYC and
            traveling around the nation and Puerto Rico, performing,
            coordinating and directing stunts. Among his credits are{" "}
            <strong>Did You Hear About The Morgans?</strong>,{" "}
            <strong>We Own The Night</strong>,{" "}
            <strong>Steven Soderburgh's Che'</strong>,{" "}
            <strong>Wes Craven's 25/8</strong>,{" "}
            <strong>Ugly Betty Season 3 & 4</strong>,{" "}
            <strong>Supertroopers</strong>, <strong>Girl Fight</strong>,{" "}
            <strong>Third Watch</strong>, <strong>Blade</strong>,{" "}
            <strong>Money Train</strong>, <strong>Men In Black</strong>,{" "}
            <strong>Dead Presidents</strong>,{" "}
            <strong>New York Undercover</strong>,{" "}
            <strong>Law &The First Wives Club</strong>,{" "}
            <strong>Dellaventura</strong>, <strong>Oz</strong>,{" "}
            <strong>Malcom X</strong>, <strong>The Super</strong>,{" "}
            <strong>Out for Justice</strong>,{" "}
            <strong>King of New York and CopLand</strong>.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3>Salsa</h3>
          <p>
            Manny Siverio started learning how to dance the New York "On 2"
            Style of Mambo (Salsa) dancing in 1995. His first dance instructors
            were Addie Diaz (who later became his wife) and Nelson Flores. He
            later moved on to a more advanced level and took lessons at both the
            Eddie Torres and Jimmy Anton's Dance Studios.
          </p>
          <p>
            Manny eventually became a member of the Eddie Torres "Jammers" where
            he developed the experience that has made him the dancer he is
            today. He was exposed to performing on several prestigious stages as
            a dancer for artist such as Tito P uente and Celia Cruz. He was an
            original cast member to the first Off-Broadway Mambo Musical: LATIN
            MADNESS, has performed at the 3rd Annual Congreso Mundial de La
            Salsa in Puerto Rico, the 1st Annual Congreso Mundial de la Salsa in
            New York and the 3rd Annual West Coast Salsa Congress in Los Angeles
            (to name a few). Manny was the first to successfully combined his
            martial art & stunt background with mambo dancing. He began working
            with the "Latin Dance Ensemble" where he took part in choreographing
            a martial arts style Mambo number (Mam-Fu in 1999) and since then
            has choreographed a Knifefighting mambo number (Hustler late 2000)
            for the Addie-Tude Dance Company. He has traveled to perform in such
            places at Hawaii, San Francisco, Los Angeles, Puerto Rico, Hong
            Kong, Japan, Switzerland, London and Paris. When not working on a
            film projects, he usually assists as an instructor at his wife's
            (Addie Diaz-Siverio's) weekly dance class in New York City.
            Salsa-Writer: After a chance meeting in L.A. (while working on the
            feature: BLADE), he began to apply his writing skills to dancing
            when he became the first cityguide correspondent to Salsaweb.com
            Magazine. Using the format favored by many popular martial art
            magazines, Manny focused on the NY Mambo Instructor/Performer much
            like the Martial Art Magazines favored the Martial Art
            Instructor/Fighter and soon converted his section into the largest
            of the cityuides and the second most popular page of the entire
            worldwide Salsaweb site. Having left Salsaweb in late 2000, Manny is
            currently the co-publisher of SalsaNewYork.com and has helped
            transformed it into the ultimate New York Salsa/Mambo dancer website
            that it is today with articles, interviews, instructor reviews and
            dancer oriented resources.
          </p>
        </div>
        <div className="col-12">
          <h3>Writing</h3>
          <p>
            Manny Siverio started writing freelance articles for martial art
            magazines at 18 and has continued writing ever since. During his
            late teens to his mid-twenties he contributed to every major martial
            art magazine in the U.S. including BLACK BELT MAGAZINE, KARATE
            ILLUSTRATED MAGAZINE, INSIDE KUNG-FU MAGAZINE, INSIDE KARATE
            MAGAZINE and was a columnist for COMBAT KARATE MAGAZINE. During his
            tenure as a martial arts writer he authored two books for Rainbow
            Publications (HIGH INTENSITY WEIGHT TRAINING FOR THE MARTIAL ARTIST
            & THE COMPLETE GUIDE TO FOCUS GLOVE TRAINING). He later authored and
            starred in a 7 tape instructional martial art video series which was
            produced by Panther Productions. His writing interests shifted as he
            became more involved in the film industry and has written several
            screenplays to date. He got into the WGA (Writers Guild of America)
            when he sold a screenplay to Paramount Pictures for an episode idea
            of STAR TREK: The Next Generation. Since then he has added the
            titled of WEB-AUTHOR to his credits when he began covering the NY
            Salsa Dance Scene as the original correspondent to SalsaWeb/NY and
            continues to do so today as Co-Publisher to SalsaNewYork.com.
            Currently Manny balances his Salsa writing hobby with his film
            writing career.
          </p>
        </div>
      </div>
    </div>
  </InteriorLayout>
);
