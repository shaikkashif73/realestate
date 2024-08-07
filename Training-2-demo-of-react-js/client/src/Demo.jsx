const Demo = (props) => {
    
    return <>
        <h1>I am Demo</h1>
        <p>Title : {props.message.title}</p>
        <p>Duration:{props.message.duration}</p>
        <p>Language:{props.message.language}</p>
    </>

}

export default Demo