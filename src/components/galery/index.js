import React from "react";
import { Column, Grid } from "light-react-grid";
import Card from "../card";
import "./Galery.scss"
import Container from "../container";
const Galery = ( {data}) =>{
  return(
    <Container>
      <Grid>
        {data.map((item, i)=>{
          return (
            <Column  key={i} size={{lg: 4}}>
              <Card
                src={item.src}
                alt={item.alt}
                link={item.link}
                headline={item.headline}
                subheadline={item.subheadline}
                isLarge={item.isLarge}
              />
            </Column>
            )
        })}
      </Grid>
    </Container>
  )
}
export default Galery;