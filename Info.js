import './info.css'

export default function Info(props) {
    console.log(props)

    return <div className="info">
        {props.text}
        {props.children}
    </div>
}
