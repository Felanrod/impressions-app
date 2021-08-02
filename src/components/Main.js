import Section from "./Section"
import ImageCorralFlex from "./ImageCorralFlex"
import exampleImage1 from "../assets/images/example1.jpg"
import exampleImage2 from "../assets/images/example2.jpg"
import exampleImage3 from "../assets/images/example3.jpg"

const Main = () => {
    return (
        <main>
            <Section headerId={'mainTitle'} header={'Impressions Custom Upholstery'} sectionContent={
                <ImageCorralFlex src1={exampleImage1} alt1={'Example 1'}
                    src2={exampleImage2} alt2={'Example 2'}
                    src3={exampleImage3} alt3={'Example 3'}/>
                    
                }
            />
        </main>
    )
}

export default Main
