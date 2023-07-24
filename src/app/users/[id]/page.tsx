import { UserScreen } from "@/components/screens/UserScreen";
import { UsersService } from "@/services/users.service";

type MetaDataProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: MetaDataProps
) {
  const id = params.id

  return {
    title: `User ${id} | Profile`,
    description: `Профиль пользователя ${id}`,
  }
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const userData = await UsersService.getUsersByID(id);

  return (
    <UserScreen userData={userData} />
  )
}
