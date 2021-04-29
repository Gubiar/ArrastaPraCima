import React from "react";
import { Summary } from "../Summary";
import { TransictionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard(){

  return(
    <Container>
      <Summary />
      <TransictionsTable />
    </Container>
  )
}