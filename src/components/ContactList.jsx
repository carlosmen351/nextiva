import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const ContactList = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export { ContactList };