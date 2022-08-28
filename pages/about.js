export default function About({ greeting, highlight }) {
    const highlightStyle = {
        color: '#FFFF00'
    }
    if (highlight) {
        return (
            <h1 style={highlightStyle}>{greeting}</h1>
        )
    }
    else {
        return (
            <h1>{greeting}</h1>
        )
    }
}