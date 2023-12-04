import {useState} from 'react';

function App() {

const [imageSrc, setImageSrc] = useState("./images/image1.jpg")

  return (
    <div className="h-screen w-full overflow-hidden" ><img src = {imageSrc}/>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-3xl">
        <img onClick= {() => setImageSrc("./images/image1.jpg")} className="h-24 w-34 border border-black cursor-pointer" src="images/image1.jpg"/>
        <img onClick= {() => setImageSrc("./images/image2.jpg")} className="h-24 w-34 border border-black cursor-pointer" src="images/image2.jpg"/>
        <img onClick= {() => setImageSrc("./images/image3.jpg")} className="h-24 w-34 border border-black cursor-pointer" src="images/image3.jpg"/>
        <img onClick= {() => setImageSrc("./images/image4.jpg")} className="h-24 w-34 border border-black cursor-pointer" src="images/image4.jpg"/>
        <img onClick= {() => setImageSrc("./images/image5.jpg")} className="h-24 w-34 border border-black cursor-pointer" src="images/image5.jpg"/>
        <img onClick= {() => setImageSrc("./images/image6.jpg")} className="h-24 w-34 border border-black cursor-pointer" src="images/image6.jpg"/>
        <img onClick= {() => setImageSrc("./images/image7.jpg")} className="h-24 w-34 border border-black cursor-pointer" src="images/image7.jpg"/>
        <img onClick= {() => setImageSrc("./images/image8.jpg")} className="h-24 w-34 border border-black cursor-pointer" src="images/image8.jpg"/>
       </div>
       </div>
    </div>
  )
}

export default App
