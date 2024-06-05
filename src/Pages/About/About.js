
import { Link } from 'react-router-dom';
import './About.css';
import Story1 from '..//..//images/story1.avif'
import Story2 from '..//..//images/story2.avif'
import Story3 from '..//..//images/story3.avif'
import Story4 from '..//..//images/story4.avif'
import Story5 from '..//..//images/story5.avif'
import Story6 from '..//..//images/story6.avif'
import Story7 from '..//..//images/story7.avif'
import Story8 from '..//..//images/story8.avif'
import Story9 from '..//..//images/story9.avif'
import Story10 from '..//..//images/story10.avif'
import Story11 from '..//..//images/story11.avif'
import Story12 from '..//..//images/story12.avif'
import Story13 from '..//..//images/story13.avif'
import Story14 from '..//..//images/story14.avif'
import Story15 from '..//..//images/story15.avif'
import Story16 from '..//..//images/story16.avif'
import Story17 from '..//..//images/story17.avif'
import Story18 from '..//..//images/story18.avif'
import Story19 from '..//..//images/story19.avif'
import Story20 from '..//..//images/story20.avif'
import Story21 from '..//..//images/story21.avif'
import Story22 from '..//..//images/story22.avif'
import Story23 from '..//..//images/story23.avif'
import Story24 from '..//..//images/story24.avif'
import Story25 from '..//..//images/story25.avif'
import Story26 from '..//..//images/story26.avif'
import Story27 from '..//..//images/story27.avif'
import Story28 from '..//..//images/story28.avif'
import Story29 from '..//..//images/story29.avif'
import Story30 from '..//..//images/story30.avif'
import Story31 from '..//..//images/story31.avif'
import Story32 from '..//..//images/story32.avif'
import Story33 from '..//..//images/story33.avif'
import Story34 from '..//..//images/story34.avif'
import Story35 from '..//..//images/story35.avif'
import Story36 from '..//..//images/story36.avif'
import Story37 from '..//..//images/story37.avif'
import Story38 from '..//..//images/story38.avif'
import Story39 from '..//..//images/story39.avif'
import Story40 from '..//..//images/story40.avif'
import Story41 from '..//..//images/story41.avif'
import Story42 from '..//..//images/story42.avif'
import Story43 from '..//..//images/story43.avif'
import Story44 from '..//..//images/story44.avif'
import Story45 from '..//..//images/story45.avif'
import Story46 from '..//..//images/story46.avif'
import Story47 from '..//..//images/story47.avif'
import Story48 from '..//..//images/story48.avif'
import Story49 from '..//..//images/story49.avif'
import Story50 from '..//..//images/story50.avif'
import FooterMail from '../../Components/FooterMail/FooterMail';


