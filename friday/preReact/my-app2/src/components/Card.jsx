export default function Cards({pic,title,desc}) {
    return (
        <div className="card">
            <img src={pic} />
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
  }