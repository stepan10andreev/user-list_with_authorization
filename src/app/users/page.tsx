import { Header } from "@/components/Header/Header";
import { useAppDispatch, useAppSelector } from "@/components/Hooks/useApp";
import { UserList } from "@/components/UsersList/UserList";
import { UsersListScreen } from "@/components/screens/UsersListScreen";
import { Container } from "@/components/ui-components/Container/Container";
import { Content } from "@/components/ui-components/Content/Content";
import { Title } from "@/components/ui-components/Title/Title";
import { UIButton } from "@/components/ui-components/UIButton/UIButton";
import { UIText } from "@/components/ui-components/UIText/UIText";
import { USERS_PAGE_HEADER_DESRIPTION } from "@/constants/textConstants";
import { UsersService } from "@/services/users.service";
import { Suspense } from "react";

export default function UsersListPage() {
  return (
    <UsersListScreen />
  )
}
