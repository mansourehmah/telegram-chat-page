import loadingGif from './../assets/gif/Spinner-1s-200px.gif'

function Loading() {
    return (
        <div className="loading">
            <img src={loadingGif} alt="loading" />
        </div>
    )
}
export default Loading