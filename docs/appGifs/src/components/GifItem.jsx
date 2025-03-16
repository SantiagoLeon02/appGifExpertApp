export const GifItem = ({title, url}) => {

    console.log(title, url);
    return (
        <>
        <div className="card">
            <div className="card">

            <img src={url} alt={title} srcset="" />
             <p>{title}</p>
            </div>
        </div>
        </>
    )
}