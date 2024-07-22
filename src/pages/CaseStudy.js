import './Pages.css';

export default function CaseStudy(){
    return(
   <>
   <div  className="maincase">
      <h1>Exploring Excellence Dive into Real-World Solutions</h1>
      <p>Discover how businesses overcame challenges and achieved remarkable outcomes. </p>
   </div>

      <div className='maincs'>

       <div className='case1'>
         <img className="cslogo" src="images/case1logo.png" height={80}></img>
         <h1>CASE STUDY 01</h1>
         <h2>EL Classico Grilled - Warren’s Journey from banker to Successful Entrepreneur</h2>
         <p>Explore Warren's remarkable journey as he transitioned from a stable banking career to a thriving entrepreneur. In September 2023, he took a leap of faith, opening Classically Grilled and transforming it into a culinary sensation....</p>
         <div>
          <a href='https://drive.google.com/file/d/1SncfBk50pWKKcFIrhKyPqWkmcqIirKEP/view?usp=sharing' target="_blank"><button className='cs1btn'>EXPLORE CASE STUDY</button></a>
          </div>
       </div>

       <div className='case2'>
         <img className="cslogo" src="images/caselogo2.png" height={80}></img>
         <h1>CASE STUDY 02</h1>
         <h2> Driving Success: Xtra Auto Detailing's Decade-Long Journey</h2>
         <p>Xtra Auto Detailing was facing challenges in local market penetration, Xtra Auto Detailing solution involved outsourcing marketing and seek innovative ways to automate processes that expand their customer base.... </p>
         <div>
          <a href='https://drive.google.com/file/d/10xJR8TygVoBSS9YBNp0pbyb5b0Kjx0hh/view?usp=sharing' target="_blank"><button className='cs1btn'>EXPLORE CASE STUDY</button></a>
          </div>
       </div>


      </div>

   </>
 )
}