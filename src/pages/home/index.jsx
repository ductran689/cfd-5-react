

import Different from './components/Different'
import CourseList from './components/CourseList'
import Banner from './components/Banner'
import Testimonial from './components/testimonial/Testimonial'
import Gallery from './components/Gallery'
import Action from './components/Action'
import Popup_video from'./components/Popup_video'
import Popup_login from'./components/Popup_login'
import Popup_register from './components/Popup_register'
function Home() {
    return (
        <div>

            <main className="homepage" id="main">
                <Banner />
                <CourseList />
                <Different />
               

                <Testimonial/>
                <Gallery/>
                <Action/>
           </main>

            {/* popup video homepage */}
            <Popup_video/>
            <Popup_login/>
            <Popup_register/>
        </div>
    );
}

export default Home;