import Section from "./Section"
import ImageCorralFlex from "./ImageCorralFlex"
import SectionText from "./SectionText"
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
            <Section sectionId={'intro'} headerId={'introHeader'} header={'Introduction'} sectionContent={
                    <SectionText content={"This is some filler text to fill some space, couldn't access lorem ipsum generator at the time and didn't want to make it too full"} />
                }
            />
            <Section sectionId={'work'} headerId={'workHeader'} header={'Work'} sectionContent={
                    <SectionText content={"Filler for Gallery"}
                }
            />
            <Section sectionId={'contact'} headerId={'contactHeader'} header={'Contact'} sectionContent={
                    <SectionText content={"Filler for Contact"}
                }
            />
        </main>
    )
}

export default Main
