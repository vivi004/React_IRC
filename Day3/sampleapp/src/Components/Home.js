import '../Assets/Css/Home.css'
import img1 from '../Assets/Img/phone -1.avif';
import img2 from '../Assets/Img/laptops.jpg';
import img3 from '../Assets/Img/speakers.jpg';
import img4 from '../Assets/Img/accesories.jpeg';
function Home(){
    return(
    <div>
    <div class="navbar" >
    <div class="navtitle">
    <h2>ELECTRONIC GADGETS</h2>
    </div>
    <ul class="navlinks">
    <input type="search" class="inp" placeholder="Search mobiles"></input>
    <li> <button type="submit" class="but" ><h2 class="text">Login</h2></button></li>
    <li><a href="sign up.html"><button  type="submit" class="but"> <h2 class="text">SignUp</h2></button></a></li>
    </ul>
    </div>
    <div>
</div>
    <div class="Mobiles">
    <div class="flip-box">
    <div class="flip-box-inner">
    <div class="flip-box-front">
    <img src={img1} class="imag" alt="myimage"/>
    </div>
    <div class="flip-box-back">
    <h2 >MOBILES</h2>
    <p>....</p>
    </div>
    </div>
    </div>
    </div>
    <div class="Laptops">
    <div class="flip-box">
    <div class="flip-box-inner">
    <div class="flip-box-front">
    <img src={img2} class="imag" alt="myimage"/>
    </div>
    <div class="flip-box-back">
    <h2 >LAPTOPS</h2>
    <p>....</p>
    </div>
    </div>
    </div>
    </div>
    
    <div class="Speakers">
    <div class="flip-box">
    <div class="flip-box-inner">
    <div class="flip-box-front">
    <img src={img3} class="imag" alt="myimage"/>
    </div>
    <div class="flip-box-back">
    <h2 >SPEAKERS</h2>
    <p>....</p>
    </div>
    </div>
    </div>
    </div>

    <div class="Accesories">
    <div class="flip-box">
    <div class="flip-box-inner">
    <div class="flip-box-front">
    <img src={img4} class="imag" alt="myimage"/>

    </div>
    <div class="flip-box-back">
    <h2 >ACCESSORIES</h2>
    <p>....</p>
    </div>
    </div>
    </div>
    </div>

    </div>
      
)
}
export default Home;