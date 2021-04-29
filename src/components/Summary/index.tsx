import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";


export function Summary(){

  const { transactions } = useTransactions();

  const totalDeposit = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      return acc + transaction.amount;
    }
    return acc
  }, 0);

  const totalwithdraw = transactions.reduce((acc, transaction) =>{
    if(transaction.type === 'withdraw'){
      return acc + transaction.amount;
    }
    return acc
  }, 0);

  return(
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>

        <strong>R${totalDeposit.toFixed(2)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saidas"/>
        </header>

        <strong>-R${totalwithdraw.toFixed(2)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas"/>
        </header>

        <strong>R${(totalDeposit-totalwithdraw).toFixed(2)}</strong>
      </div>

    </Container>
  )
}