

const Image = ({ src, alt, className, loading }) => {
    return (
        <img src={src} alt={alt} className={className} loading={loading}/>
    )
}

Image.defaultProps = {
    className: '',
    loading: 'lazy'
}

export default Image
