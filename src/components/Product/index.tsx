import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href=".">Compartilhar</a>
        <a href=".">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="t-shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href=".">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus sem,
      maximus quis pretium ac, varius ac leo. Sed convallis congue condimentum.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Mauris blandit odio commodo interdum luctus. Vestibulum
      ac egestas metus. Mauris viverra odio orci, ac hendrerit mi fringilla et.
      Curabitur et erat ac elit malesuada consectetur sit amet id tortor. Sed
      sed est auctor, molestie metus quis, volutpat nibh. Curabitur faucibus
      eleifend vulputate.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Cras lorem nunc, cursus nec felis egestas, commodo porttitor risus. Donec
      eleifend volutpat tincidunt. Sed commodo dolor sodales, mollis felis sit
      amet, aliquam leo. Proin dolor diam, pellentesque et imperdiet in, finibus
      quis quam. Donec luctus mi ipsum, sit amet lobortis augue auctor a.
      Suspendisse sit amet auctor lectus. Vestibulum nec feugiat mi. Vestibulum
      purus nisl, dapibus ut tincidunt quis, lobortis a felis. Ut nec elit ut
      orci gravida commodo ut et justo. Integer tincidunt eget diam sed finibus.
      Donec pharetra vulputate arcu, volutpat condimentum sapien varius id.
      Curabitur at risus non felis condimentum iaculis eu eu mi. Suspendisse
      dictum, erat non blandit hendrerit, erat arcu venenatis nibh, eu interdum
      nulla nisi a lacus.
    </p>
  </Description>
);

export default Product;
