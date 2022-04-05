const Piece = (props: any) => {
    const src = props.src
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: "12px",
                margin: "12px",
                borderRadius: "16px",
                backgroundColor: "#F57C7C"
            }}
                onClick={() => window.location.href = src}>
                <img
                    src={props.image}
                    alt={props.name}
                    width="40px"
                    height="40px"
                    style={{ borderRadius: '100px', marginRight: '16px' }}
                />
                <div>
                    <div style={{ color: "white" }}>{props.name}</div>
                    <div style={{ color: "white" }}>{props.src}</div>
                </div>
            </div>
        </>
    )
}

export default Piece