function KirbyItem({ item, addToCart }) {
  return (
    <div className="window" style={{ width: 220, display: "inline-block" }}>
      <div className="title-bar">
        <div className="title-bar-text">{item.name}</div>
      </div>
      <div className="window-body">
        <p>{item.description}.</p>
        <img className="KirbyItem" src={item.image} alt={item.description} />
        <div style={{ flex: 1 }} />
        <p
          style={{
            textAlign: "right",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: '4px'
          }}
        >
          <b>${item.price}</b>
          <button onClick={(e) => addToCart(e, item)}>Add To Cart</button>
        </p>
      </div>
    </div>
  );
}

export default KirbyItem;