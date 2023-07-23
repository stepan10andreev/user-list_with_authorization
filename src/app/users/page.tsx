import { UserList } from "@/components/UsersList/UserList";
import { Container } from "@/components/ui-components/Container/Container";
import { Content } from "@/components/ui-components/Content/Content";

export default function UsersListPage() {
  return (
    <Content>
      <Container width={1440}>
        <UserList />
      </Container>
    </Content>
  )
}
