  import { Link} from 'react-router-dom';
  import 'animate.css';



export default function Home(){
    return(
      <>
      <div className='fsMain text-center'>
        <div className='conthero'>
        <h1 className='sampsubt'>Growth through Innovation</h1>
          <p className='samppara'>Achieving 3 Outcomes:Growing Sales - Saving Time - Reduce Expenses</p>
        </div>
        <div className='contlogo'>
        <img className='imgcont' src='./images/clear.png' height={390}></img>
        </div>
      </div>

      
      <div className='bodymarg'>

      {/* ------------------------------------- ABOUT SOFTWARE ---------------------------------- */}
      <div className='secsec' id="link">
        <div className='left22'>
          <h2 className='htwo'>Who is ClearSky Software?</h2>
          <p className='para'>ClearSky Software is a technology company specializing in creating and implementing software solutions tailored for the construction industry. We are dedicated to making innovative technology accessible to contracting businesses of all sizes, leveling the playing field in the digital age.</p>

          <h5 className='hfive'>Small Business Challenges We Solve</h5>
          <ol>
            <li className='para'>Grow your client base: Attract more customers that lead to conversations.</li>
            <li className='para'>Maximize profits: Increase the number of booked appointments or requested quotes.</li>
            <li className='para'>Optimize operations: Streamline your workflows and processes to boost efficiency and cut costs.</li>
          </ol>
          <h5 className='hfive'>Our Approach to Understanding Your Business</h5>
          <p className='para'>We understand that every business is unique. Our collaborative approach begins with an in-depth consultation, we listen carefully, ask probing questions, and analyze your existing processes to identify areas for improvement. Based on this assessment, we develop a customized plan, that outlines actionable strategies designed to drive measurable results.</p>

          <p className='para'>Our commitment to your success goes beyond recommendations. We provide ongoing support and guidance, helping you implement the strategies and monitor progress. We also offer performance guarantees, aligning our success with yours and ensuring we are invested in your long-term growth.</p>
        </div>
        <div className='right22'>
          <img className='rightimg' src='./images/i_about_us.png' height={580}></img>
        </div>
      </div>

      </div>

      {/* ------------------------------------- 2 CATEGORIES ---------------------------------- */}

      <div className='priceplan'>

        <div className='pinakacateg'>
          <div className='categtitle' id="Services">
            <h2  className='htwo'>How do we impact your business?  </h2>
            <p className='para'>Our solutions focus on overcoming two business challenges. Growing Revenue, and Operating Efficiency.</p>
          </div>
          <div className='categ'>
            <div className='categ1'>
              <img className='cagimg' src='/images/categ (1).png'></img>
              <h3>Growing Revenues</h3>
              <p className='para'>We are committed to accelerating your sales growth. Partner with us to transform your business and achieve unparalleled success in today's competitive market.</p>
              <Link className='btnlearn1' as={Link} to="/GrowingRevenues">Learn More</Link>
            </div>
            <div className='categ2'>
            <img className='cagimg' src='/images/categ (2).png'></img>
            <h3>Operational Efficiency</h3>
              <p className='para'>Today’s businesses optimize all steps in the production of revenue through the adoption of technology and analysis.</p>
              <Link className='btnlearn2' as={Link} to="/OperationalEfficiency">Learn More</Link>
            </div>
          </div>
        </div>

      </div>

     {/* ------------------------------------- adoption ---------------------------------- */}
     
     <div className='bodymarg'>

      <div className='addoption'>
        <div className='adoptitle'>
        <h2 className='htwo'>How to access $2,400 and Transform your business today!</h2>
        <p className='para'>The Government of Canada is providing small business grants (For a limited time) to eligible businesses</p>
         </div>
          <div className='adpot'>
            <div className='adpotmainimg'>
            <img className='adopimg' src='/images/adopt.png' height={350}></img>
            </div>
            <div className='adopt1'>
            <h5 className='hfive'>Manufacturers/Contractors with Sales &gt; $30,000 or 1+ Employee </h5>
            <div className='bancomp'>
            <h6 className='para'>Do I qualify?</h6>
            <h5 className='hfive'>You Need the following 5 conditions:</h5>
            <ul>
              <li className='para'>Must be a for-profit business (including for-profit social enterprises and co-operatives) in Ontario</li>
              <li className='para'>Must be a registered or incorporated business</li>
              <li className='para'>Must be a consumer-facing business, meaning be able to be accessed by consumer or provide in person services to consumers. </li>
              <li className='para'>Must commit to maintaining a digital adoption strategy for six months after participation in the program</li>
              <li className='para'>Must consent to participating in follow-up surveys, sharing information with the Government of Canada (ISED and Statistics Canada), and having the name of the business published as a recipient of funding</li>
            </ul>
            <h5 className='hfive'>Benefits:</h5>
            <p className='para pb-2'> <span className='benecolor'>Digital Needs Assessment </span>
            Through this program, small business owners can receive a micro-grant worth up to $2,400 to help get their business online, give their e-commerce presence a boost, or digitalize business operations. The CDAP program is a reimbursement grant. Successfully grant recipients must incur costs upfront after they have received conditional approval. Funds are paid out to the recipient after they are able to provide the OCC with the required proof of payment documentation. Grant recipients must commit to maintaining their digital adoption strategy for at least six months.</p>
            <a className='talktous1' href="https://calendly.com/r-dredhartclearskymarketing/overview-of-construction-beta-program" target="_blank" rel="noopener noreferrer">
           Book an appointment</a>
            </div>
          </div>
       </div>
      </div>

      </div>


        {/* ---------------------------------- PRICE PLAN ------------------------------------------ */}
  

        <div className='priceplan'>
          <div className='prcA'>
            <div className='prcA1'>
              <h1 className='hone'>Joining Our Beta Program & Unlock the Full potential of your contracting business </h1>
              <h6 className='hsix1'>Be a Trailblazer and Reap the Rewards!</h6>
              <p className='paraPRC'>Be among the first to experience our revolutionary software. Your invaluable feedback will shape the future of our applications, and in return, we're offering you an unbeatable package:</p>
              <ul className='paraPRC'>
                <li><strong className='prcbold'>VIP Treatment: </strong> Enjoy priority support  and direct access to our development team.</li>
                <li><strong className='prcbold'>Lifetime Savings: </strong> Get a 50% discount on our annual licensing fee, forever.</li>
                <li><strong className='prcbold'>Market Dominance: </strong> Secure exclusive rights to use our software in specific markets.</li>
              </ul><div>
              <Link className='learnMorebtn1' to='/moreinfo?category=Introductory%20Module&option=Initial%20Assessment,%20New%20Website,%20Infrastructure,%20and%20Analytics'>Learn More</Link>
              </div>
              
            </div>
            <div className='prcA2'>
                <img className='prcimg' src='./images/prcner.png' height={300}></img>
            </div>
          </div>
          <h6 className='prchsix'>BETA Plan includes Modules:</h6>
          <div className='prcB'>
          <div className='PrcB1'>
            <h5 className='hfiveprc'>INTRODUCTORY</h5>
            <div className='prclist'>
              <div>
              <li>Initial Consultation</li>
              <li>New Website</li>
              <li>Insfrastructure</li>
              <li>Analytics</li>  
              </div>
              <div className='lmbtn'>
                <Link className='learnMorebtn1' to='/moreinfo?category=Introductory%20Module&option=Initial%20Assessment,%20New%20Website,%20Infrastructure,%20and%20Analytics'>Learn More</Link>
              </div>
            </div>
          </div>
          <div className='PrcB2'>
            <h5 className='hfiveprc2'>SUPPORT</h5>
            <div className='prclist2'>
              <div>
              <li>Social Media Management</li>
              <li>Local SEO Support</li>
              <li>KPI Reporting</li>
              <li>Customer Engagement</li>
              </div>
              <div className='lmbtn'>
                <Link className='learnMorebtn2' to='/moreinfo?category=Support%20Module&option=Social%20Media%20Management,%20Local%20SEO,%20KPI,%20and%20Customer%20Engagement'>Learn More</Link>
              </div>
            </div>
          </div>
          <div className='PrcB1'>
            <h5 className='hfiveprc'>GROWTH & VISIBILITY</h5>
            <div className='prclist'>
              <div>
              <li>Analytics</li>
              <li>Local SEO</li>
              <li>On Page Optimization</li>
              <li>Off Page Optimization</li>
              <li>Social Media</li>
              </div>
              <div className='lmbtn'>
                <Link className='learnMorebtn3' to='/moreinfo?category=Growth%20and%20Visibility%20Module&option=Analytics'>Learn More</Link>
              </div>
            </div>
          </div>
          <div className='PrcB2'>
            <h5 className='hfiveprc2'>BUILDING CREDIBILITY</h5>
            <div className='prclist2'>
              <div>
              <li>Construction Library</li>
              <li>Ai & 3D designer</li>
              <li>Demo Room</li>
              <li>Reviews</li>
              </div>
              <div className='lmbtn'>
                <Link className='learnMorebtn4' to='/moreinfo?category=Building%20Credibility%20Module&option=Construction%20Library'>Learn More</Link>
              </div>
            </div>
          </div>
          <div className='PrcB1'>
            <h5 className='hfiveprc'>OPTIMIZE OPERATIONS</h5>
            <div className='prclist'>
              <div>
              <li>DMS</li>
              <li>Qualifying Prospects</li>
              <li>Molly Hammer</li>
              <li>CMS</li>
              </div>
              <div className='lmbtn'>
                <Link className='learnMorebtn5' to='/moreinfo?category=Optimize%20Operations%20Module&option=Document%20Management%20System'>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    )
}