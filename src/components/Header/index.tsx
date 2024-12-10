import * as Styled from './styled';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <img src={logoImg} alt='' />

        <Styled.NewTransactionButton>
          Nova transação
        </Styled.NewTransactionButton>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
}
