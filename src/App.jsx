import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ApplyPage from './pages/ApplyPage'
import ScrollToTop from './components/ScrollToTop'

import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <ScrollToTop />
      <Navbar />
      <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />  
              <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi, culpa odit ipsum, sunt ut dolorem deserunt nisi maiores architecto repellendus dolor cupiditate qui tempora aspernatur doloribus fugiat quasi quis inventore? Libero odit omnis odio distinctio laudantium laboriosam debitis harum architecto soluta impedit explicabo dicta mollitia sit cum sequi recusandae rem corporis molestias inventore neque quia atque, temporibus et? Dolore cum sapiente dicta similique tenetur, voluptatum ratione officia molestiae ea nulla quod aut fuga error a, officiis tempore facere magni, vitae repellat! Laborum numquam facere quas ullam vero vel modi aperiam hic quae, consequatur sunt mollitia quibusdam fugit ipsum corrupti? Ex accusamus animi, veritatis esse incidunt architecto commodi consectetur perferendis assumenda ab veniam ad cupiditate ipsa beatae repellat at aut! Cupiditate quidem omnis alias? Voluptatum voluptatem eveniet labore, vel qui quisquam quibusdam, adipisci pariatur deleniti veritatis inventore in. Facilis a dolores perspiciatis qui nihil officiis, ex, quasi velit quia quibusdam praesentium magni neque voluptatibus, fugit aspernatur reiciendis? Et maxime ut quam veritatis obcaecati provident, fugit soluta? Nemo doloremque iure aut dolor repudiandae quae suscipit libero, officia porro odio totam omnis dolorum perspiciatis. Velit sint doloribus iure totam soluta impedit nisi ipsam illum. Corrupti veniam quis atque doloremque harum consectetur ullam odio eligendi eveniet ad error facere nisi reprehenderit doloribus expedita, illo accusamus culpa adipisci quos voluptatum voluptas. Quo ea asperiores quam illum laborum tempore earum numquam soluta inventore totam minima, libero itaque, culpa ad praesentium! Voluptas impedit nam quis amet pariatur unde cumque suscipit doloremque enim veritatis quisquam ut qui, incidunt aut corporis nemo, magnam vitae obcaecati natus officiis. Fuga hic veritatis corporis, perferendis quaerat delectus deserunt nobis animi, laboriosam, iste nostrum rerum quod id asperiores aspernatur voluptas! Corrupti culpa quo deleniti! Aperiam, beatae quam maxime illum deserunt sit optio necessitatibus veniam quisquam voluptatem sed corporis odio, mollitia minima esse. Ad sed laudantium, vitae quam ducimus maxime quas deleniti id voluptatibus magnam officia ea eveniet cum veniam suscipit aut recusandae voluptates dolorem quos nihil sunt? Tenetur commodi inventore sit aliquam consectetur, beatae sapiente at laudantium perferendis temporibus neque, molestiae dolores rerum fuga repellendus. Odio veniam est dolorem ratione numquam sequi nisi iste dolorum quia adipisci repudiandae quisquam consequuntur facilis sunt dolore deleniti nobis, similique asperiores dolor eius ad animi quod quibusdam perspiciatis? Magnam, minus? Exercitationem atque esse aliquam minus id consequuntur obcaecati alias, nesciunt ex voluptatem ullam, consequatur ut animi voluptatum, doloremque nostrum itaque dicta inventore! Nulla magni tenetur deserunt voluptatem sit obcaecati repudiandae, aspernatur velit repellendus doloremque quos facilis non enim odio assumenda eveniet sed soluta aliquam. Cumque vero, expedita consequatur autem repellendus quas dolor odio vitae libero mollitia consequuntur asperiores animi cupiditate corporis tempora cum veniam fugiat excepturi necessitatibus ratione doloremque dolorum beatae. Quas magnam earum assumenda architecto voluptatum autem voluptate adipisci nihil quia asperiores praesentium quae quidem tenetur odio inventore ipsa, dolorum quod distinctio eaque? Consectetur modi quia pariatur rem vero architecto, repellendus repudiandae, molestias iusto reiciendis sit vitae inventore adipisci soluta voluptate doloremque ex eligendi. Laborum illo at nostrum culpa perspiciatis? Eos aut ut optio rem?</p>           
              <Footer />
            </>
          }
        />
        <Route
          path="/apply"
          element={<ApplyPage />}
        />
      </Routes>
      </div>
   
    </>
  )
}

export default App
