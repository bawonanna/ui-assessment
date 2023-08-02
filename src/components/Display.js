function Display({points}) {
    return(
        <div style={{
            margin: '5px',
            border:   '1px green dotted'
        }}  >
         <h4> Points Generated for this Transaction:</h4>
         <p>{points}</p>
        </div>
    );
};

export default Display;