function About() {
  return (
    <>
      <section className='stories'>
        <div className='container'>
          <h1 className='story_title'>Stories</h1>
          <hr />
          <nav>
            <ul className='story_menu flex'>
              <div className='block_left flex'>
                <li className='story_name'><Link to="#">All Stories</Link>
                </li>
                <li className='story_name'><Link to="#">Fashion Shows</Link></li>
                <li className='story_name'><Link to="#">Advertising Campaigns</Link></li>
                <li className='story_name'><Link to="#">News & Projects</Link></li>
                <li className='story_name'><Link to="#">Lookbooks</Link></li>
                <li className='story_name'><Link to="#">Sustainability</Link></li>
                <li className='story_name'><Link to="#">Atelier Versace</Link></li>
              </div>
              <div className='vertical'></div>
              <li className='story_name'><Link to="#">Sign-up</Link></li>
              <div className='vertical'></div>
              <li className='story_name'><Link to="#">All years</Link></li>

            </ul>
          </nav>
          <hr />
          <div className='card_wrapp flex'>

            <div className='card'>
              <Link to=""><div className='card_img'>
                <img src={Story1} alt="" />
              </div></Link>

              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>Gold: Versace to the last atom</h2>
                <p className='catd_desc'>The deep color of gold is a longstanding signature of Versace, but images of gold in its nano scale show a hidden side to the metal’s beauty that is equally intrinsic to the House of Versace—ornate pattern.​ The first feature from Versace LAB, an experimental series with unexpected collaborators.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story2} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>VERSACE AT THE MET GALA 2024</h2>
                <p className='catd_desc'>The Met Gala 2024 theme entitled, “The Garden of Time,” is inspired by the 1962 short story of the same name by J.G Ballard. The story explores the cycle of creation and destruction, and features a central garden of flowers which can be read as symbolizing preservation and frailty, beauty, youth, and innocence.
                  #metgala
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story3} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>LA VACANZA 2024</h2>
                <p className='catd_desc'>Summer’s feeling of possibility and freedom is the inspiration for Donatella Versace’s latest “La Vacanza” collection, itself an abundant celebration of graphic prints, the generous use of summer silks, satin, and jersey, and of sunrise to sunset dressing.
                  Versace Eyewear Spring-Summer 2024.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story4} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE EYEWEAR SPRING-SUMMER 2024</h2>
                <p className='catd_desc'>VERSACE EYEWEAR SPRING-SUMMER 2024
                  Iris Law stars in the new Versace Eyewear Spring-Summer 2024 campaign, highlighting a selection of new styles first debuted on the runway in Milan.
                  Versace Jeans Couture: Spring-Summer 2024 Denim.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story5} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE JEANS COUTURE: SPRING-SUMMER 2024 DENIM</h2>
                <p className='catd_desc'>Versace Jeans Couture recruits the help of innovative creatives across Europe for its Spring-Summer 2024 denim campaign.
                  #versacejeanscouture</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story6} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE WATCHES SPRING-SUMMER 2024</h2>
                <p className='catd_desc'>For Spring-Summer 2024, the Versace Watches collection perfectly merges contemporary, classic design with immediately recognizable insignia, in a dedicated image and video campaign that mirrors themes of the fashion show.
                  Ningning For Versace Spring-Summer 2024
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story7} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>NINGNING FOR VERSACE SPRING-SUMMER 2024</h2>
                <p className='catd_desc'>Versace Global Brand Ambassador, Ningning, appears in a series of images wearing the Spring-Summer 2024 collection.
                  Versace Home: If These Walls Could Talk</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story8} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>VERSACE HOME: IF THESE WALLS COULD TALK</h2>
                <p className='catd_desc'>The Versace Home 2024 collection was debuted during Salone del Mobile, Milan Design Week, with an immersive showcase within Palazzo Versace, Versace’s original Milan home and design Atelier at Via Gesù 12, titled ‘Versace Home: If These Walls Could Talk’.
                  #versacehome
                  Versace Icons</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story9} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE ICONS</h2>
                <p className='catd_desc'>Anne Hathaway and Cillian Murphy for Versace Icons.
                  A Signature House Code.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story10} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>A SIGNATURE HOUSE CODE</h2>
                <p className='catd_desc'>Medusa ’95 is an evolution on Versace’s iconic House code that originally featured across the collections of the mid 1990s. </p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story11} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>PALAZZO VERSACE MACAU</h2>
                <p className='catd_desc'>To enter Palazzo Versace is to step into the House’s signature luxury lifestyle and be fully immersed in its iconic codes. Taking over one of the three towers of the Grand Lisboa Palace Resort Macau, Palazzo Versace Macau is the first Palazzo Versace hotel in Asia and shares a unique design expression that interplays an Italianate aesthetic with symbols rooted in local Chinese custom..</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story12} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>CILLIAN MURPHY FOR VERSACE ICONS</h2>
                <p className='catd_desc'>Versace announces Cillian Murphy as the debut men’s talent of Versace Icons. The dedicated campaign will be Cillian’s first for Versace and sees the Academy Award winning actor wearing key and timeless pieces from the men’s Versace Icons collection.
                  Versace at the Oscars 2024</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story13} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>VERSACE AT THE OSCARS 2024</h2>
                <p className='catd_desc'>Atelier Versace crafted custom outfits for guests in attendance of the 96th annual Academy Awards hosted in Hollywood, including Best Actor winner, Cillian Murphy.
                  Versace Jeans Couture Spring-Summer 2024</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story14} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE JEANS COUTURE SPRING-SUMMER 2024</h2>
                <p className='catd_desc'>Versace Jeans Couture presents its Spring-Summer 2024 campaign, "Metropolitan Nocturnes." The campaign, shot by Erica Snyder and directed by Alex Nazari, follows four individuals navigating the shadowy landscapes of Miami while wearing vibrant graphic motifs and all-over printed designs from the new season collection.
                  #versacejeanscouture
                  Bai Jingting for Versace Fragrances.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story15} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>BAI JINGTING FOR VERSACE FRAGRANCES</h2>
                <p className='catd_desc'>Chinese actor Bai Jingting is announced as Global Fragrance Ambassador. Bai is a Versace man in his unique personal style, self-confidence, and fearless attitude.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story16} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  FASHION SHOWS</span>
                <h2 className='card_titl'>FALL-WINTER 2024</h2>
                <p className='catd_desc'>A collection of considered wildness, where tailoring is disrupted, print deconstructed, and Atelier Versace fabrics shredded and meticulously hand-woven into new materials.
                  Rosy Zhao for Spring-Summer 2024</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story17} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>ROSY ZHAO FOR SPRING-SUMMER 2024</h2>
                <p className='catd_desc'>Versace Global Brand Ambassador, Rosy Zhao, appears in a series of images wearing the Spring-Summer 2024 collection, with the star’s innate strength of character fully evident as she wears signatures of the House, including the Medusa ’95 bag.
                  Spring-Summer 2024 Children's</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story18} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>SPRING-SUMMER 2024 CHILDREN'S</h2>
                <p className='catd_desc'>Darling designs come to life in the Spring-Summer 2024 Children's campaign, featuring ready-to-wear separates in new pastel colorways.
                  Spring-Summer 2024.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story19} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>SPRING-SUMMER 2024</h2>
                <p className='catd_desc'>The Spring-Summer 2024 campaign is a celebration of the new attitude and fresh personalities of contemporary Versace women and men.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story20} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE MEDUSA '95 BAG</h2>
                <p className='catd_desc'>Introduced for the Spring-Summer 2024 fashion show in Milan, the theme centers on a unique horizontal tote bag and a handbag.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story21} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>DWYANE WADE FOR VERSACE EYEWEAR</h2>
                <p className='catd_desc'>Dwyane Wade stars in his second campaign for Versace Eyewear. The decorated NBA champion wears sunglass and optical styles from the latest Men’s collection in a series of images and videos that continues his relationship with the House.
                  Versace Jeans Couture Spring-Summer 2024.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story22} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  LOOKBOOKS</span>
                <h2 className='card_titl'>VERSACE JEANS COUTURE SPRING-SUMMER 2024</h2>
                <p className='catd_desc'>VERSACE JEANS COUTURE SPRING-SUMMER 2024
                  Versace Jeans Couture dives into a love affair with neon pop colors for its Spring-Summer 2024 collection. Leaning into the Y2K aesthetic, the collection is punctuated with graphic patchwork prints in precise cuts, and tailored denim pieces that draw inspiration from archival ready-to-wear.
                  #versacejeanscouture
                  Resort 2024</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story23} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>RESORT 2024</h2>
                <p className='catd_desc'>The Resort 2024 collection is presented in a dedicated campaign, created in collaboration with creative agency, MONEY.
                  Pre-Fall 2024</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story24} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  LOOKBOOKS</span>
                <h2 className='card_titl'>PRE-FALL 2024</h2>
                <p className='catd_desc'>Designs are crafted around the key signatures of the House, from the iconic codes of the Barocco and Medusa ’95 to the use of silhouette, material, and print—immediate signifiers of Versace.
                  Fall-winter 2023 Denim</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story25} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>FALL-WINTER 2023 DENIM</h2>
                <p className='catd_desc'>Versace Jeans Couture ventures into an AI-generated, digital-impressionist utopia for its Fall-Winter 2023 denim campaign.
                  #versacejeanscouture</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story26} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>HYUNJIN'S HOLIDAY WISHLIST</h2>
                <p className='catd_desc'>The K-pop sensation shares his Holiday wishlist. How many of his favorites make it onto yours?
                  HYUNJIN FOR HOLIDAY 2023</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story27} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>HYUNJIN FOR HOLIDAY 2023</h2>
                <p className='catd_desc'>Hyunjin, the multi-talented member of K-pop boy group, Stray Kids, stars in the Versace Holiday campaign—a festive celebration full of Versace attitude, elegance, and fun.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story28} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>VERSACE HOME AT HARRODS</h2>
                <p className='catd_desc'>Versace Home opens a new corner within the Harrods luxury department store on Brompton Road, London.
                  #versacehome</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story29} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE EYEWEAR CAMPAIGN FALL-WINTER 2023</h2>
                <p className='catd_desc'>Introducing the Fall-Winter 2023 Eyewear campaign starring Gigi Hadid and Irina Shayk.
                  Versace Icons</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story30} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE ICONS</h2>
                <p className='catd_desc'>Introducing the next chapter of the Versace Icons collection with a new series of wardrobe staples and enduring signatures of the House dedicated to the Versace Woman.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story31} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  FASHION SHOWS</span>
                <h2 className='card_titl'>SPRING-SUMMER 2024</h2>
                <p className='catd_desc'>Youth, personal confidence, and the energy of city living are starting points to a collection designed for a complete life, from particularly essential wardrobe pieces to sensual and fierce eveningwear.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story32} alt="" />
              </div>
              <div className='card_info'>
                <span>

                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE WATCHES FALL-WINTER 2023</h2>
                <p className='catd_desc'>The Versace Watches Fall-Winter 2023 collection combines refined new shapes with immediately Versace signifiers, and introduces two new designs—Greca Moonphase, and Greca Extreme—each adorned with the House Medusa.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story33} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE JEANS COUTURE FALL-WINTER 2023</h2>
                <p className='catd_desc'>Versace Jeans Couture returns with its Fall-Winter 2023 campaign, entitled, "Artist Residency". Shot by Emily Lipson, the new seasonal campaign captures resident artists in their unique habitats of inspiration, with photographs full of authenticity, nostalgic textures, and a selection of print-overloaded styles from the new collection.
                  Greca Goddess Top Handle Bag</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story34} alt="" />
              </div>
              <div className='card_info'>
                <span>ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>GRECA GODDESS TOP HANDLE BAG</h2>
                <p className='catd_desc'>The Fall-Winter 2023 collection introduces the Greca Goddess top handle bag. Defined by Italian leather artistry and a structural design, the architectural curves of the bag’s body are mirrored by an arched top handle crafted in tubular leather with angular cut ends. The signature Greca sits to the bag’s front above a metallic Versace logo plaque, both in the color of deep gold.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story35} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>FALL-WINTER 2023</h2>
                <p className='catd_desc'>The Fall-Winter 2023 collection is presented in a dedicated image and video campaign starring Gigi Hadid, Irina Shayk, and Anok Yai. Shot in Versace’s classical palazzo at Via Gesù 12 in Milan, the image series by photographers Mert & Marcus includes black and white studio shots that put emphasis on the collection’s immediately Versace use of silhouette and cut.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story36} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>FALL-WINTER 2023 CHILDREN'S</h2>
                <p className='catd_desc'>The Fall-Winter 2023 Children’s collection takes a series of seasonal Women's and Men's styles and adapts them for children as mini-me pieces.
                  Dv One Automatic Gent</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story37} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>DV ONE AUTOMATIC GENT</h2>
                <p className='catd_desc'>The DV One Gent timepiece is introduced in a men's aesthetic finish for the first time.
                  Versace Neo Nylon</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story38} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE NEO NYLON</h2>
                <p className='catd_desc'>
                  The new line of bags is crafted from ECONYL® regenerated nylon. The Pre-Fall 2023 collection introduces five new styles, each detailed with the House Greca signifier as buckles and strap fastenings in silver hardware.
                  Versace Jeans Couture Fall-Winter 2023
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story39} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  LOOKBOOKS</span>
                <h2 className='card_titl'>VERSACE JEANS COUTURE FALL-WINTER 2023</h2>
                <p className='catd_desc'>The Fall-Winter 2023 collection draws inspiration from the print-overloaded styles of British alternate fashion label "BodyMap," comprising a selection of black-and-white prints, biker-inspired styles, and flared volumes for both women and men.
                  #versacejeanscouture
                  Versace X Elton John AIDS Foundation</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story40} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>VERSACE X ELTON JOHN AIDS FOUNDATION</h2>
                <p className='catd_desc'>Versace is pleased to donate 15% of sales from the Greca Goddess mini bag in powder blush pink to the Elton John AIDS Foundation in June to celebrate Pride Month.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story41} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  FASHION SHOWS</span>
                <h2 className='card_titl'>LA VACANZA 2023</h2>
                <p className='catd_desc'>Donatella Versace and Dua Lipa present their co-designed women's collection at Versace's first see-now-buy-now fashion show on the French Riviera.
                  Dua Lipa for La Vacanza
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story42} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>DUA LIPA FOR LA VACANZA</h2>
                <p className='catd_desc'>The collection is Donatella and Dua's shared vision of an absolute modern elegance for “La Vacanza”, the Italian for “vacation”, and encompasses the full Versace lifestyle; from perfectly cut tailoring and evening gowns, to bikini and terry cotton beachwear.
                  Versace at the Met Gala 2023</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story43} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>VERSACE AT THE MET GALA 2023</h2>
                <p className='catd_desc'>The Met Gala 2023, entitled, "Karl Lagerfeld: A Line of Beauty,” honors the work and life of designer Karl Lagerfeld, and sees Donatella Versace present a selection of custom Atelier Versace designs which bring together signatures of both Versace and Lagerfeld from across his career.
                  #metgala</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story44} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>Gold: Versace to the last atom</h2>
                <p className='catd_desc'>The deep color of gold is a longstanding signature of Versace, but images of gold in its nano scale show a hidden side to the metal’s beauty that is equally intrinsic to the House of Versace—ornate pattern.​ The first feature from Versace LAB, an experimental series with unexpected collaborators.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story45} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>SPRING-SUMMER 2023 DENIM</h2>
                <p className='catd_desc'>For its Spring-Summer 2023 Denim campaign, Versace Jeans Couture turns its lens to New York City to profile burgeoning talent—starring musician Aaron Maine of Porches and 20-year-old multi-hyphenate—singer-songwriter, rapper, DJ, producer, and model - Talia Goddess.
                  #versacejeanscouture</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story46} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE EYEWEAR SPRING-SUMMER 2023</h2>
                <p className='catd_desc'>The Spring-Summer 2023 Eyewear collection combines a series of sun and optical frames, each detailed with signature House motifs, including the Medusa, Greca, and Medusa Biggie.
                  Versace Home At Salone Del Mobile</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story47} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>VERSACE HOME AT SALONE DEL MOBILE</h2>
                <p className='catd_desc'>
                  The Versace Home collection will be presented at Fiera Milano, Rho, Hall 7, Stand E20 from April 18th to 23rd, 9:30AM - 6:30PM.
                  #versacehome
                  30 Years Rosenthal Meets Versace
                </p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story48} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  NEWS & PROJECTS</span>
                <h2 className='card_titl'>30 YEARS ROSENTHAL MEETS VERSACE</h2>
                <p className='catd_desc'>Introducing a special limited collection of Rosenthal Meets Versace mugs, in celebration of a 30 year collaboration between the two creative Houses in 2023.
                  #versacehome
                  Versace Children's Eyewear 2023</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story49} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE CHILDREN'S EYEWEAR 2023</h2>
                <p className='catd_desc'>Introducing the new Versace Children's Eyewear collection, featuring iconic Versace designs in mini-me versions.
                  Versace Watches Spring-Summer 2023.</p>
              </div>
            </div>
            <div className='card'>
              <div className='card_img'>
                <img src={Story50} alt="" />
              </div>
              <div className='card_info'>
                <span>
                  ADVERTISING CAMPAIGNS</span>
                <h2 className='card_titl'>VERSACE WATCHES SPRING-SUMMER 2023</h2>
                <p className='catd_desc'>Modernity meets innovative design in the Versace Spring-Summer 2023 watch campaign, combining a collection of classic Versace designs and seven new styles for the seasonal collection.</p>
              </div>
            </div>

          </div>
        <FooterMail />
        </div>

      </section >

    </>
  );
}


export default About;
