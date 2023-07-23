import { UserList } from "@/components/UsersList/UserList";
import { Container } from "@/components/ui-components/Container/Container";
import { Content } from "@/components/ui-components/Content/Content";
import { UsersService } from "@/services/users.service";

export default function UsersListPage() {
  // const usersData = await UsersService.getUsers();
  // console.log(usersData);
  return (
    <Content>
      <Container width={1440}>
        <UserList />
      </Container>
    </Content>
  )
}
