import styled from 'styled-components';

const ClientsContainer = styled.section`
  margin-inline: var(--margin-sm);
  margin-block: calc(var(--margin) * 3);
  display: flex;
  gap: var(--margin);
  position: relative;
  z-index: -2;
  .client {
    margin-block-start: auto;
    flex: 1 0 10%;
    img {
      width: 90%;
    }
  }
  @media only screen and (min-width: 1200px){
    /* margin-block-start: auto;
    margin:0; */
    padding:0;
    margin:0;
    margin-block-start: auto;
    max-width:70%;
    display: flex;
    z-index: 9;
    .client {
      img {
        width: 100px;
      }
    }
  }
`
const Clients = (): JSX.Element => {
  return (
    <ClientsContainer>
      <div className='client'>
        <img src='./images/client-databiz.svg' alt='' />
      </div>
      <div className='client'>
        <img src='./images/client-audiophile.svg' alt='' />
      </div>
      <div className='client'>
        <img src='./images/client-meet.svg' alt='' />
      </div>
      <div className='client'>
        <img src='./images/client-maker.svg' alt='' />
      </div>
    </ClientsContainer>
  )
}

export default Clients
