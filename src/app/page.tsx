import { RegistrationForm } from '@/components/RegistrationForm/RegistrationForm'
import { CenterContainer } from '@/components/ui-components/CenterContainer/CenterContainer'

export default function Home() {
  return (
    <CenterContainer width={500}>
      <RegistrationForm />
    </CenterContainer>
  )
}
