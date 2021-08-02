import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import Button from './Button'
import Image from './Image'

const ImageCorralFlex = ({ src1, alt1, src2, alt2, src3, alt3 }) => {
    return (
        <div className="corralContainer">
            <div className="corral">
                <Image src={src1} alt={alt1} className={'corralCenter'} />
                <Image src={src2} alt={alt2} className={'corralLeft'} />
                <Image src={src3} alt={alt3} className={'corralRight'} />
            </div>
            <div className="corralControls">
                <Button id={'prevCorralBtn'} text={<MdNavigateBefore />} />
                <Button id={'nextCorralBtn'} text={<MdNavigateNext />} />
            </div>
        </div>
    )
}

export default ImageCorralFlex
