import { Header } from "@/components/Header/Header";
import { UserList } from "@/components/UsersList/UserList";
import { Container } from "@/components/ui-components/Container/Container";
import { Content } from "@/components/ui-components/Content/Content";
import { Title } from "@/components/ui-components/Title/Title";
import { UIButton } from "@/components/ui-components/UIButton/UIButton";
import { UIText } from "@/components/ui-components/UIText/UIText";
import { USERS_PAGE_HEADER_DESRIPTION } from "@/constants/textConstants";
import { UsersService } from "@/services/users.service";

export default function UsersListPage() {
  return (
    <>
      <Header>
        <Container width={1440}>
          <Title text={'Наша команда'}></Title>
          <UIText As={'p'} text={USERS_PAGE_HEADER_DESRIPTION}></UIText>
          <UIButton type={'button'} text={'Выход'} name={'exitButton'} />
        </Container>
      </Header>
      <Content>
        <Container width={1440}>
          <UserList />
        </Container>
      </Content>
    </>
  )
}
