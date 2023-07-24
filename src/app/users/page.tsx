import { UsersListScreen } from "@/components/screens/UsersListScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Users | List',
  description: 'Список пользвоателей',
}

export default function UsersListPage() {
  return (
    <UsersListScreen />
  )
}
