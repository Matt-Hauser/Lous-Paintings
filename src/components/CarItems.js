import { Typography } from "@mui/material";

function Item({ item }) {
  return (
    <>
      <img
        height={300}
        style={{ borderRadius: "5%" }}
        src={item.image}
        alt={item.title}
      />
      <Typography fontFamily={"Noto Serif"} fontWeight={500} color="black">
        {item.title}
      </Typography>
    </>
  );
}

export default Item;
