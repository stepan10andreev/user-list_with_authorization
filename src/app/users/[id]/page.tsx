import { Header } from "@/components/Header/Header";
import { UserInfo } from "@/components/Header/UserInfo/UserInfo";
import { UserInfoContent } from "@/components/UserInfoContent/UserInfoContent";
import { UserScreen } from "@/components/screens/UserScreen";
import { Container } from "@/components/ui-components/Container/Container";
import { Content } from "@/components/ui-components/Content/Content";
import { Title } from "@/components/ui-components/Title/Title";
import { UIButton } from "@/components/ui-components/UIButton/UIButton";
import { UIText } from "@/components/ui-components/UIText/UIText";
import { USERS_PAGE_HEADER_DESRIPTION } from "@/constants/textConstants";
import { UsersService } from "@/services/users.service";

export default async function UserPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const userData = await UsersService.getUsersByID(id);

  return (
    <UserScreen userData={userData}/>
  )
}
